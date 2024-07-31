import Image from "next/image";
import React from "react";

import { GraphQuery } from "@/types";

export default function TelegramCard({
  graphQuery,
}: {
  graphQuery?: GraphQuery;
}) {
  return (
    <div className="grid w-[300px] gap-[5px] bg-gradient-to-b from-purple-600 to-base-100 grad p-2">
      <a className=" underline text-sm" href={graphQuery?.url || "#"}>
        {graphQuery?.url || "https://tg-graph-gen.vercel.app/"}
      </a>
      <div className=" grid border-l-3 bg-white bg-opacity-5 border-white pl-2 p-2">
        <div className="flex">
          <div className="w-11/12">
            <p className="font-bold text-sm overflow-hidden whitespace-nowrap  text-ellipsis max-w-[180px]">
              {graphQuery?.url
                ? /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
                  graphQuery.url,
                )
                  ? new URL(graphQuery?.url).hostname
                  : graphQuery.url
                : "tg-graph-gen.vercel.app"}
            </p>
            <p className="font-bold text-sm max-w-[180px]">
              {graphQuery?.title || "Page title"}
            </p>
          </div>
          <Image
            alt="icon"
            height={60}
            src={
              graphQuery?.mediaLink ? graphQuery?.mediaLink : "/images/icon.png"
            }
            width={60}
          />
        </div>
        <p>{graphQuery?.description || "Your description"}</p>
      </div>
    </div>
  );
}
