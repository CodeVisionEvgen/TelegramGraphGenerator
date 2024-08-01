import Image from "next/image";
import React from "react";

import { GraphQuery } from "@/types";

export function TelegramCardSmartphone({
  graphQuery,
}: {
  graphQuery?: GraphQuery;
}) {
  return (
    <div className="grid w-[300px] gap-[5px] bg-gradient-to-b from-purple-600 to-base-100 grad p-2">
      <a
        className="text-wrap break-words underline text-sm w-[285px]"
        href={graphQuery?.url || "#"}
      >
        {graphQuery?.url || "https://tg-graph-gen.vercel.app/"}
      </a>
      <div className="grid border-l-3 bg-white bg-opacity-5 border-white pl-2 p-2">
        <div className="w-full flex justify-between p-1">
          <div>
            <p className="font-bold text-sm overflow-hidden whitespace-nowrap text-ellipsis max-w-[180px]">
              {graphQuery?.url
                ? /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
                  graphQuery.url,
                )
                  ? new URL(graphQuery?.url).hostname
                  : graphQuery.url
                : "tg-graph-gen.vercel.app"}
            </p>
            <p className="font-bold text-sm text-wrap break-words max-w-[180px]">
              {graphQuery?.title || "Page title"}
            </p>
          </div>
          <Image
            alt="icon"
            className="w-[60px] h-[60px] bg-white rounded"
            height={60}
            src={
              graphQuery?.mediaLink ? graphQuery?.mediaLink : "/images/icon.png"
            }
            width={60}
          />
        </div>
        <p className="max-w-[250px] mb-1 text-wrap break-words text-sm">
          {graphQuery?.description || "Your description"}
        </p>
      </div>
    </div>
  );
}

export function TelegramCardPC({ graphQuery }: { graphQuery?: GraphQuery }) {
  return (
    <div className="grid w-[350px] gap-[5px] bg-gradient-to-b from-purple-600 to-base-100 grad p-2">
      <a
        className=" text-wrap break-words underline text-sm w-[285px]"
        href={graphQuery?.url || "#"}
      >
        {graphQuery?.url || "https://tg-graph-gen.vercel.app/"}
      </a>
      <div className=" flex flex-col-reverse justify-between border-l-3 bg-white bg-opacity-5 border-white pl-2 p-2">
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
          <p className="font-bold text-sm text-wrap break-words max-w-[180px]">
            {graphQuery?.title || "Page title"}
          </p>
          <p className="max-w-[300px] mb-1 text-wrap break-words text-sm">
            {graphQuery?.description || "Your description"}
          </p>
        </div>
        <Image
          alt="icon"
          className=" w-[100%] h-[290px] bg-white rounded"
          height={400}
          objectFit="contain"
          src={
            graphQuery?.mediaLink ? graphQuery?.mediaLink : "/images/icon.png"
          }
          width={500}
        />
      </div>
    </div>
  );
}
