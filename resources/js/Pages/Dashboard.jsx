import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
            Dashboard
        </>
    );
}

Dashboard.layout = page => <App children={page} />
