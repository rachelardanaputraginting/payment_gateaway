import React from 'react'
import { Link } from '@inertiajs/react'
import { numberFormat } from '@/Libs/helper'

export default function ProductItem({ product }) {
    return (
        <div>
            <Link href={`/products/${product.slug}`}>
                <img className='w-full rounded-lg' src={product.picture} alt="" />
            </Link>
            <div className="mt-4">
                <Link className='text-sm block-mb-2 line-clamp-1' href={`/products/${product.slug}`}>{product.name}</Link>
                <div className="flex items-center justify-between">
                    <Link href={`/products?category=${product.category.name}`}>{product.category.name}</Link>
                    <div>Rp. {numberFormat(product.price)}</div>
                </div>
            </div>
        </div>
    )
}
