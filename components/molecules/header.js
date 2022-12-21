import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import OnClickButton from "../atoms/onclickbutton";
import LinkButton from "../atoms/linkbutton";

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
            {session?.user.id ? (
              <>
                <LinkButton
                  linkto={session.user.id}
                  text="My Bio"
                  className="text-sm py-1 ml-4"
                ></LinkButton>
                <OnClickButton
                  onClick={() => signOut()}
                  text="Sign Out"
                  className="text-sm py-1 ml-4"
                ></OnClickButton>
              </>
            ) : (
              <>
                <OnClickButton
                  onClick={() => signIn()}
                  text="Sign in"
                  className="text-sm py-1 ml-4"
                ></OnClickButton>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
