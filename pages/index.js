import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../components/molecules/header";
import Layout from "../components/organisms/layout";
import Section from "../components/molecules/section";
import CtaButton from "../components/atoms/Ctabutton";
import Card from "../components/molecules/card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
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
          <CtaButton linkto="/" text="Create mine in 1 minute."></CtaButton>
        </Section>
        <Section>
          <Card></Card>
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
      </Layout>
    </div>
  );
}
