import * as React from "react";
import Link from "next/link";
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
            url: "instagram.com",
          },
          {
            title: "Youtube",
            url: "youtube.com",
          },
        ],
      },
      {
        title: "Publications",
        links: [
          {
            title: "Articles",
            url: "zenn.dev",
          },
          {
            title: "Podcast",
            url: "anchor.fm/futakobookcast",
          },
        ],
      },
      {
        title: "Development",
        links: [
          {
            title: "Github",
            url: "github.com",
          },
          {
            title: "LinkedIn",
            url: "linkedin.com",
          },
        ],
      },
    ],
  };
  return (
    <div className="rounded-lg bg-white p-8">
      <h1 className="text-2xl text-slate-800">
        {/* {session ? session.user.name : "Jane Doe"} */}
        {profile.name}
      </h1>
      <p className="text-slate-500">{profile.intro}</p>
      <div className="text-left">
        {profile.data.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="text-slate-500 font-bold">{item.title}</h2>
              <ul className="text-slate-500">
                {item.links.map((link, index) => {
                  return (
                    <li>
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
