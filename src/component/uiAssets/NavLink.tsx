import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props {
    text: string,
    href:string
}

export function NavLink({text , href}: Props) {

    const path = usePathname();

    return (
        <Link href="#"
              className={
                  path.startsWith(href)
                      ? "text-yellow-400"
                      : "hover:text-gray-300"
              }
        >
            {text}
        </Link>

    );
};