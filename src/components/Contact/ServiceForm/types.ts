export type ServiceId = "moving" | "trash" | "delivery" | "labor";

export type VolumeSize = "small" | "medium" | "large" | null;

export type PropertyType = "single_family" | "townhouse" | "apartment" | "";

export type ProductWeight =
  | "less_50"
  | "50_100"
  | "100_150"
  | "150_200"
  | "over_200"
  | "";

export interface VolumePhotoDetailData {
  volume: VolumeSize;
  location: string;
  propertyType: PropertyType;
  elevator: boolean;
  serviceElevator: boolean;
  flightsOfStairs: string;
  origin: string;
  destination: string;
  productWeight: ProductWeight;
  workersNeeded: string;
  description: string;
  photoFiles: File[];
}

export const EMPTY_DETAIL_DATA: VolumePhotoDetailData = {
  volume: null,
  location: "",
  propertyType: "",
  elevator: false,
  serviceElevator: false,
  flightsOfStairs: "",
  origin: "",
  destination: "",
  productWeight: "",
  workersNeeded: "",
  description: "",
  photoFiles: [],
};

export const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: "single_family", label: "Single Family Home" },
  { value: "townhouse", label: "Townhouse" },
  { value: "apartment", label: "Apartment" },
];

export const PRODUCT_WEIGHTS: { value: ProductWeight; label: string }[] = [
  { value: "less_50", label: "Less than 50lbs" },
  { value: "50_100", label: "Between 50lbs-100lbs" },
  { value: "100_150", label: "100lbs-150lbs" },
  { value: "150_200", label: "150lbs-200lbs" },
  { value: "over_200", label: "Greater than 200lbs" },
];

export const WORKERS_OPTIONS = ["1", "2", "3", "4", "5+"];

export interface ContactData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string; // ISO or dd/MM/yyyy for display
}

export const EMPTY_CONTACT_DATA: ContactData = {
  name: "",
  phone: "",
  email: "",
  preferredDate: "",
};

/** Detail data without File[] for localStorage/API (photos stored as names/count). */
export interface VolumePhotoDetailDataSerialized
  extends Omit<VolumePhotoDetailData, "photoFiles"> {
  photoFileNames: string[];
}

export interface ServiceFormPayload {
  selectedServices: ServiceId[];
  detailFormData: Record<string, VolumePhotoDetailDataSerialized>;
  contact: ContactData;
  submittedAt: string; // ISO
}

export const SERVICE_FORM_STORAGE_KEY = "bulkbrothers_service_form";
export const SERVICE_FORM_DRAFT_KEY = "bulkbrothers_service_form_draft";

/** In-progress form state for restore on refresh (no File[]). */
export interface ServiceFormDraft {
  step: 1 | 2 | 3;
  selectedServices: ServiceId[];
  detailFormIndex: number;
  detailFormData: Record<string, VolumePhotoDetailDataSerialized>;
  contact: ContactData;
}
