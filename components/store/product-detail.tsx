"use client"

import React, { useState } from "react"
import { Star } from "lucide-react"

interface Product {
  id: number
  name: string
  description?: string
  price: number
  originalPrice?: number
  category?: string
  type?: string
  rating?: number
  reviews?: number
  image?: string
  instructor?: string
  duration?: string
  students?: number
  bestseller?: boolean
  bnplAvailable?: boolean
  author?: string
  brand?: string
  pages?: number
  publisher?: string
  specs?: string
  warranty?: string
  inStock?: boolean
  narrator?: string
  episodes?: number
  includes?: string
  value?: string
  format?: string
  jobGuarantee?: boolean
}

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(0)

  // For simplicity, variants can be derived or passed in product data; here we use a placeholder empty array
  // Removed variants usage as it is not defined in Product type
  // const variants = product.variants || []

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Left: Product Image */}
        <div className="flex-1">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full max-w-md object-contain rounded-lg border"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Title and Rating */}
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>
              <span className="text-sm font-semibold">{product.rating?.toFixed(1) || "N/A"}</span>
              <span className="text-sm text-gray-600">{product.reviews} Reviews</span>
              <span className="text-sm text-gray-600">| {product.students || 0}+ sold</span>
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-3xl font-extrabold text-red-600">${product.price.toFixed(2)}</p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
            )}
            <p className="text-xs text-gray-400">Tax excluded, add at checkout if applicable</p>
          </div>

          {/* Additional Info */}
          {product.category && (
            <div>
              <strong>Category:</strong> {product.category}
            </div>
          )}
           {product.description&& (
            <div>
              <strong>Description:</strong> {product.description}
            </div>
          )}
          {product.instructor && (
            <div>
              <strong>Instructor:</strong> {product.instructor}
            </div>
          )}
          {product.author && (
            <div>
              <strong>Author:</strong> {product.author}
            </div>
          )}
          {product.duration && (
            <div>
              <strong>Duration:</strong> {product.duration}
            </div>
          )}
          {product.brand && (
            <div>
              <strong>Brand:</strong> {product.brand}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-red-600 text-white py-3 px-6 rounded font-semibold hover:bg-red-700 transition">
              Buy now
            </button>
            <button className="border border-gray-700 py-3 px-6 rounded font-semibold hover:bg-gray-100 transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
