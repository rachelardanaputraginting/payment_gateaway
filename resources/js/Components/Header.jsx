import React from 'react'
import Container from './Container'

export default function Header({ title, description }) {
    return (
        <div className='py-16 bg-white border-b shadow-sm -mt-12 mb-12'>
            <Container>
                <div className='font-semibold text-3xl mb-4'>{title}</div>
                <div className='text-lg leading-relaxed text-gray-500'>{description}</div>
            </Container>
        </div>
    )
}
