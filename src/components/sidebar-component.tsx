"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { IRoute, mainNav, mainNavAdmin, mainNavWorker } from "@/routes";

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
        setBar(mainNav);
      } else if (storedProfile === "3") {
        setBar(mainNavAdmin);
      } else if (storedProfile === "2") {
        setBar(mainNavWorker);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <aside className="hidden lg:block lg:w-[180px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r bg-transparent border-0 border-none">
      <div className="absolute inset-0 backdrop-blur-lg z-0 p-5"></div>
      <div className="h-full px-1 py-32 relative">
        <Accordion
          type="multiple"
          className="space-y-2 z-30 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow-xl duration-200 transform py-8 px-5 rounded-lg"
        >
          {bar.map(({ href, icon: Icon, title, slug, children, active }) =>
            children?.length ? (
              <AccordionItem
                key={slug} // Asumimos que slug es único para este nivel
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
                    "justify-between w-full mt-3 mb-4 hover:shadow-none hover:bg-transparent hover:text-inherit text-primary-900"
                  )}
                >
                  <Tooltip
                    content={title}
                    key={slug}
                    color="foreground"
                    placement="right"
                  >
                    <div className="flex items-center w-full">
                      {Icon && (
                        <Icon
                          className="h-6 w-6 mr-2 text-primary-900"
                          aria-hidden="true"
                        />
                      )}
                      <span className="text-xs font-bold text-center leading-tight whitespace-normal break-words w-16 text-primary-900">
                        {title}
                      </span>
                    </div>
                  </Tooltip>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 w-full">
                  <div className="flex flex-col items-start space-y-2">
                    {sortAlphabetically<IRoute>(children, "title").map(
                      ({
                        href: hrefChildren,
                        slug: childSlug,
                        title,
                        active: activeChildren,
                        icon: IconChildren,
                      }) => (
                        <Tooltip
                          content={title}
                          key={childSlug}
                          placement="right"
                          color="foreground"
                        >
                          <Link
                            href={`${href}${hrefChildren}` || "/"}
                            className={cn(
                              buttonVariants({
                                size: null,
                                variant: "ghost",
                              }),
                              "flex items-center justify-start w-full",
                              activeChildren === path &&
                                "!text-black dark:!text-white"
                            )}
                          >
                            <div className="flex items-center w-full">
                              {IconChildren && (
                                <IconChildren
                                  className={cn(
                                    "h-6 w-6 mr-2 shrink-0 text-primary-900",
                                    activeChildren === path &&
                                      "text-primary-900"
                                  )}
                                  aria-hidden="true"
                                  aria-label={title}
                                />
                              )}
                              <span className="text-primary-900 text-xs font-bold text-center leading-tight whitespace-normal break-words w-full">
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
                <Tooltip
                  content={title}
                  placement="right"
                  color={"0" as any}
                  className="bg-white text-primary-800 font-light p-2 rounded-lg"
                >
                  <Link
                    key={slug}
                    href={href}
                    className={cn(
                      buttonVariants({
                        variant: active === path ? "destructive" : "sorting",
                        size: null,
                      }),
                      "justify-start w-full mb-3 px-3",
                      active === path
                        ? "group bg-black hover:bg-white transition"
                        : ""
                    )}
                  >
                    <div className="flex items-center w-full py-2">
                      {Icon && (
                        <Icon
                          className={
                            active === path
                              ? "h-6 w-6 mr-2 text-white group-hover:text-black"
                              : "h-6 w-6 mr-2 text-black"
                          }
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={
                          active === path
                            ? "group-hover:text-black text-white text-xs font-semibold text-center leading-tight whitespace-normal break-words w-20"
                            : "text-black text-xs font-semibold text-center leading-tight whitespace-normal break-words w-20"
                        }
                      >
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
