"use client"

import React, { useState } from "react"
import {
    Search,
    Filter,
    Download,
    MoreHorizontal,
    Eye,
    Truck,
    CheckCircle2,
    Clock,
    XCircle,
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    Package,
    CreditCard,
    MapPin,
    RefreshCw
} from "lucide-react"

// shadcn/ui components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

// Mock Orders Data
const mockOrders = [
    {
        id: "ORD-9281",
        date: "2026-07-24 14:34",
        customer: { name: "Alex Morgan", email: "alex.m@example.com", phone: "+1 (555) 234-5678" },
        shippingAddress: "742 Evergreen Terrace, Springfield, OR 97477",
        paymentStatus: "Paid",
        fulfillmentStatus: "Processing",
        total: 249.99,
        items: [
            { id: "p1", name: "Ergonomic Desk Chair", qty: 1, price: 199.99 },
            { id: "p4", name: "Minimalist Desk Mat", qty: 2, price: 25.00 },
        ],
    },
    {
        id: "ORD-9280",
        date: "2026-07-24 11:20",
        customer: { name: "Sarah Jenkins", email: "sarah.j@example.com", phone: "+1 (555) 876-5432" },
        shippingAddress: "123 Market St, Apt 4B, San Francisco, CA 94103",
        paymentStatus: "Paid",
        fulfillmentStatus: "Shipped",
        total: 89.00,
        items: [
            { id: "p2", name: "Wireless Mechanical Keyboard", qty: 1, price: 89.00 },
        ],
    },
    {
        id: "ORD-9279",
        date: "2026-07-23 18:45",
        customer: { name: "Michael Chen", email: "mchen@example.com", phone: "+1 (555) 345-6789" },
        shippingAddress: "456 Oak Lane, Austin, TX 78701",
        paymentStatus: "Paid",
        fulfillmentStatus: "Delivered",
        total: 412.50,
        items: [
            { id: "p3", name: "UltraWide Monitor 34\"", qty: 1, price: 389.00 },
            { id: "p4", name: "Minimalist Desk Mat", qty: 1, price: 23.50 },
        ],
    },
    {
        id: "ORD-9278",
        date: "2026-07-23 09:12",
        customer: { name: "Emily Davis", email: "emily.d@example.com", phone: "+1 (555) 901-2345" },
        shippingAddress: "789 Pine Rd, Seattle, WA 98101",
        paymentStatus: "Pending",
        fulfillmentStatus: "Unfulfilled",
        total: 120.00,
        items: [
            { id: "p5", name: "USB-C Multi-Port Hub", qty: 2, price: 60.00 },
        ],
    },
    {
        id: "ORD-9277",
        date: "2026-07-22 16:05",
        customer: { name: "David Kim", email: "dkim@example.com", phone: "+1 (555) 456-7890" },
        shippingAddress: "321 Elm St, Chicago, IL 60601",
        paymentStatus: "Refunded",
        fulfillmentStatus: "Cancelled",
        total: 55.00,
        items: [
            { id: "p6", name: "Vertical Ergonomic Mouse", qty: 1, price: 55.00 },
        ],
    },
]

