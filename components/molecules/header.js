import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import OnClickButton from "../atoms/onclickbutton";

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <header className="p-4">
        <nav className="flex">
          <h1 className="text-lg font-bold">
            <Link href="/">Solely</Link>
          </h1>
          <div className="grow"></div>
          <div className="pl-5">
            {session ? (
              <>
                <OnClickButton
                  onClick={() => signOut()}
                  text="Account"
                  className="text-sm py-1"
                ></OnClickButton>
              </>
            ) : (
              <>
                <OnClickButton
                  onClick={() => signIn()}
                  text="Sign in"
                  className="text-sm py-1"
                ></OnClickButton>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
