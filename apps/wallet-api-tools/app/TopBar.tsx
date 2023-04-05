"use client";

import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../src/components/NavigationMenu";
import { cn } from "../src/lib/utils";

const tools: { title: string; href: string; description: string }[] = [
  {
    title: "Exchange Debug",
    href: "/exchange",
    description:
      "This tool can be used to debug the Ledger secure handshake protocol implementation in wallets",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function TopBar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center hidden md:block">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Wallet API Tools
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  CLI
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {tools.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
