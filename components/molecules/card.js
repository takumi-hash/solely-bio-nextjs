import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Card = (props) => {
  const { data: session } = useSession();
  const profile = {
    name: "John Appleseed",
    intro: "An individual developer",
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
  return (
    <div className="rounded-lg bg-white p-8">
      <Image
        src={"/placeholder.webp"}
        width="160"
        height="160"
        alt="placeholder"
        className="mb-4 rounded-full mx-auto"
      ></Image>
      <h1 className="text-2xl text-slate-800">
        {/* {session ? session.user.name : "Jane Doe"} */}
        {profile.name}
      </h1>
      <p className="text-slate-500 mb-8">{profile.intro}</p>
      <div className="text-left">
        {profile.data.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="text-slate-500 font-bold mb-2">{item.title}</h2>
              <ul className="text-slate-500 mb-8">
                {item.links.map((link, index) => {
                  return (
                    <li key={index} className="mb-2">
                      <Link href={link.url}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {props.children}
    </div>
  );
};

export default Card;
