import { useSession } from "next-auth/react";
import { useLinks } from "../hooks/useLinks";
import { useUser } from "../hooks/useUser";

import Head from "next/head";
import Header from "../components/molecules/header";
import Footer from "../components/molecules/footer";
import Layout from "../components/organisms/layout";
import Section from "../components/molecules/section";
import CtaButton from "../components/atoms/ctabutton";
import Card from "../components/molecules/card";

export default function Profile() {
  const { data: session, status } = useSession();

  const userId = "SwD0hNzD8TigQyVf4pL8";
  const user = useUser(userId);
  const links = useLinks(userId);

  return (
    <div>
      <Head>
        <title>{session === undefined ? "My" : session.user.name}My Bio on Solely.bio</title>
      </Head>
      <Header />
      <Layout>
        <Section>
          {status === "authenticated" ? (
            <>
              <p>Welcome Back, {session.user.name}</p>
            </>
          ) : ""}
          {user === undefined ? "" : <Card profile={user} links={links}></Card>}
        </Section>
      </Layout>
      <Footer></Footer>
    </div>
  );
}
