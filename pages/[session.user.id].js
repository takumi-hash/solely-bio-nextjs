import Head from "next/head";
import { useSession } from "next-auth/react";
import Header from "../components/molecules/header";
import Footer from "../components/molecules/footer";
import Layout from "../components/organisms/layout";
import Section from "../components/molecules/section";
import CtaButton from "../components/atoms/ctabutton";
import Card from "../components/molecules/card";
import { useLinks } from "../hooks/useLinks";

export default function Home() {
    const { data: session } = useSession();
    const { isLoading, links } = useLinks();

    var realProfile;
    if (session) {
        realProfile = {
            name: session.user.name,
            intro: "An individual developer",
            imageUrl: session.user.image,
            data: [],
        };
    }
    return (
        <div>
            <Head>
                <title>{session.user.name}'s Bio on Solely.bio</title>
            </Head>
            <Header />
            <Layout>
                <Section>
                    {session ? (
                        // if logged in
                        <>
                            <Section>
                                <p>Welcome Back, {session.user.name}</p>
                                <Card profile={realProfile} links={links}></Card>
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
