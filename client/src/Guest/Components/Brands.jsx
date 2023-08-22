import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GuestCard from './GuestCard';

export default function Brand() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('/api/getAllBrands')
            .then(response => {
                const allBrands = response.data.brands;
                setBrands(allBrands);
            })
            .catch(error => alert(error.message));
    }, []);

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {brands.map((val, key) => (
                    <GuestCard key={key} image={val.BrandImage} name={val.BrandName} />
                ))}
            </div>
        </div>
    );
}
