"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { Provider } from "react-redux";
import { store } from "@/ReduxStore";
import ProviderComponent from "@/app/ProviderComponent";
import Header from "@/component/layout/Header";
import SideBar from "@/component/layout/SideBar";
import Footer from "@/component/layout/Footer";
import { Banner } from "@/component/home/Banner";
import styles from "./locale.module.scss";
import en from "@/locales/en.json";
import de from "@/locales/de.json";

interface Props {
    children: React.ReactNode;
    locale: string;
}

// Active context
interface ActiveContextType {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

const ActiveContext = createContext<ActiveContextType | null>(null);
export const useActive = () => {
    const ctx = useContext(ActiveContext);
    if (!ctx) throw new Error("useActive must be used within ActiveContext.Provider");
    return ctx;
};

const dictionaries: Record<string, Record<string, string>> = { en, de };

export default function LocaleLayoutClientWrapper({ children, locale }: Props) {
    const dict = dictionaries[locale] || en;
    const [active, setActive] = useState("Football");

    useEffect(() => {
        localStorage.setItem("locale", locale);
    }, [locale]);

    return (
        <Provider store={store}>
            <ProviderComponent dict={dict} currentLocale={locale}>
                <ActiveContext.Provider value={{ active, setActive }}>
                    <div className={`${styles.container} min-h-screen flex flex-col`}>
                        <Header currentLocale={locale} />
                        <Banner />
                        <div className={styles.mainContainer}>
                            <SideBar onActive={active} onSetActive={setActive} />
                            <main className="lg:w-4/5 sm:w-full mt-3 mb-2">{children}</main>
                        </div>
                        <Footer />
                    </div>
                </ActiveContext.Provider>
            </ProviderComponent>
        </Provider>
    );
}
