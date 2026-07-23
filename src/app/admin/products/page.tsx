"use client"

import React, { useState } from "react"
import {
    Plus,
    Search,
    Filter,
    Download,
    MoreHorizontal,
    Edit,
    Trash2,
    Copy,
    Eye,
    Package,
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    Upload,
    Image as ImageIcon,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Tag
} from "lucide-react"

// shadcn/ui components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Product Type Definition
export interface Product {
    id: string
    name: string
    sku: string
    category: string
    price: number
    compareAtPrice?: number
    stock: number
    status: "Active" | "Draft" | "Archived"
    image: string
    salesCount: number
}

// Mock Products Data
const initialProducts: Product[] = [
    {
        id: "PROD-101",
        name: "Ergonomic Desk Chair",
        sku: "CHR-ERG-01",
        category: "Furniture",
        price: 199.99,
        compareAtPrice: 249.99,
        stock: 18,
        status: "Active",
        image: "https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=150&auto=format&fit=crop&q=80",
        salesCount: 142,
    },
    {
        id: "PROD-102",
        name: "Wireless Mechanical Keyboard",
        sku: "KBD-WL-02",
        category: "Electronics",
        price: 89.00,
        stock: 34,
        status: "Active",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150&auto=format&fit=crop&q=80",
        salesCount: 98,
    },
    {
        id: "PROD-103",
        name: "UltraWide Monitor 34\"",
        sku: "MON-34-UW",
        category: "Electronics",
        price: 389.00,
        compareAtPrice: 429.00,
        stock: 5, // Low stock example
        status: "Active",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=150&auto=format&fit=crop&q=80",
        salesCount: 64,
    },
    {
        id: "PROD-104",
        name: "Minimalist Desk Mat",
        sku: "MAT-MIN-04",
        category: "Accessories",
        price: 25.00,
        stock: 82,
        status: "Active",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=150&auto=format&fit=crop&q=80",
        salesCount: 210,
    },
    {
        id: "PROD-105",
        name: "Vertical Ergonomic Mouse",
        sku: "MOU-VER-05",
        category: "Electronics",
        price: 55.00,
        stock: 0, // Out of stock example
        status: "Draft",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=150&auto=format&fit=crop&q=80",
        salesCount: 12,
    },
    {
        id: "PROD-106",
        name: "USB-C Multi-Port Hub",
        sku: "HUB-USBC-06",
        category: "Accessories",
        price: 45.00,
        stock: 2,
        status: "Active",
        image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=150&auto=format&fit=crop&q=80",
        salesCount: 88,
    },
]

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>(initialProducts)
    const [selectedTab, setSelectedTab] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedRows, setSelectedRows] = useState<string[]>([])

    // Sheet State (Add/Edit Product)
    const [isSheetOpen, setIsSheetOpen] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)

    // Filter Logic
    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.sku.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

        if (!matchesSearch || !matchesCategory) return false

        if (selectedTab === "active") return product.status === "Active"
        if (selectedTab === "draft") return product.status === "Draft"
        if (selectedTab === "low_stock") return product.stock > 0 && product.stock <= 5
        if (selectedTab === "out_of_stock") return product.stock === 0

        return true
    })

    // Bulk Selection Handlers
    const toggleSelectAll = () => {
        if (selectedRows.length === filteredProducts.length) {
            setSelectedRows([])
        } else {
            setSelectedRows(filteredProducts.map(p => p.id))
        }
    }

    const toggleSelectRow = (id: string) => {
        setSelectedRows(prev =>
            prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
        )
    }

    const handleOpenAddSheet = () => {
        setEditingProduct(null)
        setIsSheetOpen(true)
    }

    const handleOpenEditSheet = (product: Product) => {
        setEditingProduct(product)
        setIsSheetOpen(true)
    }

    // Inventory Stock Badge
    const getStockBadge = (stock: number) => {
        if (stock === 0) {
            return <Badge variant="destructive" className="gap-1"><XCircle className="h-3 w-3" /> Out of stock</Badge>
        }
        if (stock <= 5) {
            return <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400 border-none gap-1"><AlertTriangle className="h-3 w-3" /> {stock} left</Badge>
        }
        return <span className="text-sm font-medium text-muted-foreground">{stock} in stock</span>
    }

    // Status Badge
    const getStatusBadge = (status: Product["status"]) => {
        switch (status) {
            case "Active":
                return <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-none">Active</Badge>
            case "Draft":
                return <Badge variant="secondary">Draft</Badge>
            case "Archived":
                return <Badge variant="outline" className="text-muted-foreground">Archived</Badge>
        }
    }

    return (
        <div className="flex-1 space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Products</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage product catalog, inventory levels, and pricing strategy.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5">
                        <Download className="h-4 w-4" />
                        <span>Export</span>
                    </Button>
                    <Button size="sm" onClick={handleOpenAddSheet} className="gap-1.5">
                        <Plus className="h-4 w-4" />
                        <span>Add Product</span>
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
                                <TabsTrigger value="all">All Products ({products.length})</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="draft">Drafts</TabsTrigger>
                                <TabsTrigger value="low_stock">
                                    Low Stock ({products.filter(p => p.stock > 0 && p.stock <= 5).length})
                                </TabsTrigger>
                                <TabsTrigger value="out_of_stock">
                                    Out of Stock ({products.filter(p => p.stock === 0).length})
                                </TabsTrigger>
                            </TabsList>

                            {/* Bulk Actions Indicator */}
                            {selectedRows.length > 0 && (
                                <div className="flex items-center gap-2 bg-muted/60 px-3 py-1.5 rounded-md text-xs font-medium">
                                    <span>{selectedRows.length} selected</span>
                                    <Button variant="ghost" size="sm" className="h-7 text-xs">Set as Active</Button>
                                    <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive">Delete</Button>
                                </div>
                            )}
                        </div>
                    </Tabs>

                    {/* Search & Category Filter Bar */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                        <div className="relative w-full sm:flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search product name or SKU..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-8"
                            />
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="w-full sm:w-[160px]">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="Electronics">Electronics</SelectItem>
                                    <SelectItem value="Furniture">Furniture</SelectItem>
                                    <SelectItem value="Accessories">Accessories</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[40px] pl-4">
                                    <Checkbox
                                        checked={selectedRows.length === filteredProducts.length && filteredProducts.length > 0}
                                        onCheckedChange={toggleSelectAll}
                                    />
                                </TableHead>
                                <TableHead className="w-[80px]">Product</TableHead>
                                <TableHead>Details</TableHead>
                                <TableHead className="hidden md:table-cell">Category</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Inventory</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredProducts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="h-24 text-center text-muted-foreground">
                                        No products found matching your search.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredProducts.map((product) => (
                                    <TableRow
                                        key={product.id}
                                        className="hover:bg-muted/50"
                                    >
                                        <TableCell className="pl-4">
                                            <Checkbox
                                                checked={selectedRows.includes(product.id)}
                                                onCheckedChange={() => toggleSelectRow(product.id)}
                                            />
                                        </TableCell>

                                        {/* Thumbnail Image */}
                                        <TableCell>
                                            <div className="relative h-12 w-12 rounded-md border bg-muted overflow-hidden flex items-center justify-center">
                                                {product.image ? (
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <ImageIcon className="h-5 w-5 text-muted-foreground" />
                                                )}
                                            </div>
                                        </TableCell>

                                        {/* Name & SKU */}
                                        <TableCell>
                                            <div className="font-semibold text-sm hover:underline cursor-pointer" onClick={() => handleOpenEditSheet(product)}>
                                                {product.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground font-mono">{product.sku}</div>
                                        </TableCell>

                                        <TableCell className="hidden md:table-cell">
                                            <Badge variant="outline" className="font-normal text-xs">
                                                <Tag className="mr-1 h-3 w-3 text-muted-foreground" />
                                                {product.category}
                                            </Badge>
                                        </TableCell>

                                        <TableCell>{getStatusBadge(product.status)}</TableCell>

                                        <TableCell>{getStockBadge(product.stock)}</TableCell>

                                        <TableCell className="text-right font-medium">
                                            <div>${product.price.toFixed(2)}</div>
                                            {product.compareAtPrice && (
                                                <div className="text-xs text-muted-foreground line-through">
                                                    ${product.compareAtPrice.toFixed(2)}
                                                </div>
                                            )}
                                        </TableCell>

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
                                                    <DropdownMenuItem onClick={() => handleOpenEditSheet(product)} className="gap-2">
                                                        <Edit className="h-4 w-4" /> Edit Product
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="gap-2">
                                                        <Copy className="h-4 w-4" /> Duplicate
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="gap-2" asChild>
                                                        <a href={`/product/${product.id}`} target="_blank" rel="noopener noreferrer">
                                                            <Eye className="h-4 w-4" /> View in Store
                                                        </a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                                                        <Trash2 className="h-4 w-4" /> Delete
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
                            Showing <strong>1-{filteredProducts.length}</strong> of <strong>{filteredProducts.length}</strong> products
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

            {/* Add / Edit Product Slide-over Sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                    <SheetHeader className="pb-4 border-b">
                        <SheetTitle>{editingProduct ? "Edit Product" : "Add New Product"}</SheetTitle>
                        <SheetDescription>
                            {editingProduct ? "Update product details and inventory settings." : "Create a new item in your store inventory."}
                        </SheetDescription>
                    </SheetHeader>

                    <form className="space-y-6 py-4" onSubmit={(e) => { e.preventDefault(); setIsSheetOpen(false); }}>

                        {/* Title & SKU */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Title</Label>
                                <Input id="name" defaultValue={editingProduct?.name || ""} placeholder="e.g. Wireless Ergonomic Mouse" required />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="sku">SKU</Label>
                                    <Input id="sku" defaultValue={editingProduct?.sku || ""} placeholder="MOU-VER-01" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select defaultValue={editingProduct?.category || "Electronics"}>
                                        <SelectTrigger id="category">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Electronics">Electronics</SelectItem>
                                            <SelectItem value="Furniture">Furniture</SelectItem>
                                            <SelectItem value="Accessories">Accessories</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Pricing & Stock */}
                        <div className="space-y-4 pt-2 border-t">
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Pricing & Stock</h4>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="price">Price ($)</Label>
                                    <Input id="price" type="number" step="0.01" defaultValue={editingProduct?.price || ""} placeholder="99.99" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="compareAt">Compare At Price ($)</Label>
                                    <Input id="compareAt" type="number" step="0.01" defaultValue={editingProduct?.compareAtPrice || ""} placeholder="129.99" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="stock">Stock Quantity</Label>
                                    <Input id="stock" type="number" defaultValue={editingProduct?.stock ?? 10} placeholder="10" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="status">Status</Label>
                                    <Select defaultValue={editingProduct?.status || "Active"}>
                                        <SelectTrigger id="status">
                                            <SelectValue placeholder="Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Active">Active</SelectItem>
                                            <SelectItem value="Draft">Draft</SelectItem>
                                            <SelectItem value="Archived">Archived</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Product Image Upload Placeholder */}
                        <div className="space-y-2 pt-2 border-t">
                            <Label>Product Media</Label>
                            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                                <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                                <p className="text-xs font-medium text-foreground">Click to upload or drag & drop</p>
                                <p className="text-[11px] text-muted-foreground mt-1">PNG, JPG, or WEBP up to 5MB</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" rows={3} placeholder="Write a short product description..." />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-end gap-3 pt-4 border-t">
                            <Button type="button" variant="outline" onClick={() => setIsSheetOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">
                                {editingProduct ? "Save Changes" : "Create Product"}
                            </Button>
                        </div>

                    </form>
                </SheetContent>
            </Sheet>

        </div>
    )
}