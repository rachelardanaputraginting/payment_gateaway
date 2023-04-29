import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import { Link } from '@inertiajs/react';


function Links({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    {...props}
                    className={clsx(active && 'bg-gray-100  text-black', 'w-full block text-left text-gray-600 py-1.5 px-3 text-sm')}
                    href={href}
                >
                    {children}
                </Link>
            )}
        </Menu.Item>
    )
}

function DropdownMenu({ label, children }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button className='flex items-center gap-x-2'>
                        {label}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx('w-5 h-5', open && 'transition duration-200 rotate-180')}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </Menu.Button>
                    <Menu.Items className="py-1 mt-2 bg-white rounded border overflow-hidden absolute w-64 top-full right-0">
                        {children}
                    </Menu.Items>
                </>
            )}

        </Menu >
    )
}

DropdownMenu.Links = Links
export default DropdownMenu;
