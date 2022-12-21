import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../components/molecules/header";
import Footer from "../components/molecules/footer";
import Layout from "../components/organisms/layout";
import Section from "../components/molecules/section";
import CtaButton from "../components/atoms/ctabutton";
import Card from "../components/molecules/card";
import { getFirestore, Firestore } from 'firebase/firestore'
import '../utils/firebase/init' // Initialize FirebaseApp

export default function Home() {
  const { data: session } = useSession();
  const demoProfile = {
    name: "Jane Appleseed",
    intro: "An individual developer",
    imageUrl: "/placeholder.webp",
    data: [
      {
        title: "Social Networking",
        links: [
          {
            title: "Instagram",
            url: "https://instagram.com",
          },
          {
            title: "Youtube",
            url: "https://youtube.com",
          },
        ],
      },
      {
        title: "Publications",
        links: [
          {
            title: "Articles",
            url: "https://zenn.dev",
          },
          {
            title: "Podcast",
            url: "https://anchor.fm/futakobookcast",
          },
        ],
      },
      {
        title: "Development",
        links: [
          {
            title: "Github",
            url: "https://github.com",
          },
          {
            title: "LinkedIn",
            url: "https://linkedin.com",
          },
        ],
      },
    ],
  };
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
        <title>Solely.bio - Your Only Biography</title>
      </Head>
      <Header />
      <Layout>
        {session ? (
          // if logged in
          <>
            <Section>
              <p>Welcome Back, {session.user.name}</p>
              <Card profile={realProfile}></Card>
            </Section>
          </>
        ) : (
          // if not logged in
          <>
            <Section>
              <h1 className="text-4xl font-bold my-4">Solely</h1>
              <p className="text-sm mb-4">
                An online biography for a more civilized age.
              </p>
              <p className="text-base font-bold">
                Create your complete biography <br />
                and share it anywhere.
              </p>
            </Section>
            <Section>
              <CtaButton linkto="/" text="Create your bio"></CtaButton>
              <p className="text-slate-500">You can create one in a minute :)</p>
            </Section>
            <Section>
              <Card profile={demoProfile}></Card>
            </Section>
            <Section>
              <h2 className="text-2xl mb-4">What is Solely for?</h2>
              <p className="text-left mb-4">
                This is a simple online profile card service.
              </p>
              <p className="text-left mb-4">
                Once you created your profile, you can share it with a business
                partner, followers on SNS, friends, and your family members.
              </p>
              <p className="text-left mb-4">
                You don’t have to exchange your paper card anymore.
              </p>
            </Section>
            <Section>
              <h2 className="text-2xl mb-4">Example Usage</h2>
              <p className="text-left mb-4">
                Use it as a business card. You don’t have to waste a bunch of paper
                anymore every time your job title changes.
              </p>
              <p className="text-left mb-4">
                Use it as a social networking accounts list so your audiences can
                follow you on every platform.
              </p>
              <p className="text-left mb-4">
                Use it as a portfolio site. Your works and articles can be gathered
                here, you can engage with your audiences even more.
              </p>
            </Section>
            <Section>
              <h2 className="text-2xl mb-4">Who can see my profile?</h2>
              <p className="text-left mb-4">
                Anyone you share the URL with can see your profile. Basically you
                want to input the information you want to make visible to public.
              </p>
              <p className="text-left mb-4">
                Don’t worry, however, we prevent Google Search from indexing your
                information.
              </p>
            </Section>
          </>
        )}
      </Layout>
      <Footer></Footer>
    </div >
  );
}
