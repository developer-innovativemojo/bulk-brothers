const RECAPTCHA_SCRIPT_ID = "recaptcha-v3-script";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

export function loadRecaptchaV3(siteKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (document.getElementById(RECAPTCHA_SCRIPT_ID)) {
    return new Promise((resolve) => {
      window.grecaptcha?.ready(() => resolve());
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.onload = () => {
      window.grecaptcha?.ready(() => resolve());
    };
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(script);
  });
}

export async function executeRecaptchaV3(
  siteKey: string,
  action: string,
): Promise<string> {
  await loadRecaptchaV3(siteKey);
  if (!window.grecaptcha) {
    throw new Error("reCAPTCHA not available");
  }
  return window.grecaptcha.execute(siteKey, { action });
}
