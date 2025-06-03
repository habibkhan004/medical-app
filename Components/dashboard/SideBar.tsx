
import Link from "next/link"
import {
    Bell,
    CircleUser,
    Folder,
    Grid2X2,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    Settings,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"



export default async function Sidebar() {
    const sideBarLinks = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: Home,
        },
        {
            name: "Patients",
            path: "/dashboard/patients",
            icon: Folder,
        },
        {
            name: "Appointments",
            path: "/appointments",
            icon: Grid2X2,
        },
        {
            name: "Reports",
            path: "/reports",
            icon: LineChart,
        },
        {
            name: "Settings",
            path: "/dashboard/settings",
            icon: Settings,
        },
        {
            name: "Log Out",
            path: "/logout",
            icon: Bell,
        },
    ]
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span className="">Medical App</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">

                        {sideBarLinks.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <Link key={i}
                                    href={item.path}
                                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary"
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            )
                        })

                        }
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card x-chunk="A card with a call to action">
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our support
                                team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}