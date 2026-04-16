"use client";

import React, { useCallback, useRef, useState } from "react";
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

const ServiceMovingSvg = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2.4 1.20001C1.07625 1.20001 0 2.27626 0 3.60001V15C0 16.6575 1.3425 18 3 18C3.9825 18 4.8525 17.5275 5.4 16.8C5.9475 17.5275 6.8175 18 7.8 18C9.4575 18 10.8 16.6575 10.8 15C10.8 14.7938 10.7775 14.595 10.74 14.4H16.86C16.8225 14.595 16.8 14.7938 16.8 15C16.8 16.6575 18.1425 18 19.8 18C21.4575 18 22.8 16.6575 22.8 15C22.8 14.7938 22.7775 14.595 22.74 14.4H22.8C23.4638 14.4 24 13.8638 24 13.2V9.81376C24 9.46876 23.88 9.13126 23.6625 8.86501L21.4575 6.17251C21.06 5.68501 20.4638 5.40376 19.8338 5.40376L18 5.40001V3.60001C18 2.27626 16.9237 1.20001 15.6 1.20001H2.4ZM21.9375 9.60001H18V7.20001H19.83C19.92 7.20001 20.0063 7.24126 20.0625 7.30876L21.9375 9.60001ZM19.8 13.8C20.1183 13.8 20.4235 13.9264 20.6485 14.1515C20.8736 14.3765 21 14.6818 21 15C21 15.3183 20.8736 15.6235 20.6485 15.8485C20.4235 16.0736 20.1183 16.2 19.8 16.2C19.4817 16.2 19.1765 16.0736 18.9515 15.8485C18.7264 15.6235 18.6 15.3183 18.6 15C18.6 14.6818 18.7264 14.3765 18.9515 14.1515C19.1765 13.9264 19.4817 13.8 19.8 13.8ZM6.6 15C6.6 14.6818 6.72643 14.3765 6.95147 14.1515C7.17652 13.9264 7.48174 13.8 7.8 13.8C8.11826 13.8 8.42348 13.9264 8.64853 14.1515C8.87357 14.3765 9 14.6818 9 15C9 15.3183 8.87357 15.6235 8.64853 15.8485C8.42348 16.0736 8.11826 16.2 7.8 16.2C7.48174 16.2 7.17652 16.0736 6.95147 15.8485C6.72643 15.6235 6.6 15.3183 6.6 15ZM3 13.8C3.31826 13.8 3.62348 13.9264 3.84853 14.1515C4.07357 14.3765 4.2 14.6818 4.2 15C4.2 15.3183 4.07357 15.6235 3.84853 15.8485C3.62348 16.0736 3.31826 16.2 3 16.2C2.68174 16.2 2.37652 16.0736 2.15147 15.8485C1.92643 15.6235 1.8 15.3183 1.8 15C1.8 14.6818 1.92643 14.3765 2.15147 14.1515C2.37652 13.9264 2.68174 13.8 3 13.8Z"
      fill="currentColor"
    />
  </svg>
);

const ServiceTrashSvg = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 6C20.2549 6.00028 20.5 6.09788 20.6854 6.27285C20.8707 6.44782 20.9822 6.68695 20.9972 6.94139C21.0121 7.19584 20.9293 7.44638 20.7657 7.64183C20.6021 7.83729 20.3701 7.9629 20.117 7.993L20 8H19.919L19 19C19 19.7652 18.7077 20.5015 18.1827 21.0583C17.6577 21.615 16.9399 21.9501 16.176 21.995L16 22H7.99999C6.40199 22 5.09599 20.751 5.00799 19.25L5.00299 19.083L4.07999 8H3.99999C3.74511 7.99972 3.49996 7.90212 3.31462 7.72715C3.12929 7.55218 3.01776 7.31305 3.00282 7.05861C2.98788 6.80416 3.07067 6.55362 3.23426 6.35817C3.39785 6.16271 3.62989 6.0371 3.88299 6.007L3.99999 6H20ZM9.99999 10C9.73477 10 9.48042 10.1054 9.29288 10.2929C9.10535 10.4804 8.99999 10.7348 8.99999 11V17C8.99999 17.2652 9.10535 17.5196 9.29288 17.7071C9.48042 17.8946 9.73477 18 9.99999 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 9.99999 10ZM14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1053 10.4804 13 10.7348 13 11V17C13 17.2652 13.1053 17.5196 13.2929 17.7071C13.4804 17.8946 13.7348 18 14 18C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10ZM14 2C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4C15.9997 4.25488 15.9021 4.50003 15.7271 4.68537C15.5522 4.8707 15.313 4.98223 15.0586 4.99717C14.8042 5.01211 14.5536 4.92933 14.3582 4.76574C14.1627 4.60214 14.0371 4.3701 14.007 4.117L14 4H9.99999L9.99299 4.117C9.96289 4.3701 9.83728 4.60214 9.64182 4.76574C9.44637 4.92933 9.19583 5.01211 8.94139 4.99717C8.68694 4.98223 8.44781 4.8707 8.27284 4.68537C8.09787 4.50003 8.00027 4.25488 7.99999 4C7.99983 3.49542 8.1904 3.00943 8.53349 2.63945C8.87658 2.26947 9.34684 2.04284 9.84999 2.005L9.99999 2H14Z"
      fill="currentColor"
    />
  </svg>
);

