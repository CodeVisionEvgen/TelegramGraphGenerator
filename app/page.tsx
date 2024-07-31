"use client";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";

import { title } from "@/components/primitives";
import { GraphQuery } from "@/types";
import { GraphTypes } from "@/config/graph";
import TelegramCard from "@/components/TelegramCard";
import { CodeIcon } from "@/components/icons";
export default function Home() {
  const [graphQuery, setGraphQuery] = useState<GraphQuery>();

  return (
    <section className="flex flex-col rounded items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title() + " text-primary"}>
        Make the telegram link beautiful
      </h1>

      <div className=" w-11/12 flex bg-base-200 rounded-lg p-5">
        <div className="w-full grid gap-2">
          <Input
            color="primary"
            label="Page title"
            variant="underlined"
            onValueChange={(value: string) =>
              setGraphQuery((lastQuery: GraphQuery | undefined) => ({
                ...(lastQuery || {}),
                title: value,
              }))
            }
          />
          <Input
            color="primary"
            label="Description"
            variant="underlined"
            onValueChange={(value: string) =>
              setGraphQuery((lastQuery: GraphQuery | undefined) => ({
                ...(lastQuery || {}),
                description: value,
              }))
            }
          />
          <Input
            color="primary"
            label="Page url"
            variant="underlined"
            onValueChange={(value: string) =>
              setGraphQuery((lastQuery: GraphQuery | undefined) => ({
                ...(lastQuery || {}),
                url: value,
              }))
            }
          />
          <Input
            color="primary"
            label="Media link"
            variant="underlined"
            onValueChange={(value: string) => {
              /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
                value,
              ) &&
                setGraphQuery((lastQuery: GraphQuery | undefined) => ({
                  ...(lastQuery || {}),
                  mediaLink: value,
                }));
            }}
          />
          <Select
            color="primary"
            defaultSelectedKeys={["article"]}
            label="Type"
            placeholder="Type"
            variant="underlined"
            onChange={({ target }) => {
              setGraphQuery((lastQuery: GraphQuery | undefined) => ({
                ...(lastQuery || {}),
                type: target.value,
              }));
            }}
          >
            {GraphTypes.map((type) => (
              <SelectItem key={type.key}>{type.label}</SelectItem>
            ))}
          </Select>
          <Button
            className="mt-4"
            color="primary"
            startContent={<CodeIcon fill="currentColor" />}
            onClick={() => {
              navigator.clipboard.writeText(`
<meta property="og:title" content="${graphQuery?.title ? graphQuery?.title : "Page title"}">
<meta property="og:description" content="${graphQuery?.description ? graphQuery?.description : "Your description"}">
<meta property="og:image" content="${graphQuery?.mediaLink ? graphQuery?.mediaLink : "telegram.image"}">
<meta property="og:url" content="${graphQuery?.url ? graphQuery?.url : "telegram.link"}">
<meta property="og:type" content="${graphQuery?.type ? graphQuery?.type : "article"}">
          `);
            }}
          >
            Copy Code
          </Button>
        </div>
        <div className=" m-4 flex justify-center w-full items-center">
          <TelegramCard graphQuery={graphQuery} />
        </div>
      </div>
      <div className=" w-11/12 flex justify-center bg-base-200 rounded-lg p-5">
        <Code className="whitespace-pre" color="secondary">
          {`
<meta property="og:title" content="${graphQuery?.title ? graphQuery?.title : "Page title"}">
<meta property="og:description" content="${graphQuery?.description ? graphQuery?.description : "Your description"}">
<meta property="og:image" content="${graphQuery?.mediaLink ? graphQuery?.mediaLink : "telegram.image"}">
<meta property="og:url" content="${graphQuery?.url ? graphQuery?.url : "telegram.link"}">
<meta property="og:type" content="${graphQuery?.type ? graphQuery?.type : "article"}">
          `}
        </Code>
      </div>
    </section>
  );
}
