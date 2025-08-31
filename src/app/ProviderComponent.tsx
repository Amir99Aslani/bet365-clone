"use client";
import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from "@/ReduxStore";
import { dictionaries } from "@/lib/LanguageHelper";


interface I18nContextProps {
    dict: Record<string, string>;
    locale: string;
    updateLocale: (newLocale: string) => void;
}

// Create context
const I18nContext = createContext<I18nContextProps | undefined>(undefined);

// Hook to use context
export const useI18n = (): I18nContextProps => {
    const context = useContext(I18nContext);
    if (!context) throw new Error("useI18n must be inside I18nContext.Provider");
    return context;
};

// Provider props
interface Props {
    children: ReactNode;
    dict: Record<string, string>;
    currentLocale: string;
}

function ProviderComponent({ children, dict, currentLocale }: Props) {
    // State for reactive locale and dictionary
    const [locale, setLocale] = useState(currentLocale);
    const [currentDict, setCurrentDict] = useState(dict);

    // Update dict whenever locale changes
    useEffect(() => {
        setCurrentDict(dictionaries[locale] || dictionaries["en"]);
    }, [locale]);

    // Function to update locale
    const updateLocale = (newLocale: string) => {
        setLocale(newLocale);
        localStorage.setItem("locale", newLocale);
    };

    return (
        <Provider store={store}>
            <I18nContext.Provider value={{ dict: currentDict, locale, updateLocale }}>
                {children}
            </I18nContext.Provider>
        </Provider>
    );
}

export default ProviderComponent;
