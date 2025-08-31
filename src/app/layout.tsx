import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProviderComponent from "@/app/ProviderComponent"; // client
import Header from "@/component/layout/Header";
import SideBar from "@/component/layout/SideBar";
import Footer from "@/component/layout/Footer";
import { Banner } from "@/component/home/Banner";
import styles from './locale.module.scss';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

interface Props {
    children: React.ReactNode;
    params: { locale: string }; // server receives this
}

export default function LocaleLayout({ children, params }: Props) {
    const currentLocale = params.locale;

    return (
        <html lang={currentLocale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProviderComponent currentLocale={currentLocale}>
            <div className={`${styles.container} min-h-screen flex flex-col`}>
                <Header />
                <Banner />
                <div className={`${styles.mainContainer}`}>
                    <SideBar />
                    <main className="lg:w-4/5 sm:w-full mt-3 mb-2">{children}</main>
                </div>
                <Footer />
            </div>
        </ProviderComponent>
        </body>
        </html>
    );
}
