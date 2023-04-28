import { usePage } from '@inertiajs/react'
import React from 'react'
import Container from '@/Components/Container';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';

export default function Navbar() {
    const { auth } = usePage().props
    return (
        <nav className='bg-white border-b py-2'>
            <Container>
                <div className="flex items-center justify-between">
                    <ApplicationLogo />
                    <div className="flex items-center gap-x-6">
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='/dashboard'>Dashboard</NavLink>
                        {auth.user ? <>
                            <NavLink href='/profile'>{auth.user.name}</NavLink>
                        </> : <>
                            <NavLink href='/login'>Login</NavLink>
                            <NavLink href='/register'>Register</NavLink>

                        </>}
                    </div>
                </div>
            </Container>
        </nav>
    )
}
