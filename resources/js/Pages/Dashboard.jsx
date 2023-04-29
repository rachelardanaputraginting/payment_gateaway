import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';
import Container from '@/Components/Container';

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
            <Container>Dashboard</Container>
        </>
    );
}

Dashboard.layout = page => <App children={page} />
