import React from 'react';
import { Head } from '@inertiajs/react';
import App from '@/Layouts/App';
import Container from '@/Components/Container';

export default function Show({ invoice }) {
    return (
        <>
            <Head title={`Your order-${invoice.order_id}`} />
            <Container>
                <div className="grid grid-cols-2 gap-10">
                    <div>

                        {invoice.qr_code ? <img className='border shadow-sm rounded-lg' src={invoice.qr_code} alt={invoice.qr_code} /> : null}
                        {invoice.bank ?
                            <div>
                                <div>
                                    <div className='text-blue-900 bg-gradient-to-r from-blue-200 p-2 rounded-lg via-gray-200 to-transparent'>
                                        <div>
                                            <strong className="font-semibold uppercase"> {invoice.bank.name} </strong> Virtual account number
                                        </div>
                                        <div>{invoice.bank.va_number}</div>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                    <div>
                        <div className="prose">

                            <h3>Instruction</h3>
                            <p>Please follow the instrcution below if you don't understand how to pay!</p>
                            <ol>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Beatae dolorem suscipit quisquam aliquam.</li>
                                <li>Rem, doloremque numquam. Odit, odio!</li>
                                <li>Quam consequatur illum ab mollitia!</li>
                                <li>Ab dolor fuga minus non.</li>
                                <li>Dicta, autem aliquid. Molestiae, hic.</li>
                                <li>Asperiores harum commodi vero quaerat.</li>
                                <li>Harum dicta corrupti eaque et.</li>
                                <li>Soluta nemo ducimus corrupti veritatis!</li>
                                <li>Atque tempore ipsa explicabo assumenda?</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    );
}

Show.layout = page => <App children={page} />
