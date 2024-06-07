import React, { useState } from 'react';
import './CategoryProduct.css';
import im2 from '../../assets/d024d2d5c2287617451a94755553dee5.jpg';
import img3 from '../../assets/360_F_145461027_UESAGvh8W9V8tKkvCwxgrR9Ij1072QqN.jpg'
import img4 from '../../assets/360_F_266683754_wzx9XxeNXKudct2Q3qwQf1PvVaQaKOf6.jpg'
import img5 from '../../assets/360_F_537046123_s8JVn2NrClPQDOryhSm8jonYZPfIzPRX.jpg'
import img6 from '../../assets/360_F_544386266_HJM7ulyaw3PAFnPd5J97nQnzJaop2Rmf.jpg'
import img1 from '../../assets/6cdefec988adaa354884c8d03f3ac28c.png'

const CategoryProduct = () => {
    const products = [
        { id: 1, name: 'Product 1', description: 'Description 1', price: '$10', image: im2 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: '$20', image: img1 },
        { id: 3, name: 'Product 3', description: 'Description 3', price: '$30', image: img3 },
        { id: 4, name: 'Product 4', description: 'Description 4', price: '$40', image: img4 },
        { id: 5, name: 'Product 5', description: 'Description 5', price: '$50', image: img5 },
        { id: 6, name: 'Product 6', description: 'Description 6', price: '$60', image: img6 },
        { id: 7, name: 'Product 7', description: 'Description 7', price: '$70', image: img1 },
        { id: 8, name: 'Product 8', description: 'Description 8', price: '$80', image: im2},
        { id: 9, name: 'Product 9', description: 'Description 9', price: '$90', image: img3 },
        { id: 10, name: 'Product 10', description: 'Description 10', price: '$100', image: img4 },
        { id: 11, name: 'Product 11', description: 'Description 11', price: '$110', image: img5},
        { id: 12, name: 'Product 12', description: 'Description 12', price: '$120', image: img6 }
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setQuantity(1);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>{selectedProduct.name}</h2>
                        <p>{selectedProduct.description}</p>
                        <p>{selectedProduct.price}</p>
                        <div className="quantity-controls">
                            <button onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryProduct;
