"use client";

import { useTranslation } from "react-i18next";
import type { Language } from "@/app/context/LanguageProvider";

export const useLan = () => {
  const { i18n } = useTranslation();

  const language: Language = i18n.resolvedLanguage === "ar" ? "ar" : "en";

  const setLanguage = (nextLanguage: Language) => {
    void i18n.changeLanguage(nextLanguage);
  };

  return {
    language,
    setLanguage,
  };
};
