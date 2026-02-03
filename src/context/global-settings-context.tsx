"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Country = "US" | "IN" | "UK" | "CA" | "AU";
export type ExamCategory = 
  | "Medical" 
  | "Civil Services" 
  | "Management" 
  | "Engineering" 
  | "Accounting" 
  | "Law" 
  | "Aptitude";

interface GlobalSettingsState {
  country: Country;
  setCountry: (country: Country) => void;
  category: ExamCategory;
  setCategory: (category: ExamCategory) => void;
}

const GlobalSettingsContext = createContext<GlobalSettingsState | undefined>(undefined);

export function GlobalSettingsProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<Country>("IN"); // Default to India as per "Global" usually implies local or US, but let's pick one. 
  const [category, setCategory] = useState<ExamCategory>("Engineering");

  return (
    <GlobalSettingsContext.Provider value={{ country, setCountry, category, setCategory }}>
      {children}
    </GlobalSettingsContext.Provider>
  );
}

export function useGlobalSettings() {
  const context = useContext(GlobalSettingsContext);
  if (context === undefined) {
    throw new Error("useGlobalSettings must be used within a GlobalSettingsProvider");
  }
  return context;
}
