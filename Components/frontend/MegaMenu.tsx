"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu"

const megaMenu = [
  {
    tite: "Top Booked",
    services : [
      {
        tile: "Telehealth",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "Video prescription refill",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "In person visit",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "UTI Consult",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
    ]
  },
  {
    tite: "Doctors",
    services : [
      {
        tile: "Telehealth",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "Video prescription refill",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "In person visit",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "UTI Consult",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
    ]
  },
  {
    tite: "Specialists",
    services : [
      {
        tile: "Telehealth",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "Video prescription refill",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "In person visit",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "UTI Consult",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
    ]
  },
  {
    tite: "Symptoms",
    services : [
      {
        tile: "Telehealth",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "Video prescription refill",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "In person visit",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
      {
        tile: "UTI Consult",
        slug : "tele-health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo necessitatibus, odio culpa deleniti consequatur aspernatur labore consectetur dolorem quibusdam"
      },
    ]
  },
]
export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      {
        megaMenu.map((item ,i)=>{
          return(
          <NavigationMenuItem key={i} className="mr-5">
          <NavigationMenuTrigger>{item.tite}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {item.services.map((component) => (
                <ListItem
                  key={component.tile}
                  title={component.tile}
                  href={`/services ${component.slug}`}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
          )
        })
      }

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
