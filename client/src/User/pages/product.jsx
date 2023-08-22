import React, { useEffect, useState } from 'react';
import UserCard from '../Components/UserCard';
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/get-all-products')
            .then(json => {
                const productData = json.data.products;
                console.log('Fetched productData:', productData); 
                setProducts(productData); 
            })
            .catch(err => console.log(err));
    }, []);

    console.log('Current products state:', products);

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
            <div className="row my-5">
    {
        products.map((product, key) => (
            <UserCard
                key={key}
                image={product.thumbnail}
                name={product.ProductName} 
                price={product.price} 
                url={`/products/${product._id}`}
            />
        ))
    }
</div>

            </div>
        </div>
    );
}
