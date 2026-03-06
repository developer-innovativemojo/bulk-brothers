"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Text from "@/components/ui/Text";
import { cn } from "@/libs/utils/twMerge";
import {
  IoChevronDownOutline,
  IoCloudUploadOutline,
  IoCheckmark,
  IoCloseOutline,
} from "react-icons/io5";
import type { ServiceId } from "./types";
import {
  type VolumePhotoDetailData,
  type VolumeSize,
  type PropertyType,
  type ProductWeight,
  PROPERTY_TYPES,
  PRODUCT_WEIGHTS,
  WORKERS_OPTIONS,
} from "./types";
import Image from "next/image";
import uploadicon from "@/public/images/serviceform/upload.png";
import propertytypeIcon from "@/public/images/serviceform/propertytype.png";
import labordropIcon from "@/public/images/serviceform/labordrop.png";

const TruckSmallSvg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("shrink-0", className)}
  >
    <path
      d="M3 7C1.89 7 1 7.89 1 9V17H3C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20C6.79565 20 7.55871 19.6839 8.12132 19.1213C8.68393 18.5587 9 17.7956 9 17H15C15 17.7956 15.3161 18.5587 15.8787 19.1213C16.4413 19.6839 17.2044 20 18 20C18.7956 20 19.5587 19.6839 20.1213 19.1213C20.6839 18.5587 21 17.7956 21 17H23V13C23 11.89 22.11 11 21 11L18 7H3ZM15 8.5H17.5L19.46 11H15V8.5ZM6 15.5C6.39782 15.5 6.77936 15.658 7.06066 15.9393C7.34196 16.2206 7.5 16.6022 7.5 17C7.5 17.3978 7.34196 17.7794 7.06066 18.0607C6.77936 18.342 6.39782 18.5 6 18.5C5.60218 18.5 5.22064 18.342 4.93934 18.0607C4.65804 17.7794 4.5 17.3978 4.5 17C4.5 16.6022 4.65804 16.2206 4.93934 15.9393C5.22064 15.658 5.60218 15.5 6 15.5ZM18 15.5C18.3978 15.5 18.7794 15.658 19.0607 15.9393C19.342 16.2206 19.5 16.6022 19.5 17C19.5 17.3978 19.342 17.7794 19.0607 18.0607C18.7794 18.342 18.3978 18.5 18 18.5C17.6022 18.5 17.2206 18.342 16.9393 18.0607C16.658 17.7794 16.5 17.3978 16.5 17C16.5 16.6022 16.658 16.2206 16.9393 15.9393C17.2206 15.658 17.6022 15.5 18 15.5Z"
      fill="currentColor"
    />
  </svg>
);

const TruckMediumSvg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("shrink-0", className)}
  >
    <path
      d="M15 4C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V7H18.52C18.8198 7.00004 19.1157 7.06746 19.3859 7.19728C19.6561 7.3271 19.8936 7.51599 20.081 7.75L21.561 9.601C21.8451 9.95569 21.9999 10.3966 22 10.851V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19C19 17.7956 18.6839 18.5587 18.1213 19.1213C17.5587 19.6839 16.7956 20 16 20C15.2044 20 14.4413 19.6839 13.8787 19.1213C13.3161 18.5587 13 17.7956 13 17H10C10 17.394 9.9224 17.7841 9.77164 18.1481C9.62087 18.512 9.3999 18.8427 9.12132 19.1213C8.84274 19.3999 8.51203 19.6209 8.14805 19.7716C7.78407 19.9224 7.39397 20 7 20C6.60603 20 6.21593 19.9224 5.85195 19.7716C5.48797 19.6209 5.15726 19.3999 4.87868 19.1213C4.6001 18.8427 4.37913 18.512 4.22836 18.1481C4.0776 17.7841 4 17.394 4 17C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H15ZM7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17C15 17.2652 15.1054 17.5196 15.2929 17.7071C15.4804 17.8946 15.7348 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17C17 16.7348 16.8946 16.4804 16.7071 16.2929C16.5196 16.1054 16.2652 16 16 16ZM18.52 9H17V13H20V10.85L18.52 9Z"
      fill="currentColor"
    />
  </svg>
);

