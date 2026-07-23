"use client"

import React, { useState } from "react"
import {
    Trash2,
    Plus,
    Minus,
    ShoppingBag,
    Truck,
    Phone,
    MapPin,
    User,
    CheckCircle2,
    ArrowLeft,
    ShieldCheck,
    CreditCard,
    Banknote
} from "lucide-react"

// UI Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Types
export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
    variant?: string
}

export interface GuestCheckoutFormData {
    fullName: string
    phone: string
    streetAddress: string
    city: string
    postalCode: string
    paymentMethod: "cod" | "card"
    notes?: string
}

// Initial Mock Cart Data
const initialCart: CartItem[] = [
    {
        id: "prod-1",
        name: "Minimalist Wireless Headphones",
        price: 129.99,
        quantity: 1,
        variant: "Matte Black",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80",
    },
    {
        id: "prod-2",
        name: "Ergonomic Desk Mat",
        price: 34.50,
        quantity: 2,
        variant: "XL / Slate Grey",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&auto=format&fit=crop&q=80",
    }
]

export default function GuestCheckoutPage() {
    const [cart, setCart] = useState<CartItem[]>(initialCart)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [completedOrder, setCompletedOrder] = useState<any>(null)

    // Guest Form State
    const [formData, setFormData] = useState<GuestCheckoutFormData>({
        fullName: "",
        phone: "",
        streetAddress: "",
        city: "",
        postalCode: "",
        paymentMethod: "cod",
        notes: ""
    })

    // Quantity Handlers
    const updateQuantity = (id: string, delta: number) => {
        setCart(prev =>
            prev
                .map(item => {
                    if (item.id === id) {
                        const newQty = item.quantity + delta
                        return newQty > 0 ? { ...item, quantity: newQty } : item
                    }
                    return item
                })
        )
    }

    const removeItem = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    // Calculation
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingFee = subtotal > 0 ? (subtotal > 150 ? 0 : 12.00) : 0
    const grandTotal = subtotal + shippingFee

    // Handle Input Changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Handle Form Submission
    const handleSubmitOrder = (e: React.FormEvent) => {
        e.preventDefault()

        if (cart.length === 0) return

        // Construct Payload for your Backend API
        const orderPayload = {
            orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
            customer: {
                fullName: formData.fullName,
                phone: formData.phone,
                address: `${formData.streetAddress}, ${formData.city} ${formData.postalCode}`,
                isGuest: true
            },
            items: cart,
            paymentMethod: formData.paymentMethod,
            subtotal,
            shippingFee,
            totalAmount: grandTotal,
            createdAt: new Date().toISOString()
        }

        console.log("Submitting Guest Order:", orderPayload)

        // Save to state to display confirmation screen
        setCompletedOrder(orderPayload)
        setIsSubmitted(true)
        setCart([])
    }

    // Order Confirmation Success View
    if (isSubmitted && completedOrder) {
        return (
            <div className="max-w-2xl mx-auto py-12 px-4 text-center space-y-6">
                <div className="flex justify-center">
                    <CheckCircle2 className="h-16 w-16 text-emerald-500 animate-bounce" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Order Placed Successfully!</h1>
                    <p className="text-muted-foreground">
                        Thank you, <span className="font-semibold text-foreground">{completedOrder.customer.fullName}</span>.
                        We will contact you at <span className="font-semibold text-foreground">{completedOrder.customer.phone}</span> when your order ships.
                    </p>
                </div>

                <Card className="text-left mt-6">
                    <CardHeader className="bg-muted/40 pb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-base">Order #{completedOrder.orderId}</CardTitle>
                                <CardDescription>Payment Method: {completedOrder.paymentMethod.toUpperCase()}</CardDescription>
                            </div>
                            <span className="text-lg font-bold">${completedOrder.totalAmount.toFixed(2)}</span>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-3">
                        <div>
                            <p className="text-xs font-semibold uppercase text-muted-foreground">Delivery Address</p>
                            <p className="text-sm mt-0.5">{completedOrder.customer.address}</p>
                        </div>
                        <Separator />
                        <div>
                            <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Items Ordered</p>
                            <div className="space-y-2">
                                {completedOrder.items.map((item: CartItem) => (
                                    <div key={item.id} className="flex justify-between text-sm">
                                        <span>{item.name} (x{item.quantity})</span>
                                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                    Back to Shop
                </Button>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="flex items-center gap-2 mb-8">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Guest Checkout</h1>
            </div>

            {cart.length === 0 ? (
                <Card className="text-center py-12">
                    <CardContent className="space-y-4">
                        <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto" />
                        <h2 className="text-xl font-semibold">Your cart is empty</h2>
                        <p className="text-sm text-muted-foreground">Add items to your cart to continue to checkout.</p>
                    </CardContent>
                </Card>
            ) : (
                <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT SIDE: Guest Address & Contact Info (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Contact Details Card */}
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <User className="h-5 w-5 text-primary" />
                                    1. Contact Information
                                </CardTitle>
                                <CardDescription>
                                    No account needed. We only need this to deliver your order.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name *</Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        placeholder="e.g. Jane Doe"
                                        required
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="flex items-center gap-1.5">
                                        <Phone className="h-3.5 w-3.5" /> Phone Number (Required for delivery updates) *
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Delivery Address Card */}
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    2. Shipping Address
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="streetAddress">Street Address *</Label>
                                    <Input
                                        id="streetAddress"
                                        name="streetAddress"
                                        placeholder="House/Apartment #, Street name"
                                        required
                                        value={formData.streetAddress}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City / Region *</Label>
                                        <Input
                                            id="city"
                                            name="city"
                                            placeholder="e.g. New York"
                                            required
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="postalCode">ZIP / Postal Code *</Label>
                                        <Input
                                            id="postalCode"
                                            name="postalCode"
                                            placeholder="10001"
                                            required
                                            value={formData.postalCode}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Payment Method Card */}
                        <Card>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <CreditCard className="h-5 w-5 text-primary" />
                                    3. Payment Method
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup
                                    defaultValue="cod"
                                    value={formData.paymentMethod}
                                    onValueChange={(value: "cod" | "card") => setFormData(prev => ({ ...prev, paymentMethod: value }))}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                >
                                    <div>
                                        <RadioGroupItem value="cod" id="cod" className="peer sr-only" />
                                        <Label
                                            htmlFor="cod"
                                            className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary has-data-[state=checked]:border-primary cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Banknote className="h-5 w-5 text-emerald-600" />
                                                <div>
                                                    <p className="font-semibold text-sm">Cash on Delivery</p>
                                                    <p className="text-xs text-muted-foreground">Pay when delivered</p>
                                                </div>
                                            </div>
                                        </Label>
                                    </div>

                                    <div>
                                        <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                        <Label
                                            htmlFor="card"
                                            className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary has-data-[state=checked]:border-primary cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <CreditCard className="h-5 w-5 text-blue-600" />
                                                <div>
                                                    <p className="font-semibold text-sm">Online / Card</p>
                                                    <p className="text-xs text-muted-foreground">Credit or Debit card</p>
                                                </div>
                                            </div>
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </CardContent>
                        </Card>

                    </div>

                    {/* RIGHT SIDE: Cart Summary & Order Submit (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">

                        <Card className="sticky top-6">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">Order Summary ({cart.reduce((a, b) => a + b.quantity, 0)} items)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">

                                {/* Cart Items List */}
                                <div className="divide-y max-h-80 overflow-y-auto pr-1">
                                    {cart.map((item) => (
                                        <div key={item.id} className="py-3 flex items-center gap-3 first:pt-0 last:pb-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-14 w-14 rounded-md object-cover border flex-shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium truncate">{item.name}</p>
                                                {item.variant && <p className="text-xs text-muted-foreground">{item.variant}</p>}
                                                <p className="text-xs font-semibold text-primary mt-0.5">${item.price.toFixed(2)}</p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-1.5 border rounded-md p-1">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </button>
                                                <span className="text-xs font-semibold w-5 text-center">{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </button>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                type="button"
                                                onClick={() => removeItem(item.id)}
                                                className="text-muted-foreground hover:text-destructive p-1"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <Separator />

                                {/* Price Calculation Breakdown */}
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground flex items-center gap-1">
                                            <Truck className="h-3.5 w-3.5" /> Shipping
                                        </span>
                                        <span>{shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
                                    </div>
                                    <Separator className="my-2" />
                                    <div className="flex justify-between text-base font-bold">
                                        <span>Total</span>
                                        <span className="text-primary">${grandTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                            </CardContent>

                            <CardFooter className="flex-col gap-3">
                                <Button type="submit" size="lg" className="w-full font-semibold gap-2">
                                    <ShieldCheck className="h-5 w-5" />
                                    Place Order (${grandTotal.toFixed(2)})
                                </Button>

                                <p className="text-[11px] text-center text-muted-foreground flex items-center justify-center gap-1">
                                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                                    No registration needed. Fast & secure checkout.
                                </p>
                            </CardFooter>
                        </Card>

                    </div>

                </form>
            )}

        </div>
    )
}