export default function AdminOrdersPage() {
    const [orders] = useState(mockOrders)
    const [selectedTab, setSelectedTab] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[0] | null>(null)
    const [selectedRows, setSelectedRows] = useState<string[]>([])

    // Filter Logic
    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.email.toLowerCase().includes(searchQuery.toLowerCase())

        if (!matchesSearch) return false

        if (selectedTab === "processing") return order.fulfillmentStatus === "Processing" || order.fulfillmentStatus === "Unfulfilled"
        if (selectedTab === "shipped") return order.fulfillmentStatus === "Shipped"
        if (selectedTab === "delivered") return order.fulfillmentStatus === "Delivered"
        if (selectedTab === "cancelled") return order.fulfillmentStatus === "Cancelled"

        return true
    })

    // Select All Checkbox
    const toggleSelectAll = () => {
        if (selectedRows.length === filteredOrders.length) {
            setSelectedRows([])
        } else {
            setSelectedRows(filteredOrders.map(o => o.id))
        }
    }

    const toggleSelectRow = (id: string) => {
        setSelectedRows(prev =>
            prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
        )
    }

    // Badges styling helper
    const getFulfillmentBadge = (status: string) => {
        switch (status) {
            case "Delivered":
                return <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-none"><CheckCircle2 className="mr-1 h-3 w-3" /> Delivered</Badge>
            case "Shipped":
                return <Badge className="bg-blue-500/15 text-blue-600 dark:text-blue-400 border-none"><Truck className="mr-1 h-3 w-3" /> Shipped</Badge>
            case "Processing":
                return <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400 border-none"><Clock className="mr-1 h-3 w-3" /> Processing</Badge>
            case "Unfulfilled":
                return <Badge variant="outline" className="text-muted-foreground"><Clock className="mr-1 h-3 w-3" /> Unfulfilled</Badge>
            case "Cancelled":
                return <Badge className="bg-destructive/15 text-destructive border-none"><XCircle className="mr-1 h-3 w-3" /> Cancelled</Badge>
            default:
                return <Badge variant="secondary">{status}</Badge>
        }
    }

    const getPaymentBadge = (status: string) => {
        switch (status) {
            case "Paid":
                return <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400">Paid</Badge>
            case "Pending":
                return <Badge variant="outline" className="border-amber-500/30 text-amber-600 dark:text-amber-400">Pending</Badge>
            case "Refunded":
                return <Badge variant="outline" className="border-destructive/30 text-destructive">Refunded</Badge>
            default:
                return <Badge variant="outline">{status}</Badge>
        }
    }

    return (
        <div className="flex-1 space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage customer orders, track shipments, and view order receipts.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5">
                        <Download className="h-4 w-4" />
                        <span>Export CSV</span>
                    </Button>
                </div>
            </div>

            {/* Main Content Card */}
            <Card>
                <CardHeader className="pb-3">
                    {/* Status Tabs */}
                    <Tabs defaultValue="all" onValueChange={setSelectedTab} className="w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <TabsList className="w-full lg:w-auto justify-start overflow-x-auto">
                                <TabsTrigger value="all">All Orders ({orders.length})</TabsTrigger>
                                <TabsTrigger value="processing">
                                    Processing ({orders.filter(o => o.fulfillmentStatus === "Processing" || o.fulfillmentStatus === "Unfulfilled").length})
                                </TabsTrigger>
                                <TabsTrigger value="shipped">Shipped</TabsTrigger>
                                <TabsTrigger value="delivered">Delivered</TabsTrigger>
                                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                            </TabsList>

                            {/* Bulk Actions Indicator */}
                            {selectedRows.length > 0 && (
                                <div className="flex items-center gap-2 bg-muted/60 px-3 py-1.5 rounded-md text-xs font-medium">
                                    <span>{selectedRows.length} selected</span>
                                    <Button variant="ghost" size="sm" className="h-7 text-xs">Mark as Shipped</Button>
                                    <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive">Cancel</Button>
                                </div>
                            )}
                        </div>
                    </Tabs>

                    {/* Search & Filter Bar */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                        <div className="relative w-full sm:flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search order ID, customer name, or email..."
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
                                        checked={selectedRows.length === filteredOrders.length && filteredOrders.length > 0}
                                        onCheckedChange={toggleSelectAll}
                                    />
                                </TableHead>
                                <TableHead className="w-[110px]">
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        Order <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                                    </div>
                                </TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead>Payment</TableHead>
                                <TableHead>Fulfillment</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredOrders.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="h-24 text-center text-muted-foreground">
                                        No orders found matching your criteria.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredOrders.map((order) => (
                                    <TableRow
                                        key={order.id}
                                        className="cursor-pointer hover:bg-muted/50"
                                        onClick={() => setSelectedOrder(order)}
                                    >
                                        <TableCell className="pl-4" onClick={(e) => e.stopPropagation()}>
                                            <Checkbox
                                                checked={selectedRows.includes(order.id)}
                                                onCheckedChange={() => toggleSelectRow(order.id)}
                                            />
                                        </TableCell>
                                        <TableCell className="font-semibold text-primary">{order.id}</TableCell>
                                        <TableCell>
                                            <div className="font-medium text-sm">{order.customer.name}</div>
                                            <div className="text-xs text-muted-foreground">{order.customer.email}</div>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell text-xs text-muted-foreground">
                                            {order.date}
                                        </TableCell>
                                        <TableCell>{getPaymentBadge(order.paymentStatus)}</TableCell>
                                        <TableCell>{getFulfillmentBadge(order.fulfillmentStatus)}</TableCell>
                                        <TableCell className="text-right font-medium">${order.total.toFixed(2)}</TableCell>
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
                                                    <DropdownMenuItem onClick={() => setSelectedOrder(order)} className="gap-2">
                                                        <Eye className="h-4 w-4" /> View Details
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="gap-2">
                                                        <Truck className="h-4 w-4" /> Mark as Shipped
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                                                        <XCircle className="h-4 w-4" /> Cancel Order
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
                            Showing <strong>1-{filteredOrders.length}</strong> of <strong>{filteredOrders.length}</strong> orders
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

            {/* Order Details Slide-over Sheet */}
            <Sheet open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
                {selectedOrder && (
                    <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                        <SheetHeader className="pb-4 border-b">
                            <div className="flex items-center justify-between pr-4">
                                <SheetTitle className="text-lg font-bold">{selectedOrder.id}</SheetTitle>
                                {getFulfillmentBadge(selectedOrder.fulfillmentStatus)}
                            </div>
                            <SheetDescription className="text-xs">
                                Placed on {selectedOrder.date}
                            </SheetDescription>
                        </SheetHeader>

                        <div className="space-y-6 py-4">

                            {/* Items Ordered Section */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold flex items-center gap-2">
                                    <Package className="h-4 w-4 text-muted-foreground" /> Items Ordered
                                </h3>
                                <div className="rounded-lg border divide-y text-xs">
                                    {selectedOrder.items.map((item) => (
                                        <div key={item.id} className="p-3 flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-foreground">{item.name}</p>
                                                <p className="text-muted-foreground">Qty: {item.qty} × ${item.price.toFixed(2)}</p>
                                            </div>
                                            <p className="font-semibold">${(item.qty * item.price).toFixed(2)}</p>
                                        </div>
                                    ))}
                                    <div className="p-3 bg-muted/40 space-y-1">
                                        <div className="flex justify-between text-muted-foreground">
                                            <span>Subtotal</span>
                                            <span>${selectedOrder.total.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-muted-foreground">
                                            <span>Shipping</span>
                                            <span>Free</span>
                                        </div>
                                        <div className="flex justify-between font-bold text-foreground text-sm pt-1 border-t">
                                            <span>Total Paid</span>
                                            <span>${selectedOrder.total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Information */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" /> Customer & Shipping
                                </h3>
                                <div className="rounded-lg border p-3 space-y-2 text-xs">
                                    <div>
                                        <p className="font-semibold text-foreground">{selectedOrder.customer.name}</p>
                                        <p className="text-muted-foreground">{selectedOrder.customer.email}</p>
                                        <p className="text-muted-foreground">{selectedOrder.customer.phone}</p>
                                    </div>
                                    <div className="pt-2 border-t">
                                        <p className="text-muted-foreground font-medium mb-0.5">Shipping Address:</p>
                                        <p className="text-foreground">{selectedOrder.shippingAddress}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Details */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold flex items-center gap-2">
                                    <CreditCard className="h-4 w-4 text-muted-foreground" /> Payment Summary
                                </h3>
                                <div className="rounded-lg border p-3 flex justify-between items-center text-xs">
                                    <div>
                                        <p className="font-medium">Credit Card (Stripe)</p>
                                        <p className="text-muted-foreground">Status: {selectedOrder.paymentStatus}</p>
                                    </div>
                                    {getPaymentBadge(selectedOrder.paymentStatus)}
                                </div>
                            </div>

                            {/* Status Update Quick Action */}
                            <div className="space-y-2 pt-2 border-t">
                                <label className="text-xs font-semibold">Update Fulfillment Status</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <Button variant="outline" size="sm" className="gap-1 text-xs">
                                        <Truck className="h-3.5 w-3.5" /> Mark Shipped
                                    </Button>
                                    <Button variant="outline" size="sm" className="gap-1 text-xs">
                                        <CheckCircle2 className="h-3.5 w-3.5" /> Mark Delivered
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </SheetContent>
                )}
            </Sheet>

        </div>
    )
}