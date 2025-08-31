import React from "react";
import LocaleLayoutClientWrapper from "./LocaleLayoutClientWrapper";

export default function LocaleLayout({
                                         children,
                                         params,
                                     }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>; // <--- Important: params is a Promise now
}) {
    // Unwrap the promise safely in server component
    const { locale } = React.use(params);

    return (
        <LocaleLayoutClientWrapper locale={locale}>
            {children}
        </LocaleLayoutClientWrapper>
    );
}
