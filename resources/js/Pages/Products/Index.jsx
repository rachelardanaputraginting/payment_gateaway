import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';
import Container from '@/Components/Container';
import ProductItem from '@/Components/ProductItem';
import Header from '@/Components/Header';
import Pagination from '@/Components/Pagination';

export default function Index(props) {
    const { data: products, meta, links } = props.products;
    return (
        <>
            <Head title="Our Products" />
            <Header title='Products' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias eveniet iure porro autem repellat adipisci aliquam itaque aspernatur placeat.' />
            <Container>
                {products.length ?
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        {
                            products.map(product => (
                                <ProductItem product={product} key={product.id}></ProductItem>
                            ))
                        }
                    </div>
                    : null}
                <Pagination meta={meta} links={links} />
            </Container>
        </>
    );
}

Index.layout = page => <App children={page} />