const ServiceDeliverySvg = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.1103 7.74996L10.6253 9.61296C11.1103 11.368 11.3523 12.246 12.0653 12.645C12.7783 13.045 13.6833 12.809 15.4933 12.339L17.4133 11.839C19.2233 11.369 20.1283 11.134 20.5403 10.443C20.9523 9.75096 20.7103 8.87296 20.2243 7.11796L19.7103 5.25596C19.2253 3.49996 18.9823 2.62196 18.2703 2.22296C17.5563 1.82296 16.6513 2.05896 14.8413 2.52996L12.9213 3.02796C11.1113 3.49796 10.2063 3.73396 9.79534 4.42596C9.38334 5.11696 9.62534 5.99496 10.1103 7.74996Z"
      fill="currentColor"
    />
    <path
      d="M2.277 5.24703C2.30335 5.15205 2.34816 5.0632 2.40887 4.98555C2.46958 4.90791 2.54499 4.84299 2.63081 4.79451C2.71662 4.74603 2.81115 4.71494 2.90899 4.70302C3.00683 4.69109 3.10606 4.69857 3.201 4.72503L4.904 5.19703C5.35521 5.31987 5.76695 5.55739 6.09919 5.88647C6.43143 6.21555 6.67286 6.62501 6.8 7.07503L8.951 14.861L9.109 15.408C9.74676 15.6431 10.2842 16.0905 10.631 16.675L10.941 16.579L19.811 14.274C19.9063 14.2492 20.0056 14.2434 20.1032 14.257C20.2008 14.2705 20.2948 14.3032 20.3797 14.353C20.4647 14.4029 20.539 14.469 20.5984 14.5476C20.6578 14.6262 20.7012 14.7157 20.726 14.811C20.7508 14.9064 20.7566 15.0057 20.7431 15.1032C20.7295 15.2008 20.6969 15.2948 20.647 15.3797C20.5971 15.4647 20.531 15.539 20.4524 15.5984C20.3739 15.6579 20.2843 15.7012 20.189 15.726L11.352 18.022L11.022 18.124C11.016 19.394 10.139 20.556 8.81201 20.9C7.222 21.314 5.587 20.398 5.161 18.856C4.735 17.314 5.679 15.727 7.269 15.314C7.34834 15.294 7.42734 15.2767 7.506 15.262L5.354 7.47403C5.29581 7.27408 5.18699 7.09253 5.03809 6.94695C4.88918 6.80137 4.70522 6.69669 4.504 6.64303L2.8 6.17003C2.70505 6.14378 2.61619 6.09908 2.53852 6.03849C2.46084 5.97789 2.39586 5.90259 2.34729 5.81687C2.29872 5.73116 2.26752 5.63672 2.25546 5.53894C2.2434 5.44117 2.25072 5.34197 2.277 5.24703Z"
      fill="currentColor"
    />
  </svg>
);

const ServiceLaborSvg = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21.71 20.29L20.29 21.71C20.1026 21.8962 19.8492 22.0008 19.585 22.0008C19.3208 22.0008 19.0674 21.8962 18.88 21.71L7 9.85C6.67484 9.94433 6.33853 9.99477 6 10C5.3633 9.99955 4.73591 9.84711 4.16999 9.55536C3.60407 9.26362 3.11596 8.84099 2.74626 8.32263C2.37656 7.80426 2.13594 7.20513 2.04441 6.57505C1.95287 5.94496 2.01307 5.30213 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22C5.30213 2.01307 5.94496 1.95287 6.57505 2.04441C7.20513 2.13594 7.80426 2.37656 8.32263 2.74626C8.84099 3.11596 9.26362 3.60407 9.55536 4.16999C9.84711 4.73591 9.99954 5.3633 10 6C9.99477 6.33853 9.94432 6.67484 9.85 7L21.71 18.88C21.8962 19.0674 22.0008 19.3208 22.0008 19.585C22.0008 19.8492 21.8962 20.1026 21.71 20.29ZM2.29 18.88C2.10375 19.0674 1.99921 19.3208 1.99921 19.585C1.99921 19.8492 2.10375 20.1026 2.29 20.29L3.71 21.71C3.89736 21.8962 4.15081 22.0008 4.415 22.0008C4.67918 22.0008 4.93264 21.8962 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4L20 2Z"
      fill="currentColor"
    />
  </svg>
);