const TruckLargeSvg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("shrink-0", className)}
  >
    <path
      d="M17 8H20L23 12.056V18H20.965C20.8446 18.8331 20.4281 19.5949 19.7917 20.1459C19.1553 20.6969 18.3418 21.0002 17.5 21.0002C16.6582 21.0002 15.8447 20.6969 15.2083 20.1459C14.5719 19.5949 14.1554 18.8331 14.035 18H8.965C8.84612 18.8343 8.43021 19.5977 7.79368 20.1499C7.15714 20.7022 6.34272 21.0063 5.5 21.0063C4.65728 21.0063 3.84286 20.7022 3.20632 20.1499C2.56979 19.5977 2.15388 18.8343 2.035 18H1V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H16C16.2652 5 16.5196 5.10536 16.7071 5.29289C16.8946 5.48043 17 5.73478 17 6V8ZM17 10V13H21V12.715L18.992 10H17Z"
      fill="currentColor"
    />
  </svg>
);

const VOLUME_OPTIONS: { value: VolumeSize; label: string; sublabel: string }[] = [
  { value: "small", label: "Small", sublabel: "Pickup Truck / Sprinter Van" },
  {
    value: "medium",
    label: "Medium",
    sublabel: "14' Box Truck / 16' Box Truck",
  },
  { value: "large", label: "Large", sublabel: "26' Box Truck" },
];

const inputClass =
  "w-full h-[51px] px-5 bg-white border border-[#191A05]/20 rounded-xl text-[15px] text-[#191A05] font-inter placeholder:text-[#191A05]/50 outline-none focus:border-[#191A05]/50";
const labelClass = "text-[#FFFFFF] text-[14px] font-inter font-medium mb-2 block";

interface VolumePhotoDetailFormProps {
  service: ServiceId;
  serviceLabel: string;
  data: VolumePhotoDetailData;
  onChange: (data: VolumePhotoDetailData) => void;
  onValidChange: (valid: boolean) => void;
}

