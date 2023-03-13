import React, { createContext, useState } from "react";

type SettingsContextType = {
  settings: Record<string, unknown>;
  setSettings: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

const defaultSettingsContext: SettingsContextType = {
  settings: {},
  setSettings: () => {},
};

export const SettingsContext = createContext(defaultSettingsContext);

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
                                                                    children,
                                                                  }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Record<string, unknown>>({voiceId: "en-us_009"});

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
