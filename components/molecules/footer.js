import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import OnClickButton from "../atoms/onclickbutton";

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <footer className="p-12 text-center">
        <p className="text-sm text-slate-500">Made with love by Solely Team.</p>
      </footer>
    </>
  );
}