export default function VolumePhotoDetailForm({
  service,
  serviceLabel,
  data,
  onChange,
  onValidChange,
}: VolumePhotoDetailFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const propertyTypeDropdownRef = useRef<HTMLDivElement>(null);
  const [propertyTypeOpen, setPropertyTypeOpen] = React.useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        propertyTypeDropdownRef.current &&
        !propertyTypeDropdownRef.current.contains(e.target as Node)
      ) {
        setPropertyTypeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const update = useCallback(
    (partial: Partial<VolumePhotoDetailData>) => {
      onChange({ ...data, ...partial });
    },
    [data, onChange]
  );

  const isMovingOrTrash = service === "moving" || service === "trash";
  const isDelivery = service === "delivery";
  const isLabor = service === "labor";

  // In all steps: description and photo upload are optional; all other details are required.
  // Moving/Trash: volume, location, propertyType; if apartment, also (elevator or serviceElevator or flightsOfStairs).
  // Delivery: volume, origin, destination, productWeight.
  // Labor: volume, workersNeeded.
  const valid = (() => {
    if (!data.volume) return false;
    if (isMovingOrTrash) {
      if (!data.location.trim()) return false;
      if (!data.propertyType) return false;
      if (data.propertyType === "apartment") {
        if (!data.elevator && !data.serviceElevator && !data.flightsOfStairs.trim())
          return false;
      }
      return true;
    }
    if (isDelivery) {
      return (
        !!data.origin.trim() &&
        !!data.destination.trim() &&
        !!data.productWeight
      );
    }
    if (isLabor) {
      return !!data.workersNeeded;
    }
    return true;
  })();

  useEffect(() => {
    onValidChange(valid);
  }, [valid, onValidChange]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    update({ photoFiles: [...data.photoFiles, ...files] });
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    update({ photoFiles: [...data.photoFiles, ...files] });
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const removePhoto = useCallback(
    (index: number) => {
      update({
        photoFiles: data.photoFiles.filter((_, i) => i !== index),
      });
    },
    [data.photoFiles, update]
  );

  const previewUrlsRef = useRef<string[]>([]);
  const previewUrls = useMemo(() => {
    previewUrlsRef.current.forEach(URL.revokeObjectURL);
    const urls = data.photoFiles.map((f) => URL.createObjectURL(f));
    previewUrlsRef.current = urls;
    return urls;
  }, [data.photoFiles]);
  useEffect(
    () => () => {
      previewUrlsRef.current.forEach(URL.revokeObjectURL);
    },
    []
  );

  return (
    <div className="space-y-8">
      {/* Roughly how much? */}
      <div>
        <Text className={cn(labelClass, "mb-4")}>Roughly how much?</Text>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {VOLUME_OPTIONS.map((opt) => {
            const isSelected = data.volume === opt.value;
            const TruckIcon =
              opt.value === "small"
                ? TruckSmallSvg
                : opt.value === "medium"
                  ? TruckMediumSvg
                  : TruckLargeSvg;
            const iconSizeClass =
              opt.value === "small"
                ? "w-7 h-7"
                : opt.value === "medium"
                  ? "w-8 h-8"
                  : "w-9 h-9";
            return (
              <button
                key={opt.value ?? "n"}
                type="button"
                onClick={() => update({ volume: opt.value })}
                className={cn(
                  "flex flex-col items-center gap-1 p-5 rounded-xl border-2 text-left transition-all",
                  isSelected
                    ? "bg-[#48432D] border-[#48432D]"
                    : "bg-white border-[#191A05]/20 hover:border-[#191A05]/40"
                )}
              >
                <TruckIcon
                  className={cn(
                    iconSizeClass,
                    isSelected ? "text-white" : "text-[#48432D]"
                  )}
                />
                <span
                  className={cn(
                    "font-inter font-bold text-[15px]",
                    isSelected ? "text-white" : "text-[#191A05]"
                  )}
                >
                  {opt.label}
                </span>
                <span
                  className={cn(
                    "font-inter text-[12px] text-center",
                    isSelected ? "text-white/90" : "text-[#191A05]"
                  )}
                >
                  {opt.sublabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Moving / Trash: Location, Property type, Elevator, Stairs */}
      {isMovingOrTrash && (
        <>
          <div>
            <label className={labelClass}>Location</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Enter your location"
              value={data.location}
              onChange={(e) => update({ location: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Property Type</label>
            <div ref={propertyTypeDropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setPropertyTypeOpen((o) => !o)}
                className={cn(
                  inputClass,
                  "flex items-center justify-between text-left pl-12 pr-10 min-h-[51px] h-auto py-3"
                )}
              >
                <span className={cn(
                  "flex-1 truncate text-left",
                  !data.propertyType && "text-[#191A05]/50"
                )}>
                  {data.propertyType
                    ? PROPERTY_TYPES.find((p) => p.value === data.propertyType)?.label ?? "Select the property type"
                    : "Select the property type"}
                </span>
                <IoChevronDownOutline
                  className={cn(
                    "w-5 h-5 text-[#191A05]/60 shrink-0 transition-transform",
                    propertyTypeOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
              <Image
                src={propertytypeIcon}
                alt=""
                width={20}
                height={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain pointer-events-none"
              />
              {propertyTypeOpen && (
                <div className="absolute left-0 right-0 top-full z-10 mt-1 rounded-xl border border-[#191A05]/20 bg-white shadow-lg overflow-hidden">
                  <ul className="py-2">
                    {PROPERTY_TYPES.map((p) => {
                      const isSelected = data.propertyType === p.value;
                      return (
                        <li key={p.value}>
                          <button
                            type="button"
                            onClick={() => {
                              update({ propertyType: p.value });
                              setPropertyTypeOpen(false);
                            }}
                            className={cn(
                              "w-full flex items-center justify-between gap-3 px-4 py-3 text-left font-inter text-[15px] text-[#191A05] hover:bg-[#191A05]/5 transition-colors",
                              isSelected && "bg-[#191A05]/5"
                            )}
                          >
                            <span className="flex-1">{p.label}</span>
                            {isSelected && (
                              <IoCheckmark className="w-5 h-5 text-[#48432D] shrink-0" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {data.propertyType === "apartment" && (
            <>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.elevator}
                    onChange={(e) => update({ elevator: e.target.checked })}
                    className="w-4 h-4 rounded border-[#191A05]/30 text-[#191A05] focus:ring-[#191A05]"
                  />
                  <span className="text-[#FFFFFF] text-[14px] font-inter">
                    Elevator
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.serviceElevator}
                    onChange={(e) =>
                      update({ serviceElevator: e.target.checked })
                    }
                    className="w-4 h-4 rounded border-[#191A05]/30 text-[#191A05] focus:ring-[#191A05]"
                  />
                  <span className="text-[#FFFFFF] text-[14px] font-inter">
                    Service elevator
                  </span>
                </label>
              </div>
              {!data.elevator && !data.serviceElevator && (
                <div>
                  <label className={labelClass}>
                    If no elevator, how many flights of stairs?
                  </label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Enter the number of flights of stairs"
                    value={data.flightsOfStairs}
                    onChange={(e) =>
                      update({ flightsOfStairs: e.target.value })
                    }
                  />
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* Delivery: Origin, Destination, Product weight */}
      {isDelivery && (
        <>
          <div>
            <Text className={cn(labelClass, "mb-4")}>Delivery</Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[#FFFFFF]/80 text-[13px] font-inter mb-1 block">
                  Origin
                </label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Origin"
                  value={data.origin}
                  onChange={(e) => update({ origin: e.target.value })}
                />
              </div>
              <div>
                <label className="text-[#FFFFFF]/80 text-[13px] font-inter mb-1 block">
                  Destination
                </label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Destination"
                  value={data.destination}
                  onChange={(e) => update({ destination: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div>
            <label className={labelClass}>Select the product weight</label>
            <div className="relative">
              <select
                className={cn(inputClass, "appearance-none pr-10")}
                value={data.productWeight}
                onChange={(e) =>
                  update({ productWeight: e.target.value as ProductWeight })
                }
              >
                <option value="">Select the product weight</option>
                {PRODUCT_WEIGHTS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
              <IoChevronDownOutline
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#191A05]/60 pointer-events-none"
                aria-hidden
              />
            </div>
          </div>
        </>
      )}

      {/* Labor: How many workers */}
      {isLabor && (
        <div>
          <Text className={cn(labelClass, "mb-4")}>Labor</Text>
          <div className="relative">
            <select
              className={cn(inputClass, "appearance-none pl-12 pr-10")}
              value={data.workersNeeded}
              onChange={(e) => update({ workersNeeded: e.target.value })}
            >
              <option value="">How many workers are needed?</option>
              {WORKERS_OPTIONS.map((w) => (
                <option key={w} value={w}>
                  {w} {w === "5+" ? "workers" : w === "1" ? "worker" : "workers"}
                </option>
              ))}
            </select>
            <Image
              src={labordropIcon}
              alt=""
              width={20}
              height={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain pointer-events-none"
            />
            <IoChevronDownOutline
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#191A05]/60 pointer-events-none"
              aria-hidden
            />
          </div>
        </div>
      )}

      {/* Description (optional) */}
      <div>
        <label className={labelClass}>
          {isLabor ? "Labor Description (optional)" : "Description (optional)"}
        </label>
        <textarea
          className={cn(inputClass, "min-h-[120px] py-4 resize-y")}
          placeholder="List of items"
          value={data.description}
          onChange={(e) => update({ description: e.target.value })}
          rows={4}
        />
      </div>

      {/* Photo (optional) */}
      <div>
        <label className={labelClass}>Photo (optional)</label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click();
          }}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("[data-remove-photo]")) return;
            fileInputRef.current?.click();
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={cn(
            "rounded-xl border-2 border-dashed border-[#48432D] bg-white cursor-pointer overflow-hidden",
            "hover:border-[#48432D]/80 transition-colors",
            "min-h-[180px] flex flex-col p-5"
          )}
        >
          <div className="flex flex-col items-center justify-center gap-2 text-center shrink-0">
            <div className="w-14 h-14 rounded-full bg-[#E2E1DB]/20 flex items-center justify-center">
              <Image src={uploadicon} alt="" width={50} height={50} />
            </div>
            <span className="font-inter text-[15px] text-[#191A05]">
              Click to upload or drag and drop
            </span>
            <span className="font-inter text-[13px] text-[#191A05]">
              Upload photos of the items to be removed or transported
            </span>
            {data.photoFiles.length > 0 && (
              <span className="font-inter text-[12px] text-[#191A05]/70">
                {data.photoFiles.length} file(s) selected
              </span>
            )}
          </div>
          {data.photoFiles.length > 0 && (
            <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2 overflow-auto flex-1 min-h-0">
              {data.photoFiles.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="relative aspect-square rounded-lg overflow-hidden border border-[#48432D]/20 bg-[#E2E1DB]/10 shrink-0"
                >
                  <img
                    src={previewUrls[index]}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    data-remove-photo
                    onClick={(e) => {
                      e.stopPropagation();
                      removePhoto(index);
                    }}
                    className="absolute top-1 right-1 w-6 h-6 rounded-full bg-[#191A05]/90 text-white flex items-center justify-center hover:bg-[#191A05] transition-colors shadow"
                    aria-label={`Remove ${file.name}`}
                  >
                    <IoCloseOutline className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
