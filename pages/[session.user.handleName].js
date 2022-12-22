import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useLinks } from "../hooks/useLinks";
import { getLinks } from "../utils/firebase/links";

import Head from "next/head";
import Header from "../components/molecules/header";
import Footer from "../components/molecules/footer";
import Layout from "../components/organisms/layout";
import Section from "../components/molecules/section";
import CtaButton from "../components/atoms/ctabutton";
import Card from "../components/molecules/card";

export default function Profile() {
  const { data: session } = useSession();
  const [links, setLinks] = useState();
  const router = useRouter();

  useEffect(() => {
    getLinks(session.user.id).then((result) => setLinks(result));
  }, [router.query.id]);

  var realProfile;
  if (session) {
    realProfile = {
      name: session.user.name,
      intro: "An individual developer",
      imageUrl: session.user.image,
    };
  }
  return (
    <div>
      <Head>
        <title>My Bio on Solely.bio</title>
      </Head>
      <Header />
      <Layout>
        <Section>
          {session ? (
            // if logged in
            <>
              <Section>
                <p>Welcome Back, {session.user.name}</p>
                <Card profile={realProfile} links={links ? links : []}></Card>
              </Section>
            </>
          ) : (
            // if not logged in
            <></>
          )}
        </Section>
      </Layout>
      <Footer></Footer>
    </div>
  );
}
