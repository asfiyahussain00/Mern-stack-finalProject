import React, { useEffect, useState } from 'react'
import UserCard from '../Components/UserCard'
import axios from 'axios'

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('/api/getallCategories').
        then(json => setCategory(json.data.category)).catch(err => alert(err.message))
    }, [])


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
        <UserCard  key={key} image={val.CategoryImage} name={val.CategoryName} />
    ))
}
            </div>
        </div>
    )
}