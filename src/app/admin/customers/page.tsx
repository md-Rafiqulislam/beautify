"use client"

import React, { useState } from "react"
import {
    Search,
    Filter,
    Download,
    MoreHorizontal,
    Eye,
    Mail,
    Phone,
    MapPin,
    ShoppingBag,
    DollarSign,
    UserPlus,
    ChevronLeft,
    ChevronRight,
    Star,
    Calendar,
    Tag,
    ExternalLink,
    Users
} from "lucide-react"

// shadcn/ui components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Customer Data Interface
export interface Customer {
    id: string
    name: string
    email: string
    phone: string
    avatar: string
    location: string
    ordersCount: number
    totalSpent: number
    lastOrderDate: string
    status: "VIP" | "Active" | "New" | "Inactive"
    joinedDate: string
    recentOrders: {
        id: string
        date: string
        total: number
        status: string
    }[]
}

// Mock Customers Data
const mockCustomers: Customer[] = [
    {
        id: "CUST-101",
        name: "Alex Morgan",
        email: "alex.m@example.com",
        phone: "+1 (555) 234-5678",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        location: "Springfield, OR",
        ordersCount: 8,
        totalSpent: 1240.50,
        lastOrderDate: "2026-07-24",
        status: "VIP",
        joinedDate: "Jan 12, 2025",
        recentOrders: [
            { id: "ORD-9281", date: "2026-07-24", total: 249.99, status: "Processing" },
            { id: "ORD-8812", date: "2026-05-10", total: 199.00, status: "Delivered" },
            { id: "ORD-8104", date: "2026-02-18", total: 412.50, status: "Delivered" },
        ],
    },
    {
        id: "CUST-102",
        name: "Sarah Jenkins",
        email: "sarah.j@example.com",
        phone: "+1 (555) 876-5432",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
        location: "San Francisco, CA",
        ordersCount: 3,
        totalSpent: 310.00,
        lastOrderDate: "2026-07-24",
        status: "Active",
        joinedDate: "Mar 04, 2026",
        recentOrders: [
            { id: "ORD-9280", date: "2026-07-24", total: 89.00, status: "Shipped" },
            { id: "ORD-8921", date: "2026-06-15", total: 221.00, status: "Delivered" },
        ],
    },
    {
        id: "CUST-103",
        name: "Michael Chen",
        email: "mchen@example.com",
        phone: "+1 (555) 345-6789",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        location: "Austin, TX",
        ordersCount: 12,
        totalSpent: 2890.00,
        lastOrderDate: "2026-07-23",
        status: "VIP",
        joinedDate: "Nov 20, 2024",
        recentOrders: [
            { id: "ORD-9279", date: "2026-07-23", total: 412.50, status: "Delivered" },
            { id: "ORD-8710", date: "2026-04-02", total: 820.00, status: "Delivered" },
        ],
    },
    {
        id: "CUST-104",
        name: "Emily Davis",
        email: "emily.d@example.com",
        phone: "+1 (555) 901-2345",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        location: "Seattle, WA",
        ordersCount: 1,
        totalSpent: 120.00,
        lastOrderDate: "2026-07-23",
        status: "New",
        joinedDate: "Jul 21, 2026",
        recentOrders: [
            { id: "ORD-9278", date: "2026-07-23", total: 120.00, status: "Pending" },
        ],
    },
    {
        id: "CUST-105",
        name: "David Kim",
        email: "dkim@example.com",
        phone: "+1 (555) 456-7890",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        location: "Chicago, IL",
        ordersCount: 0,
        totalSpent: 0.00,
        lastOrderDate: "Never",
        status: "Inactive",
        joinedDate: "Feb 10, 2026",
        recentOrders: [],
    },
]

