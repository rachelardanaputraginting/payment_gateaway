import Container from '@/Components/Container'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Home() {
    return (
        <>
            <Head title='Home' />
            <Container>Home</Container>
        </>
    )
}

Home.layout = page => <App children={page} />
