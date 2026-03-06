"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Text from "@/components/ui/Text";
import { cn } from "@/libs/utils/twMerge";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import VolumePhotoDetailForm from "./VolumePhotoDetailForm";
import ContactDateForm from "./ContactDateForm";
import type { ServiceId } from "./types";
import {
  EMPTY_DETAIL_DATA,
  EMPTY_CONTACT_DATA,
  SERVICE_FORM_STORAGE_KEY,
  SERVICE_FORM_DRAFT_KEY,
  type VolumePhotoDetailData,
  type ContactData,
  type ServiceFormPayload,
  type ServiceFormDraft,
  type VolumePhotoDetailDataSerialized,
} from "./types";

const STEPS = [
  { id: 1, label: "Service" },
  { id: 2, label: "Volume & Photo" },
  { id: 3, label: "Contact & Date" },
];

const SERVICES: { id: ServiceId; label: string }[] = [
  { id: "moving", label: "Moving" },
  { id: "trash", label: "Trash" },
  { id: "delivery", label: "Delivery" },
  { id: "labor", label: "Labor" },
];

type FormStep = 1 | 2 | 3;

function parsePreferredDate(s: string): Date | null {
  if (!s || !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(s.trim())) return null;
  const [d, m, y] = s.split("/").map(Number);
  if (d < 1 || d > 31 || m < 1 || m > 12) return null;
  const date = new Date(y, m - 1, d);
  return isNaN(date.getTime()) ? null : date;
}

function detailToSerialized(
  d: VolumePhotoDetailData
): VolumePhotoDetailDataSerialized {
  const { photoFiles, ...rest } = d;
  return { ...rest, photoFileNames: photoFiles.map((f) => f.name) };
}

function serializedToDetail(
  s: VolumePhotoDetailDataSerialized
): VolumePhotoDetailData {
  const { photoFileNames, ...rest } = s;
  return { ...rest, photoFiles: [] };
}

