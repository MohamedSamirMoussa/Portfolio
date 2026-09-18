"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

import en from "../messages/en.json";
import ar from "../messages/ar.json";

export type Language = "en" | "ar";

type LanguageProviderProps = {
  children: ReactNode;
};

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [i18nInstance] = useState(() => {
    const instance = createInstance();

    void instance.use(initReactI18next).init({
      resources: {
        en: {
          translation: en,
        },
        ar: {
          translation: ar,
        },
      },

      lng: "en",
      fallbackLng: "en",
      supportedLngs: ["en", "ar"],

      // ملفات الترجمة مستوردة بالفعل، فلا نحتاج تحميلها من الشبكة.
      initAsync: false,

      interpolation: {
        escapeValue: false,
      },
    });

    return instance;
  });

  useEffect(() => {
    const updateDocumentLanguage = () => {
      const language = i18nInstance.resolvedLanguage === "ar" ? "ar" : "en";

      document.documentElement.lang = language;
      document.documentElement.dir = i18nInstance.dir(language);
    };

    updateDocumentLanguage();

    i18nInstance.on("languageChanged", updateDocumentLanguage);

    return () => {
      i18nInstance.off("languageChanged", updateDocumentLanguage);
    };
  }, [i18nInstance]);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
