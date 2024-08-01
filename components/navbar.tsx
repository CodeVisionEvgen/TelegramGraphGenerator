"use client";
import { Button } from "@nextui-org/button";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useRouter } from "next/navigation";

import { siteConfig } from "@/config/site";
export const NavbarComponent = () => {
  const router = useRouter();

  return (
    <Navbar isBlurred={false}>
      <NavbarContent justify="end">
        <NavbarItem className="flex gap-2">
          {siteConfig.contacts.map((contact, i) => {
            return (
              <Button
                key={i}
                isIconOnly
                color="success"
                startContent={<contact.icon fill="currentColor" />}
                variant="flat"
                onClick={() => {
                  router.push(contact.link);
                }}
              />
            );
          })}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