export default function AdminCustomersPage() {
    const [customers] = useState<Customer[]>(mockCustomers)
    const [selectedTab, setSelectedTab] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedRows, setSelectedRows] = useState<string[]>([])
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

    // Filter Logic
    const filteredCustomers = customers.filter((customer) => {
        const matchesSearch =
            customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.location.toLowerCase().includes(searchQuery.toLowerCase())

        if (!matchesSearch) return false

        if (selectedTab === "vip") return customer.status === "VIP"
        if (selectedTab === "new") return customer.status === "New"
        if (selectedTab === "active") return customer.status === "Active" || customer.status === "VIP"
        if (selectedTab === "inactive") return customer.status === "Inactive"

        return true
    })

    // Bulk Selection Handlers
    const toggleSelectAll = () => {
        if (selectedRows.length === filteredCustomers.length) {
            setSelectedRows([])
        } else {
            setSelectedRows(filteredCustomers.map(c => c.id))
        }
    }

    const toggleSelectRow = (id: string) => {
        setSelectedRows(prev =>
            prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
        )
    }

    // Customer Status Badge Helper
    const getStatusBadge = (status: Customer["status"]) => {
        switch (status) {
            case "VIP":
                return <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400 border-none gap-1"><Star className="h-3 w-3 fill-amber-500 text-amber-500" /> VIP</Badge>
            case "Active":
                return <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-none">Active</Badge>
            case "New":
                return <Badge className="bg-blue-500/15 text-blue-600 dark:text-blue-400 border-none">New</Badge>
            case "Inactive":
                return <Badge variant="secondary" className="text-muted-foreground">Inactive</Badge>
        }
    }

    return (
        <div className="flex-1 space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
                    <p className="text-sm text-muted-foreground">
                        View customer profiles, purchase history, and lifetime value.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5">
                        <Download className="h-4 w-4" />
                        <span>Export CSV</span>
                    </Button>
                    <Button size="sm" className="gap-1.5">
                        <UserPlus className="h-4 w-4" />
                        <span>Add Customer</span>
                    </Button>
                </div>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2,350</div>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                            +18.1% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">VIP Segment</CardTitle>
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">142</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Top 6% of buyers
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg. Lifetime Value</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$384.20</div>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                            +$24.50 avg order
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Repeat Buyer Rate</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">42.8%</div>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                            +4.2% higher retention
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Customers Table Card */}
            <Card>
                <CardHeader className="pb-3">
                    {/* Segment Tabs */}
                    <Tabs defaultValue="all" onValueChange={setSelectedTab} className="w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <TabsList className="w-full lg:w-auto justify-start overflow-x-auto">
                                <TabsTrigger value="all">All Customers ({customers.length})</TabsTrigger>
                                <TabsTrigger value="vip">VIP Segment</TabsTrigger>
                                <TabsTrigger value="active">Active Buyers</TabsTrigger>
                                <TabsTrigger value="new">New Members</TabsTrigger>
                                <TabsTrigger value="inactive">Inactive</TabsTrigger>
                            </TabsList>

                            {/* Bulk Actions Indicator */}
                            {selectedRows.length > 0 && (
                                <div className="flex items-center gap-2 bg-muted/60 px-3 py-1.5 rounded-md text-xs font-medium">
                                    <span>{selectedRows.length} selected</span>
                                    <Button variant="ghost" size="sm" className="h-7 text-xs">Send Email</Button>
                                    <Button variant="ghost" size="sm" className="h-7 text-xs">Add Tag</Button>
                                </div>
                            )}
                        </div>
                    </Tabs>

                    {/* Search & Filter Controls */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                        <div className="relative w-full sm:flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search by customer name, email, or city..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-8"
                            />
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                            <Button variant="outline" size="sm" className="gap-1.5 w-full sm:w-auto">
                                <Filter className="h-4 w-4" />
                                <span>Filters</span>
                            </Button>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[40px] pl-4">
                                    <Checkbox
                                        checked={selectedRows.length === filteredCustomers.length && filteredCustomers.length > 0}
                                        onCheckedChange={toggleSelectAll}
                                    />
                                </TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden md:table-cell">Location</TableHead>
                                <TableHead>Segment</TableHead>
                                <TableHead className="text-center">Orders</TableHead>
                                <TableHead className="text-right">Total Spent (LTV)</TableHead>
                                <TableHead className="hidden lg:table-cell text-right">Last Order</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredCustomers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="h-24 text-center text-muted-foreground">
                                        No customers found matching your search.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredCustomers.map((customer) => (
                                    <TableRow
                                        key={customer.id}
                                        className="cursor-pointer hover:bg-muted/50"
                                        onClick={() => setSelectedCustomer(customer)}
                                    >
                                        <TableCell className="pl-4" onClick={(e) => e.stopPropagation()}>
                                            <Checkbox
                                                checked={selectedRows.includes(customer.id)}
                                                onCheckedChange={() => toggleSelectRow(customer.id)}
                                            />
                                        </TableCell>

                                        {/* Avatar & Name */}
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-9 w-9 border">
                                                    <AvatarImage src={customer.avatar} alt={customer.name} />
                                                    <AvatarFallback>{customer.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold text-sm hover:underline">{customer.name}</p>
                                                    <p className="text-xs text-muted-foreground">{customer.email}</p>
                                                </div>
                                            </div>
                                        </TableCell>

                                        {/* Location */}
                                        <TableCell className="hidden md:table-cell">
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <MapPin className="h-3.5 w-3.5" />
                                                <span>{customer.location}</span>
                                            </div>
                                        </TableCell>

                                        {/* Segment Badge */}
                                        <TableCell>{getStatusBadge(customer.status)}</TableCell>

                                        {/* Orders Count */}
                                        <TableCell className="text-center font-medium">{customer.ordersCount}</TableCell>

                                        {/* Total Spent */}
                                        <TableCell className="text-right font-semibold">${customer.totalSpent.toFixed(2)}</TableCell>

                                        {/* Last Order Date */}
                                        <TableCell className="hidden lg:table-cell text-right text-xs text-muted-foreground">
                                            {customer.lastOrderDate}
                                        </TableCell>

                                        {/* Actions Menu */}
                                        <TableCell onClick={(e) => e.stopPropagation()}>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem onClick={() => setSelectedCustomer(customer)} className="gap-2">
                                                        <Eye className="h-4 w-4" /> View Customer Profile
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="gap-2" asChild>
                                                        <a href={`mailto:${customer.email}`}>
                                                            <Mail className="h-4 w-4" /> Send Direct Email
                                                        </a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                                                        Delete Account
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-between px-4 py-4 border-t">
                        <p className="text-xs text-muted-foreground">
                            Showing <strong>1-{filteredCustomers.length}</strong> of <strong>{filteredCustomers.length}</strong> customers
                        </p>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Customer Profile Slide-over Sheet */}
            <Sheet open={!!selectedCustomer} onOpenChange={(open) => !open && setSelectedCustomer(null)}>
                {selectedCustomer && (
                    <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                        <SheetHeader className="pb-4 border-b">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-12 w-12 border">
                                    <AvatarImage src={selectedCustomer.avatar} alt={selectedCustomer.name} />
                                    <AvatarFallback>{selectedCustomer.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <SheetTitle className="text-lg font-bold flex items-center gap-2">
                                        <span>{selectedCustomer.name}</span>
                                        {getStatusBadge(selectedCustomer.status)}
                                    </SheetTitle>
                                    <SheetDescription className="text-xs">
                                        Customer since {selectedCustomer.joinedDate}
                                    </SheetDescription>
                                </div>
                            </div>
                        </SheetHeader>

                        <div className="space-y-6 py-4">

                            {/* Lifetime Value Metric Box */}
                            <div className="grid grid-cols-2 gap-3 p-3 rounded-lg border bg-muted/40 text-center">
                                <div>
                                    <p className="text-xs text-muted-foreground">Total Spent (LTV)</p>
                                    <p className="text-lg font-bold text-foreground">${selectedCustomer.totalSpent.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Orders Placed</p>
                                    <p className="text-lg font-bold text-foreground">{selectedCustomer.ordersCount}</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground" /> Contact & Address
                                </h3>
                                <div className="rounded-lg border p-3 space-y-2 text-xs">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                                        <span className="text-foreground">{selectedCustomer.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                                        <span className="text-foreground">{selectedCustomer.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2 pt-1 border-t">
                                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                                        <span className="text-foreground">{selectedCustomer.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Order History */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold flex items-center gap-2">
                                    <ShoppingBag className="h-4 w-4 text-muted-foreground" /> Order History
                                </h3>
                                {selectedCustomer.recentOrders.length === 0 ? (
                                    <p className="text-xs text-muted-foreground italic border rounded-lg p-3">
                                        No orders recorded yet for this customer.
                                    </p>
                                ) : (
                                    <div className="rounded-lg border divide-y text-xs">
                                        {selectedCustomer.recentOrders.map((order) => (
                                            <div key={order.id} className="p-3 flex justify-between items-center hover:bg-muted/30">
                                                <div>
                                                    <p className="font-semibold text-primary">{order.id}</p>
                                                    <p className="text-muted-foreground">{order.date}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold">${order.total.toFixed(2)}</p>
                                                    <Badge variant="outline" className="text-[10px] py-0">{order.status}</Badge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Admin Quick Contact Action */}
                            <div className="pt-2 border-t flex gap-2">
                                <Button className="w-full gap-2" asChild>
                                    <a href={`mailto:${selectedCustomer.email}`}>
                                        <Mail className="h-4 w-4" /> Send Email
                                    </a>
                                </Button>
                            </div>

                        </div>
                    </SheetContent>
                )}
            </Sheet>

        </div>
    )
}