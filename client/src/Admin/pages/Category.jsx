import React, { useEffect, useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import CategoryModal from '../Components/CategoryModel';
import axios from 'axios';



export default function Category() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('/api/getallCategories')
            .then((json) => setCategory(json.data.category))
            .catch((err) => console.log(err));
    }, []);

    const deleteProduct = (CategoryName) => {
     console.log(CategoryName)
     const payload = {
        CategoryName: CategoryName
    };

    const config = {
        method: 'delete',
        url: 'http://localhost:4000/api/deleteCategory',
        data: payload
    };

    axios(config)
        .then((response) => {
            console.log("Category deleted:", response.data);
            
            setCategory(response.data.category);
        })
        .catch((error) => {
            console.error('Error deleting category:', error);
        });
};
     

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Categories</span>
                <CategoryModal recallData={setCategory} />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Image</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category?.map((val, key) => (
                            <tr key={key}>
                                <th scope="row">{val._id}</th>
                                <td>{val.CategoryName}</td>
                               <td><img src={val.CategoryImage} className="img-fluid"style={{ height: '5vh', objectFit: 'contain' }}/></td>
                                <td><button className="btn btn-dark mx-1"><BsFillPencilFill /></button>
                                 <button className ="btn btn-dark mx-1"onClick={() => deleteProduct(val.CategoryName)}><AiFillDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
