import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import OnClickButton from "../atoms/onclickbutton";

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <header className="p-5">
        <nav className="flex">
          <h1 className="">
            <Link href="/">Solely</Link>
          </h1>
          <div className="grow"></div>
          <div className="pl-5">
            {session ? (
              <>
                Signed in as {session.user.name} <br />
                <OnClickButton
                  onClick={() => signOut()}
                  text="Account"
                ></OnClickButton>
              </>
            ) : (
              <>
                Not signed in <br />
                <OnClickButton
                  onClick={() => signIn()}
                  text="Sign in"
                ></OnClickButton>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
