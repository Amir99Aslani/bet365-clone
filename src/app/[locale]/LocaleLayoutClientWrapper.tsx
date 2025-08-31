"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/ReduxStore";
import Header from "@/component/layout/Header";
import SideBar from "@/component/layout/SideBar";
import Footer from "@/component/layout/Footer";
import { Banner } from "@/component/home/Banner";
import styles from './locale.module.scss';

interface ActiveContextProps {
    active: string;
    setActive: (val: string) => void;
}

const ActiveContext = createContext<ActiveContextProps | undefined>(undefined);
export const useActive = (): ActiveContextProps => {
    const context = useContext(ActiveContext);
    if (!context) throw new Error("useActive must be inside ActiveContext.Provider");
    return context;
};

interface Props {
    children: ReactNode;
    locale: string;
}

export default function LocaleLayoutClientWrapper({ children, locale }: Props) {
    const [active, setActive] = useState<string>("Football");

    useEffect(() => {
        const savedLocale = localStorage.getItem("locale");
        if (!savedLocale) localStorage.setItem("locale", locale);
    }, [locale]);

    return (
        <Provider store={store}>
            <ActiveContext.Provider value={{ active, setActive }}>
                <div className={`${styles.container} min-h-screen flex flex-col`}>
                    <Header currentLocale={locale} />
                    <Banner />
                    <div className={`${styles.mainContainer}`}>
                        <SideBar onActive={active} onSetActive={setActive} />
                        <main className="lg:w-4/5 sm:w-full mt-3 mb-2">{children}</main>
                    </div>
                    <Footer />
                </div>
            </ActiveContext.Provider>
        </Provider>
    );
}
