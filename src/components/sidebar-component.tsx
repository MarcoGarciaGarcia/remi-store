"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { IRoute, mainNav, mainNavAdmin, mainNavStudent } from "@/routes";

import Link from "next/link";
import { sortAlphabetically } from "@/utilities";
import { usePathname } from "next/navigation";
import { Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";

const SidebarDesktop: React.FC = () => {
  const path = usePathname();
  const [bar, setBar] = useState<IRoute[]>(mainNav);

  useEffect(() => {
    const fetchUserProfile = () => {
      const storedProfile = sessionStorage.getItem("userRole");

      if (storedProfile === "1") {
        setBar(mainNavStudent);
      } else if (storedProfile === "3") {
        setBar(mainNav);
      } else if (storedProfile === "2") {
        setBar(mainNavAdmin);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <aside className="hidden lg:block lg:w-[115px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r bg-white">
      <div className="h-full px-1 py-28">
        <Accordion type="multiple" className="space-y-2">
          {bar.map(({ href, icon: Icon, title, slug, children, active }) =>
            children?.length ? (
              <AccordionItem
                key={slug}
                value={`item-${slug}`}
                className="flex flex-col border-b-0"
              >
                <AccordionTrigger
                  className={cn(
                    buttonVariants({
                      variant:
                        active === path || path.includes(active ?? "")
                          ? "default"
                          : "outline",
                    }),
                    "justify-between w-full mt-3 mb-4 hover:shadow-none hover:bg-transparent hover:text-inherit" //mb (Margen inferior) mt (Margen Superior)
                  )}
                >
                  <Tooltip content={title} key={slug} color="foreground" placement="right">
                    <div className="ml-3 flex flex-col items-center justify-center w-full">
                      {Icon && (
                        <Icon
                          className="h-6 w-6 mb-1 text-secondary-600"
                          aria-hidden="true"
                        />
                      )}
                      <span className="text-xs font-bold text-center leading-tight whitespace-normal break-words w-16 text-primary-500">
                        {title}
                      </span>
                    </div>
                  </Tooltip>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 w-full">
                  <div className="flex flex-col items-center space-y-2">
                    {sortAlphabetically<IRoute>(children, "title").map(
                      ({
                        href: hrefChildren,
                        slug,
                        title,
                        active: activeChildren,
                        icon: IconChildren,
                      }) => (
                        <Tooltip content={title} key={slug} placement="right" color='foreground'>
                          <Link
                            href={`${href}${hrefChildren}` || "/"}
                            className={cn(
                              buttonVariants({
                                size: null,
                                variant: "ghost",
                              }),
                              "flex items-center justify-center w-full",
                              activeChildren === path &&
                                "!text-black dark:!text-white"
                            )}
                          >
                            <div className="ml-2 flex flex-col items-center justify-center w-24">
                              {" "}
                              {IconChildren && (  
                                <IconChildren
                                  className={cn(
                                    "h-6 w-6 shrink-0 mb-1 text-secondary-600",
                                    activeChildren === path &&
                                      "text-primary-500"
                                  )}
                                  aria-hidden="true"
                                  aria-label={title}
                                />
                              )}
                              <span className="text-primary-500 text-xs font-bold text-center leading-tight whitespace-normal break-words w-full">
                                {title}
                              </span>
                            </div>
                          </Link>
                        </Tooltip>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              href && (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <Tooltip content={title} placement="right" color={"0" as any} className="bg-white text-primary-800 font-light p-2 rounded-lg">
                  <Link
                    key={slug}
                    href={href}
                    className={cn(
                      buttonVariants({
                        variant: active === path ? "destructive" : "sorting",
                        size: null,
                      }),
                      "justify-start w-full mb-3",
                      active === path ? "bg-secondary-100" : ""
                    )}
                  >
                    <div className="ml-5 flex flex-col items-center justify-center w-20">
                      {Icon && (
                        <Icon
                          className="h-6 w-6 mb-1 text-secondary-800"
                          aria-hidden="true"
                        />
                      )}
                      <span className="text-secondary-800 text-xs font-semibold text-center leading-tight whitespace-normal break-words w-20">
                        {title}
                      </span>
                    </div>
                  </Link>
                </Tooltip>
              )
            )
          )}
        </Accordion>
      </div>
    </aside>
  );
};

export { SidebarDesktop };
