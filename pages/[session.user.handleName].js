import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getLinks } from "../utils/firebase/links";
import { getUser } from "../utils/firebase/user";

import Head from "next/head";
import Header from "../components/molecules/header";
import Footer from "../components/molecules/footer";
import Layout from "../components/organisms/layout";
import Section from "../components/molecules/section";
import CtaButton from "../components/atoms/ctabutton";
import Card from "../components/molecules/card";

export default function Profile() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState();
  const [links, setLinks] = useState();
  const router = useRouter();

  useEffect(() => {
    void (async () => {
      const userId = "SwD0hNzD8TigQyVf4pL8"; //= session.user.id;

      const user = await getUser(userId);
      setUser(user);

      const links = await getLinks(userId);
      setLinks(links);
    })();
  }, [router.query.id]);

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
