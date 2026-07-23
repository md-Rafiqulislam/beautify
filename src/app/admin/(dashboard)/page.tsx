import React from "react";
import {
    DollarSign,
    ShoppingBag,
    Package,
    Users,
    TrendingUp,
    ArrowUpRight,
    Plus,
    MoreHorizontal,
    AlertTriangle,
    Eye,
    CheckCircle2,
    Clock,
    Truck
} from "lucide-react";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminDashboard() {
    // Mock Data
    const recentOrders = [
        {
            id: "ORD-9281",
            customer: "Alex Morgan",
            email: "alex@example.com",
            items: 3,
            total: "$249.99",
            status: "Processing",
            date: "Today, 2:34 PM",
        },
        {
            id: "ORD-9280",
            customer: "Sarah Jenkins",
            email: "sarah.j@example.com",
            items: 1,
            total: "$89.00",
            status: "Shipped",
            date: "Today, 11:20 AM",
        },
        {
            id: "ORD-9279",
            customer: "Michael Chen",
            email: "mchen@example.com",
            items: 4,
            total: "$412.50",
            status: "Delivered",
            date: "Yesterday",
        },
        {
            id: "ORD-9278",
            customer: "Emily Davis",
            email: "emily.d@example.com",
            items: 2,
            total: "$120.00",
            status: "Pending",
            date: "Yesterday",
        },
        {
            id: "ORD-9277",
            customer: "David Kim",
            email: "dkim@example.com",
            items: 1,
            total: "$55.00",
            status: "Delivered",
            date: "Jul 22, 2026",
        },
    ];

    const topProducts = [
        { name: "Ergonomic Desk Chair", sales: 142, revenue: "$28,400", stock: 18 },
        { name: "Wireless Mechanical Keyboard", sales: 98, revenue: "$12,740", stock: 34 },
        { name: "UltraWide Monitor 34\"", sales: 64, revenue: "$38,400", stock: 5 },
        { name: "Minimalist Desk Mat", sales: 210, revenue: "$6,300", stock: 82 },
    ];

    const lowStockItems = [
        { name: "UltraWide Monitor 34\"", remaining: 5, sku: "MON-34-UW" },
        { name: "USB-C Multi-Port Hub", remaining: 2, sku: "HUB-USBC-01" },
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "Delivered":
                return <Badge className="bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/25 border-none dark:text-emerald-400"><CheckCircle2 className="mr-1 h-3 w-3" /> Delivered</Badge>;
            case "Shipped":
                return <Badge className="bg-blue-500/15 text-blue-600 hover:bg-blue-500/25 border-none dark:text-blue-400"><Truck className="mr-1 h-3 w-3" /> Shipped</Badge>;
            case "Processing":
                return <Badge className="bg-amber-500/15 text-amber-600 hover:bg-amber-500/25 border-none dark:text-amber-400"><Clock className="mr-1 h-3 w-3" /> Processing</Badge>;
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    return (
        <div className="flex-1 space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">

            {/* Dashboard Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Store Overview</h1>
                    <p className="text-sm text-muted-foreground">
                        Here is what's happening with your store today.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                        Export Data
                    </Button>
                    <Button size="sm" className="gap-1.5">
                        <Plus className="h-4 w-4" />
                        <span>Add Product</span>
                    </Button>
                </div>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-1">
                            <TrendingUp className="h-3 w-3" /> +20.1% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-1">
                            <TrendingUp className="h-3 w-3" /> +12.2% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">124</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            2 items low in stock
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2,350</div>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-1">
                            <TrendingUp className="h-3 w-3" /> +18.1% from last month
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Layout Grid */}
            <div className="grid gap-6 md:grid-cols-7">

                {/* Left Column: Recent Orders Table (4 Cols on desktop) */}
                <Card className="md:col-span-4 lg:col-span-5">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Recent Orders</CardTitle>
                            <CardDescription>
                                You have {recentOrders.filter(o => o.status === "Processing" || o.status === "Pending").length} orders that need fulfillment.
                            </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" asChild className="gap-1 text-xs">
                            <a href="/admin/orders">
                                View All <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                    <TableHead className="w-12.5"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentOrders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-medium">{order.id}</TableCell>
                                        <TableCell>
                                            <div className="font-medium text-sm">{order.customer}</div>
                                            <div className="text-xs text-muted-foreground">{order.email}</div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {getStatusBadge(order.status)}
                                        </TableCell>
                                        <TableCell className="text-right font-medium">{order.total}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem className="gap-2">
                                                        <Eye className="h-4 w-4" /> View Details
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="gap-2">
                                                        <Truck className="h-4 w-4" /> Update Status
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Right Column: Inventory Alerts & Top Products (3 Cols on desktop) */}
                <div className="space-y-6 md:col-span-3 lg:col-span-2">

                    {/* Low Stock Inventory Alert */}
                    {lowStockItems.length > 0 && (
                        <Card className="border-amber-500/40 bg-amber-500/5 dark:bg-amber-500/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                                    Low Stock Warning
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-xs">
                                {lowStockItems.map((item) => (
                                    <div key={item.sku} className="flex items-center justify-between pb-2 border-b border-amber-200/50 dark:border-amber-900/50 last:border-0 last:pb-0">
                                        <div>
                                            <p className="font-medium text-foreground">{item.name}</p>
                                            <p className="text-muted-foreground">SKU: {item.sku}</p>
                                        </div>
                                        <Badge variant="destructive" className="font-mono">
                                            {item.remaining} left
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}

                    {/* Top Selling Products */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-base font-semibold">Top Products</CardTitle>
                            <Button variant="ghost" size="sm" asChild className="text-xs h-7 px-2">
                                <a href="/admin/products">View All</a>
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-2">
                            {topProducts.map((product) => (
                                <div key={product.name} className="flex items-center justify-between text-sm">
                                    <div className="space-y-0.5 max-w-37.5 sm:max-w-45">
                                        <p className="font-medium leading-none truncate">{product.name}</p>
                                        <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-sm">{product.revenue}</p>
                                        <p className="text-[11px] text-muted-foreground">{product.stock} in stock</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}