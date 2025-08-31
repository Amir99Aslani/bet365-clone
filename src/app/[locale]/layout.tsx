
import React from "react";
import LocaleLayoutClientWrapper from "./LocaleLayoutClientWrapper";

interface Props {
    children: React.ReactNode;
    params: { locale: string };
}

export default function LocaleLayout({ children, params }: Props) {
    // Server-side layout passes locale as plain prop
    return <LocaleLayoutClientWrapper locale={params.locale}>{children}</LocaleLayoutClientWrapper>;
}
