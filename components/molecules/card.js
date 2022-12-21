import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Card = (props) => {
  return (
    <div className="rounded-lg bg-white p-8">
      {/* {JSON.stringify(props)} */}
      <Image
        src={props.profile.imageUrl}
        width="160"
        height="160"
        alt="placeholder"
        className="mb-4 rounded-full mx-auto"
      ></Image>
      <h1 className="text-2xl text-slate-800">
        {/* {session ? session.user.name : "Jane Doe"} */}
        {props.profile.name}
      </h1>
      <p className="text-slate-500 mb-8">{props.profile.intro}</p>
      <div className="text-left">
        {props.profile.data?.map((item, index) => {
          return (
            <div key={index}>
              <h2 className="text-slate-500 font-bold mb-2">{item.title}</h2>
              <ul className="text-slate-500 mb-8">
                {item.links?.map((link, index) => {
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
