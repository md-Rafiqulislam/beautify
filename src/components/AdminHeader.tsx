import {
    ShoppingBag,
    Package,
    Users,
    BarChart3,
    Search,
    Bell,
    ExternalLink,
    Menu,
    Settings,
    Store,
    LogOut,
    User
} from "lucide-react"

// shadcn/ui components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

const AdminHeader = () => {
    // Example dynamic counts (e.g. 3 new orders requiring attention)
    const pendingOrdersCount = 3

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: BarChart3 },
        { name: "Orders", href: "/admin/orders", icon: ShoppingBag, badge: pendingOrdersCount },
        { name: "Products", href: "/admin/products", icon: Package },
        { name: "Customers", href: "/admin/customers", icon: Users },
        // { name: "Settings", href: "/admin/settings", icon: Settings },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container app-container flex h-16 items-center justify-between gap-4 px-4 sm:px-6">

                {/* Left: Store Branding & Desktop Navigation */}
                <div className="flex items-center gap-6 md:gap-8">
                    <Link href="/admin" className="flex items-center gap-2 font-bold tracking-tight hover:opacity-90">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Store className="h-5 w-5" />
                        </div>
                        <span className="hidden font-semibold sm:inline-block">StoreAdmin</span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link key={item.name} href={item.href}>
                                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                                        <Icon className="h-4 w-4" />
                                        <span>{item.name}</span>
                                        {item.badge ? (
                                            <Badge variant="default" className="ml-1 h-5 px-1.5 text-[10px]">
                                                {item.badge}
                                            </Badge>
                                        ) : null}
                                    </Button>
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                {/* Right: Quick Actions, Notifications & Profile */}
                <div className="flex items-center gap-2 sm:gap-3">

                    {/* Live Storefront Link */}
                    <Button variant="outline" size="sm" asChild className="hidden sm:flex gap-1.5">
                        <Link href="/" target="_blank" rel="noopener noreferrer">
                            <span>Storefront</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                    </Button>

                    {/* Notification Alert Button */}
                    <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive animate-pulse" />
                        <span className="sr-only">Notifications</span>
                    </Button>

                    {/* Admin Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" alt="Admin Avatar" />
                                    <AvatarFallback>AD</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">Store Manager</p>
                                    <p className="text-xs leading-none text-muted-foreground">admin@store.com</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Navigation Drawer (Sheet) */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-75 sm:w-87.5">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2">
                                    <Store className="h-5 w-5 text-primary" />
                                    <span>Store Admin</span>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-4 py-4">
                                {/* Search on mobile */}
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input type="search" placeholder="Search store..." className="pl-8" />
                                </div>

                                {/* Mobile Links */}
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon className="h-4 w-4 text-muted-foreground" />
                                                    <span>{item.name}</span>
                                                </div>
                                                {item.badge ? (
                                                    <Badge variant="default" className="h-5 px-1.5 text-[10px]">
                                                        {item.badge}
                                                    </Badge>
                                                ) : null}
                                            </a>
                                        )
                                    })}
                                </nav>

                                <div className="pt-4 border-t">
                                    <Button variant="outline" size="sm" asChild className="w-full justify-between">
                                        <a href="/" target="_blank" rel="noopener noreferrer">
                                            <span>View Live Store</span>
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    )
}

export default AdminHeader