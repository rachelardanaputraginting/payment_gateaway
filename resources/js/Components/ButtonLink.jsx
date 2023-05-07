import { Link } from '@inertiajs/react';
import React from 'react';

export default function ButtonLink({ type = 'submit', className = '', href, children, ...props }) {
    return (
        <Link
            {...props}
            type={type}
            href={href}
            className={
                `inline-flex items-center text-center justify-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ` + className
            }

        >
            {children}
        </Link>
    );
}
