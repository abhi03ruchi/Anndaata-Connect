import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Feature.css';
import connect from '../assets/connect.png';
import coordinate from '../assets/coordinate.png';
import empower from '../assets/emp.png';
import Make from '../assets/make.jpg';

const products = [
    {
        id: 1,
        name: 'Connect',
        href: '#',
        para: 'restaurants, event hosts, and individuals with surplus food to our platform.',
        imageSrc: connect,
        color: '#FFE5D9'
    },
    {
        id: 2,
        name: 'Coordinate',
        href: '#',
        para: 'seamlessly with partnered NGOs specializing in hunger relief.',
        imageSrc: coordinate,
        color: '#FFCAD4'
    },
    {
        id: 3,
        name: 'Empower',
        href: '#',
        para: 'individuals & restaurants to contribute to the community, transforming celebrations into opportunities for social impact.',
        imageSrc: empower,
        color: '#F4ACB7'
    },
    {
        id: 4,
        name: 'Make a Difference',
        href: '#',
        para: 'At the core of our mission is the commitment to making a tangible difference in the fight against food wastage and hunger.',
        imageSrc: Make,
        color: '#FF8FA3'
    }
];

const FeatureCard = ({ product, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };

        card.addEventListener("mousemove", handleMouseMove);
        return () => card.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            ref={cardRef}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                "--card-color": product.color
            }}
        >
            <div className="card-content">
                <motion.div 
                    className="image-container"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="feature-image"
                    />
                </motion.div>
                <h3 className="feature-title">{product.name}</h3>
                <p className="feature-para">{product.para}</p>
            </div>
        </motion.div>
    );
};

export default function Feature() {
    return (
        <div className="feature-container">
            <motion.h1 
                className="feature-heading"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                What Do We Do?
            </motion.h1>
            <div className="feature-grid">
                {products.map((product, index) => (
                    <FeatureCard key={product.id} product={product} index={index} />
                ))}
            </div>
        </div>
    );
}