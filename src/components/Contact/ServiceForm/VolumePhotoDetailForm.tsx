"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Text from "@/components/ui/Text";
import { cn } from "@/libs/utils/twMerge";
import {
  IoCarOutline,
  IoChevronDownOutline,
  IoCloudUploadOutline,
  IoCheckmark,
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
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    update({ photoFiles: [...data.photoFiles, ...files] });
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  return (
    <div className="space-y-8">
      {/* Roughly how much? */}
      <div>
        <Text className={cn(labelClass, "mb-4")}>Roughly how much?</Text>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {VOLUME_OPTIONS.map((opt) => {
            const isSelected = data.volume === opt.value;
            return (
              <button
                key={opt.value ?? "n"}
                type="button"
                onClick={() => update({ volume: opt.value })}
                className={cn(
                  "flex flex-col items-center gap-1 p-5 rounded-xl bg-white border-2 text-left transition-all",
                  isSelected
                    ? "border-[#191A05] ring-2 ring-[#E2E1DB] ring-offset-2 ring-offset-[#191A05]"
                    : "border-[#191A05]/20 hover:border-[#191A05]/40"
                )}
              >
                <IoCarOutline className="w-8 h-8 text-[#191A05] shrink-0" />
                <span className="font-inter font-bold text-[#191A05] text-[15px]">
                  {opt.label}
                </span>
                <span className="font-inter text-[#191A05] text-[12px] text-center">
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
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={cn(
            "flex flex-col items-center justify-center gap-2 p-5 rounded-xl border-2 border-dashed border-[#48432D] bg-white cursor-pointer",
            "hover:border-[#48432D]/80 transition-colors"
          )}
        >
          <div className="w-14 h-14 rounded-full bg-[#E2E1DB]/20 flex items-center justify-center">
            <Image src={uploadicon} alt="uploadicon" width={50} height={50} />
          </div>
          <span className="font-inter text-[15px] text-[#191A05]">
            Click to upload or drag and drop
          </span>
          <span className="font-inter text-[13px] text-[#191A05]">
            Upload photos of the items to be removed or transported
          </span>
          {data.photoFiles.length > 0 && (
            <span className="text-[#48432D] text-sm font-inter">
              {data.photoFiles.length} file(s) selected
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