const SERVICE_ICONS: Record<ServiceId, React.ComponentType<{ className?: string }>> = {
  moving: ServiceMovingSvg,
  trash: ServiceTrashSvg,
  delivery: ServiceDeliverySvg,
  labor: ServiceLaborSvg,
};

type FormStep = 1 | 2 | 3;

function parsePreferredDate(s: string): Date | null {
  if (!s || !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(s.trim())) return null;
  const [m, d, y] = s.split("/").map(Number);
  if (m < 1 || m > 12 || d < 1 || d > 31) return null;
  const date = new Date(y, m - 1, d);
  return isNaN(date.getTime()) ? null : date;
}

const ServiceForm = () => {
  const [step, setStep] = useState<FormStep>(1);
  const formSectionRef = useRef<HTMLDivElement>(null);
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

  const currentServiceId = selectedServices[detailFormIndex] ?? null;
  const currentService = currentServiceId
    ? SERVICES.find((s) => s.id === currentServiceId)
    : null;

  const toggleService = useCallback((id: ServiceId) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }, []);

  const scrollFormToTop = useCallback(() => {
    setTimeout(() => {
      const el = formSectionRef.current;
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 80);
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
      scrollFormToTop();
    } else if (step === 2) {
      if (detailFormIndex < selectedServices.length - 1) {
        setDetailFormIndex((i) => i + 1);
        scrollFormToTop();
      } else {
        setStep(3);
        scrollFormToTop();
      }
    }
  }, [step, selectedServices, detailFormIndex, scrollFormToTop]);

  const goBack = useCallback(() => {
    if (step === 2) {
      if (detailFormIndex > 0) {
        setDetailFormIndex((i) => i - 1);
        scrollFormToTop();
      } else {
        setStep(1);
        scrollFormToTop();
      }
    } else if (step === 3) {
      setStep(2);
      setDetailFormIndex(selectedServices.length - 1);
      scrollFormToTop();
    }
  }, [step, detailFormIndex, selectedServices.length, scrollFormToTop]);

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
    <div
      ref={formSectionRef}
      className="bg-[#191A05] w-full max-w-[953px] px-5 md:px-0 py-6  sm:py-10 "
    >
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
      <div className="flex items-center gap-0 mb-8 sm:mb-10">
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
                  "text-[14px] font-inter font-medium hidden sm:inline",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {SERVICES.map((svc) => {
              const isSelected = selectedServices.includes(svc.id);
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => toggleService(svc.id)}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl text-left transition-all border-2 w-full",
                    isSelected
                      ? "bg-[#48432D] border-[#48432D]"
                      : "bg-[#FEFEFF] border-transparent hover:bg-white"
                  )}
                >
                  <span
                    className={cn(
                      "w-6 h-6 shrink-0 flex items-center justify-center",
                      isSelected ? "text-white" : "text-[#48432D]"
                    )}
                  >
                    {React.createElement(SERVICE_ICONS[svc.id], {
                      className: "w-full h-full",
                    })}
                  </span>
                  <span
                    className={cn(
                      "font-inter font-medium text-[15px] sm:text-[16px] leading-[22px]",
                      isSelected ? "text-white" : "text-[#48432D]"
                    )}
                  >
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
            <Text className="text-[#FFFFFF] text-[18px] font-inter mb-4">
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
      <div className={cn(
        "flex gap-4",
        step === 1
          ? "flex-col sm:flex-row sm:justify-end"
          : "flex-col sm:flex-row sm:items-center sm:justify-between"
      )}>
        <div className={cn(
          "mob:w-full order-1",
          step > 1 && "sm:w-auto  sm:order-2"
        )}>
          <button
            type="button"
            onClick={step === 3 ? handleSendInformation : goNext}
            disabled={step === 3 ? !canGoNext || isSubmitting : !canGoNext}
            className={cn(
              "rounded-[12px] pl-5 pr-4 py-4 sm:py-3.5 text-[15px] font-medium w-full bg-[#48432D] hover:bg-[#5F5E4B] sm:hover:bg-[#35361a] text-white flex items-center justify-center gap-2 font-inter",
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
            {!isSubmitting && <IoChevronForwardOutline className="w-5 h-5 text-white shrink-0" />}
          </button>
        </div>
        {step > 1 && (
          <div className="w-full sm:w-auto sm:max-w-[120px] order-2 sm:order-1">
            <button
              type="button"
              onClick={goBack}
              className="rounded-[12px] pl-4 pr-5 py-4 sm:py-3.5 text-[15px] font-medium w-full bg-[#48432D] hover:bg-[#5F5E4B] sm:hover:bg-[#35361a] text-white flex items-center justify-center gap-2 font-inter"
            >
              <IoChevronBackOutline className="w-5 h-5 text-white shrink-0" />
              <span>Back</span>
            </button>
          </div>
        )}
      </div>
      )}
    </div>
  );
};

export default ServiceForm;
