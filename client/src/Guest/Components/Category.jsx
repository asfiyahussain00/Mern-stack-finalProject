import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GuestCard from './GuestCard';

export default function Category() {
    const [category, setCategory] = useState();

    useEffect(() => {
        axios.get('/api/getallcategories')
        .then(json => {
            console.log(json.data.category);
            setCategory(json.data.category);
        })
        .catch(err => alert(err.message))
    }, []);
    

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
              
            {
    category && category.length > 0 &&
    category.map((val, key) => (
        <GuestCard key={key} image={val.CategoryImage} name={val.CategoryName} />
    ))
}

                    
                
            </div>
        </div>
    );
}