const ServiceForm = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [selectedServices, setSelectedServices] = useState<ServiceId[]>([]);
  const [detailFormIndex, setDetailFormIndex] = useState(0);
  const [detailFormData, setDetailFormData] = useState<
    Record<string, VolumePhotoDetailData>
  >({});
  const [detailFormValid, setDetailFormValid] = useState(false);
  const [contact, setContact] = useState<ContactData>(EMPTY_CONTACT_DATA);
  const [preferredDateValue, setPreferredDateValue] = useState<Date | null>(
    null
  );
  const [contactFormValid, setContactFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const didRestoreRef = useRef(false);
  const skipNextPersistRef = useRef(true);

  // Restore draft once on mount (client-only)
  useEffect(() => {
    if (typeof window === "undefined" || didRestoreRef.current) return;
    didRestoreRef.current = true;
    try {
      const raw = localStorage.getItem(SERVICE_FORM_DRAFT_KEY);
      if (!raw) return;
      const draft: ServiceFormDraft = JSON.parse(raw);
      if (
        !draft ||
        !Array.isArray(draft.selectedServices) ||
        typeof draft.step !== "number" ||
        draft.step < 1 ||
        draft.step > 3
      )
        return;
      setStep(draft.step as FormStep);
      setSelectedServices(draft.selectedServices);
      setDetailFormIndex(Math.max(0, Math.min(draft.detailFormIndex ?? 0, (draft.selectedServices?.length ?? 1) - 1)));
      const restoredDetail: Record<string, VolumePhotoDetailData> = {};
      if (draft.detailFormData && typeof draft.detailFormData === "object") {
        Object.entries(draft.detailFormData).forEach(([id, s]) => {
          restoredDetail[id] = serializedToDetail(s);
        });
      }
      setDetailFormData(restoredDetail);
      setContact(draft.contact ?? EMPTY_CONTACT_DATA);
      setPreferredDateValue(
        draft.contact?.preferredDate
          ? parsePreferredDate(draft.contact.preferredDate)
          : null
      );
      skipNextPersistRef.current = true;
    } catch {
      // ignore invalid draft
    }
  }, []);

  // Persist draft whenever form state changes (skip first run so we don't overwrite restored draft)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (skipNextPersistRef.current) {
      skipNextPersistRef.current = false;
      return;
    }
    const draft: ServiceFormDraft = {
      step,
      selectedServices,
      detailFormIndex,
      detailFormData: Object.fromEntries(
        Object.entries(detailFormData).map(([id, d]) => [
          id,
          detailToSerialized(d),
        ])
      ),
      contact,
    };
    try {
      localStorage.setItem(SERVICE_FORM_DRAFT_KEY, JSON.stringify(draft));
    } catch {
      // ignore
    }
  }, [
    step,
    selectedServices,
    detailFormIndex,
    detailFormData,
    contact,
  ]);

  const currentServiceId = selectedServices[detailFormIndex] ?? null;
  const currentService = currentServiceId
    ? SERVICES.find((s) => s.id === currentServiceId)
    : null;

  const toggleService = useCallback((id: ServiceId) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }, []);

  const goNext = useCallback(() => {
    if (step === 1) {
      if (selectedServices.length === 0) return;
      setStep(2);
      setDetailFormIndex(0);
      selectedServices.forEach((id) => {
        setDetailFormData((d) => ({
          ...d,
          [id]: d[id] ?? { ...EMPTY_DETAIL_DATA },
        }));
      });
    } else if (step === 2) {
      if (detailFormIndex < selectedServices.length - 1) {
        setDetailFormIndex((i) => i + 1);
      } else {
        setStep(3);
      }
    }
  }, [step, selectedServices, detailFormIndex]);

  const goBack = useCallback(() => {
    if (step === 2) {
      if (detailFormIndex > 0) {
        setDetailFormIndex((i) => i - 1);
      } else {
        setStep(1);
      }
    } else if (step === 3) {
      setStep(2);
      setDetailFormIndex(selectedServices.length - 1);
    }
  }, [step, detailFormIndex, selectedServices.length]);

  const updateDetailData = useCallback(
    (id: string, data: VolumePhotoDetailData) => {
      setDetailFormData((prev) => ({ ...prev, [id]: data }));
    },
    []
  );

  const canGoNext =
    step === 1
      ? selectedServices.length > 0
      : step === 2
        ? detailFormValid
        : step === 3
          ? contactFormValid
          : true;

  const buildPayload = useCallback((): ServiceFormPayload & { photoFileOrder?: string[] } => {
    const serializedDetail: Record<string, VolumePhotoDetailDataSerialized> = {};
    const photoFileOrder: string[] = [];
    selectedServices.forEach((id) => {
      const d = detailFormData[id];
      if (!d) return;
      const { photoFiles, ...rest } = d;
      serializedDetail[id] = {
        ...rest,
        photoFileNames: photoFiles.map((f) => f.name),
      };
      (photoFiles || []).forEach(() => photoFileOrder.push(id));
    });
    return {
      selectedServices,
      detailFormData: serializedDetail,
      contact,
      submittedAt: new Date().toISOString(),
      photoFileOrder,
    };
  }, [selectedServices, detailFormData, contact]);

  const getPhotoFilesInOrder = useCallback((): File[] => {
    const files: File[] = [];
    selectedServices.forEach((id) => {
      const d = detailFormData[id];
      if (!d?.photoFiles?.length) return;
      d.photoFiles.forEach((f) => files.push(f));
    });
    return files;
  }, [selectedServices, detailFormData]);

  const handleSendInformation = useCallback(async () => {
    const payload = buildPayload();
    const photoFiles = getPhotoFilesInOrder();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const formData = new FormData();
      formData.append("payload", JSON.stringify(payload));
      photoFiles.forEach((file) => formData.append("photos", file));
      const res = await fetch("/api/serviceForm", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data.message || "Failed to send. Please try again.");
        return;
      }
      localStorage.setItem(SERVICE_FORM_STORAGE_KEY, JSON.stringify(payload));
      localStorage.removeItem(SERVICE_FORM_DRAFT_KEY);
      setSubmitSuccess(true);
      setStep(1);
      setSelectedServices([]);
      setDetailFormIndex(0);
      setDetailFormData({});
      setContact(EMPTY_CONTACT_DATA);
      setPreferredDateValue(null);
    } catch (e) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [buildPayload, getPhotoFilesInOrder]);

  return (
    <div className="bg-[#191A05] w-full max-w-[953px] mx-auto px-8 py-10 md:px-10">
      {/* Header */}
      <Text
        as="h1"
        className="text-[32px] md:text-[48px] font-bold font-inter leading-tight text-[#FFFFFF] mb-2"
      >
        Let&apos;s get started
      </Text>
      <Text className="text-[#FFFFFF] text-[16px] font-inter leading-[22.4px] opacity-90 mb-8">
        Three quick steps. No commitment until you accept the quote.
      </Text>

      {/* Stepper */}
      <div className="flex items-center gap-0 mb-10">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-inter font-medium shrink-0",
                  step >= s.id
                    ? "bg-[#48432D] text-white"
                    : "bg-[#FEFEFF] text-[#48432D]"
                )}
              >
                {s.id}
              </div>
              <span
                className={cn(
                  "text-[14px] font-inter font-medium",
                  step >= s.id ? "text-white" : "text-white"
                )}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "h-px mx-2 min-w-[24px] flex-1 max-w-[80px]",
                  step > s.id ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]"
                )}
                aria-hidden
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Service selection */}
      {step === 1 && !submitSuccess && (
        <>
          <Text className="text-[16px] font-inter font-medium text-[#FFFFFF] mb-5">
            What do you need hauled?
          </Text>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {SERVICES.map((svc) => {
              const isSelected = selectedServices.includes(svc.id);
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => toggleService(svc.id)}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl text-left transition-all border-2",
                    isSelected
                      ? "bg-[#FEFEFF] border-[#48432D] ring-2 ring-[#E2E1DB] ring-offset-2 ring-offset-[#48432D]"
                      : "bg-[#FEFEFF] border-transparent hover:bg-white"
                  )}
                >
                  <Image
                    src={`/images/serviceform/${svc.id}.png`}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 shrink-0 object-contain"
                  />
                  <span className="font-inter font-medium text-[16px] leading-[22px] text-[#191A05]">
                    {svc.label}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Step 2: Volume & Photo detail form (per selected service) */}
      {step === 2 && currentServiceId && currentService && (
        <div className="mb-10">
          {selectedServices.length > 1 && (
            <Text className="text-[#FFFFFF]/80 text-[14px] font-inter mb-4">
              Step {detailFormIndex + 1} of {selectedServices.length} –{" "}
              {currentService.label}
            </Text>
          )}
          <VolumePhotoDetailForm
            service={currentServiceId}
            serviceLabel={currentService.label}
            data={
              detailFormData[currentServiceId] ?? { ...EMPTY_DETAIL_DATA }
            }
            onChange={(data) => updateDetailData(currentServiceId, data)}
            onValidChange={setDetailFormValid}
          />
        </div>
      )}

      {/* Step 3: Contact & Date */}
      {step === 3 && (
        <div className="mb-10">
          {submitError && (
            <p className="text-red-400 text-sm font-inter mb-4">{submitError}</p>
          )}
          <ContactDateForm
            data={contact}
            preferredDateValue={preferredDateValue}
            onChange={setContact}
            onPreferredDateChange={setPreferredDateValue}
            onValidChange={setContactFormValid}
          />
        </div>
      )}

      {/* Success message */}
      {submitSuccess && (
        <div className="mb-10 p-6 rounded-xl bg-[#E2E1DB]/20 border border-[#E2E1DB] text-[#E2E1DB]">
          <p className="font-inter font-medium text-lg">Thank you!</p>
          <p className="font-inter text-sm mt-2 opacity-90">
            We have received your request and will get back to you soon with a quote.
          </p>
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="mt-4 font-inter text-sm underline hover:no-underline"
          >
            Submit another request
          </button>
        </div>
      )}

      {/* Navigation */}
      {!submitSuccess && (
      <div className="flex items-center justify-between gap-4">
        <div className="">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className=
              "rounded-xl pl-3 pr-5 py-3.5 text-[15px] font-medium w-full max-w-[120px] bg-[#48432D]  hover:bg-[#35361a] text-[#FFFFFF] flex items-center justify-center gap-1 font-inter"
              >
              <IoChevronBackOutline className="w-5 h-5 text-[#191A05]" />
              <span> Back</span>
            </button>
          ) : null}
        </div>
        <div className="flex-1" />
        <div className="">
          <button
            type="button"
            onClick={step === 3 ? handleSendInformation : goNext}
            disabled={step === 3 ? !canGoNext || isSubmitting : !canGoNext}
            className={cn(
              "rounded-xl pl-5 pr-3 py-3.5 text-[15px] font-medium w-full max-w-[120px] bg-[#48432D]  hover:bg-[#35361a] text-[#FFFFFF] flex items-center justify-center gap-1 font-inter",
              (!canGoNext || isSubmitting) && "opacity-50 cursor-not-allowed"
            )}
          >
            {isSubmitting
              ? "Sending…"
              : step === 2 && detailFormIndex < selectedServices.length - 1
                ? "Next"
                : step === 3
                  ? "Send information"
                  : "Next"}
            {!isSubmitting && <IoChevronForwardOutline className="w-5 h-5 text-[#191A05]" />}
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default ServiceForm;
