import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import Container from '@/Components/Container';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';

export default function Navbar() {
    const { auth, categories_global, carts_global_count } = usePage().props
    return (
        <nav className='bg-white border-b py-2'>
            <Container>
                <div className="flex it ems-center justify-between">
                    <ApplicationLogo />
                    <div className="flex items-center gap-x-6">
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='/products'>Products</NavLink>
                        <DropdownMenu label={`Categories`}>
                            {categories_global.map(category => (
                                <DropdownMenu.Links key={category.slug} href={`/products?category=${category.slug}`}>{category.name}</DropdownMenu.Links>
                            ))}
                        </DropdownMenu>
                        {auth.user ? (<>
                            <DropdownMenu label={auth.user.name}>

                                <DropdownMenu.Links href='/profile'>{auth.user.name}</DropdownMenu.Links>
                                <DropdownMenu.Links href='/cart'></DropdownMenu.Links>
                                <DropdownMenu.Links href='/history'>Your history</DropdownMenu.Links>
                                <DropdownMenu.Links href='/logout' method="post">Logout</DropdownMenu.Links>
                            </DropdownMenu>
                            <NavLink className='flex items-center gap-x-2' href={`/carts`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                                </svg>

                                {carts_global_count > 0 ? carts_global_count : null}
                            </NavLink>

                        </>) : (<>
                            <NavLink href='/login'>Login</NavLink>
                            <NavLink href='/register'>Register</NavLink>

                        </>)}
                    </div>
                </div>
            </Container>
        </nav>
    )
}
