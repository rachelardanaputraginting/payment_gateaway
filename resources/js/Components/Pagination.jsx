import { Link } from '@inertiajs/react'
import clsx from 'clsx'
import React from 'react'

export default function Pagination({ meta, links }) {
    return (
        <div className='flex items-center justify-center gap-2 mt-10'>
            {meta.links.map((link, i) => (
                <Link className={clsx(link.active && 'text-blue-500', 'text-black')}
                    // preserveScroll
                    key={i} href={link.url}>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}
