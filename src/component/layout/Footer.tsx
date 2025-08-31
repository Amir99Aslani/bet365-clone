import {useI18n} from "@/app/ProviderComponent";

export default function Footer() {

    const { dict, locale } = useI18n();

    return (
        <footer className="bg-gray-900 text-white text-center p-4 mt-6">
            <p>© {new Date().getFullYear()} {dict.copyRights}</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-gray-300">Terms</a>
                <a href="#" className="hover:text-gray-300">Privacy</a>
                <a href="#" className="hover:text-gray-300">Support</a>
            </div>
        </footer>
    );
}
