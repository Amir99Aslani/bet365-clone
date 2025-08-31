"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { NavLink } from "@/component/uiAssets/NavLink";
import { useI18n } from "@/app/ProviderComponent";
import React from "react";

export default function Header() {
    const { dict, locale = "en", updateLocale } = useI18n(); // get updateLocale
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const newLocale = locale === "en" ? "de" : "en"; // toggle between EN and DE
        updateLocale(newLocale);                         // update context + dict
        router.push(pathname.replace(`/${locale}`, `/${newLocale}`)); // update URL
    };



    return (
        <header className="bg-gray-900 text-white flex justify-between items-center px-4 py-3">
            <div className="flex justify-around m-2">
                <div>
                    <Image
                        width={64}
                        height={24}
                        className="object-contain"
                        priority
                        src="/Logo.svg"
                        alt="Bewin Logo"
                    />
                </div>
                <nav className="hidden md:flex space-x-6 ml-5">
                    <NavLink text={dict.sportsBetting} href=""/>
                    <NavLink text={dict.live} href="/live"/>
                    <NavLink text={dict.slots} href="/slots"/>
                    <NavLink text={dict.poker} href="/poker"/>
                </nav>
            </div>
            <h1 className="mb-2 mt-2 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white hidden lg:block">
                {dict?.welcome || "Welcome"}
            </h1>

            <div className="buttonContainer">
                <button
                    onClick={toggleLocale}
                    className="ml-4 border px-3 py-1 rounded hover:bg-gray-700"
                >
                    {locale.toUpperCase()}
                </button>

            </div>
        </header>
    );
}
