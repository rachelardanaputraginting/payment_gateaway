import { usePage } from '@inertiajs/react'
import React from 'react'
import Container from '@/Components/Container';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';

export default function Navbar() {
    const { auth } = usePage().props
    return (
        <nav className='bg-white border-b py-2'>
            <Container>
                <div className="flex items-center justify-between">
                    <ApplicationLogo />
                    <div className="flex items-center gap-x-6">
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='/products'>Products</NavLink>
                        {auth.user ? (<>
                            <DropdownMenu label={auth.user.name}>
                                <DropdownMenu.Links href='/dashboard'>Dashboard</DropdownMenu.Links>
                                <DropdownMenu.Links href='/profile'>{auth.user.name}</DropdownMenu.Links>
                                <DropdownMenu.Links href='/cart'>Your cart</DropdownMenu.Links>
                                <DropdownMenu.Links href='/history'>Your history</DropdownMenu.Links>
                                <DropdownMenu.Links href='/logout' method="post">Logout</DropdownMenu.Links>
                            </DropdownMenu>
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
