import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="rounded-lg bg-white p-8">
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
        {props.links?.map((item) => {
          return (
            <div key={item.id}>
              <h2 className="text-slate-500 font-bold mb-2">
                <Link href={item.url}>{item.title}</Link>
              </h2>
            </div>
          );
        })}
      </div>
      {props.children}
    </div>
  );
};

export default Card;
