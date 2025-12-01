"use client";

import Cookies from "js-cookie";
import {
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";
import { GDPR_COOKIE_NAME } from "utils/constants";

const useGdprConsent = () => {
  const hasConsented = getCookieConsentValue(GDPR_COOKIE_NAME) === "true";

  const showCookieConsent = () => {
    resetCookieConsentValue(GDPR_COOKIE_NAME);

    const allCookies = Cookies.get();

    Object.keys(allCookies).forEach((cookieName) =>
      Cookies.remove(cookieName, { path: "/" })
    );

    window.location.reload();
  };

  const onAcceptCookieConsent = () => {
    window.location.reload();
  };

  return { hasConsented, showCookieConsent, onAcceptCookieConsent };
};

export default useGdprConsent;
