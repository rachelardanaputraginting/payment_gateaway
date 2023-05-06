import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import App from '@/Layouts/App';
import { numberFormat } from '@/Libs/helper';
import Container from '@/Components/Container';
import { Inertia } from '@inertiajs/inertia';
import { toast } from 'react-hot-toast';
import Button from '@/Components/Button';
export default function Show({ product }) {
    // console.log(product.sl);
    const { post } = useForm()
    const addToCart = () => {
        post(route('cart.store', product), {
            onSuccess: () => toast.success('Added to cart'),
        });
    }
    return (
        <>
            <Head title={product.name} />
            <Container>
                <div className="flex gap-10">
                    <div className="w-1/3">
                        <img className='w-full' src={product.picture} alt="" />
                    </div>
                    <div className="w-2/3 min-h-full flex flex-col justify-between">
                        <div className="flex-1">
                            <Link className='text-xs font-semibold px-2 py-1 inline-flex bg-blue-500 text-white rounded' href={`/products?category=${product.category.slug}`}>{product.category.name}</Link>
                            <h1 className='text-3xl font-semibold'>{product.name}</h1>
                            <div className='leading-relaxed text-gray-500 my-4'>{product.description}</div>
                            <div className='font-semibold text-4xl'><sup>Rp</sup> {numberFormat(product.price)}</div>
                        </div>

                        <Button onClick={addToCart}>Add to cart</Button>
                    </div>
                </div>
            </Container>
        </>
    );
}

Show.layout = page => <App children={page} />
