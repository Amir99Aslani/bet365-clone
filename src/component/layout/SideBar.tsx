"use client";
import React, {ReactNode, useState} from "react";
import {useI18n} from "@/app/ProviderComponent";

const categories = ["Football", "Tennis", "Basketball", "Volleyball", "Baseball"];

interface Props {
    onActive: string;
    onSetActive: React.Dispatch<React.SetStateAction<string>>;
}


export default function SideBar({onSetActive, onActive}: Props) {

    const { dict, locale } = useI18n();



    return (
        <aside className="sideBar w-full md:w-1/5 shadow-md shadow-indigo-500/50">
            <ul className="space-y-2 m-3">
                {categories.map(cat => (
                    <li
                        key={cat}
                        onClick={() => onSetActive(cat)}
                        className={`cursor-pointer p-2 rounded hover:bg-gray-800 ${
                            onActive === cat ? "bg-gray-900 font-bold" : ""
                        }`}>
                        {dict[cat.toLowerCase()] ? dict[cat.toLowerCase()] : cat}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
