
import React from 'react'
import connect from '../assets/connect.png';
import coordinate from '../assets/coordinate.png';
import empower from '../assets/emp.png';
const products = [
    {
        id: 1,
        name: 'Connect',
        href: '#',
        para: 'restaurants, event hosts, and individuals with surplus food to our platform.',
        imageSrc:  connect ,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Coordinate',
        href: '#',
        para: ' seamlessly with partnered NGOs specializing in hunger relief. ',
        imageSrc: coordinate,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Empower',
        href: '#',
        para: 'individuals & restaurants to contribute to the community, transforming celebrations into opportunities for social impact.',
        imageSrc: empower,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Make a Difference',
        href: '#',
        para: 'At the core of our mission is the commitment to making a tangible difference in the fight against food wastage and hunger.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function Feature() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className='text-4xl  font-bold text-gray-900 md:text-5xl'
                    style={{ fontFamily: 'Inder, sans-serif', textAlign: 'center', marginBottom: '45px' }}>
                    What Do We Do?
                </h1>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group flex flex-col items-center">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="object-cover  group-hover:opacity-75 rounded-full"
                                    style={{ height: '100px' , width: '100px'}}
                                /> 
                            <h3 className="mt-4 text-2xl text-[#e26959] text-center"
                             style={{ fontFamily: 'Poppins, sans-serif' , borderBottom: '2px solid #e26959' }}
                            >{product.name}</h3>
                            <p className="mt-1 text-sm font-medium text-gray-900 text-center">{product.para}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
