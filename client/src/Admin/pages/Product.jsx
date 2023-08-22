import React, { useEffect, useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import ProductModal from '../Components/ProductModal';

import axios from 'axios';

export default function Products() {
    const [product, setproduct] = useState([]);

   

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Products</span>
                <ProductModal recallData={setproduct} /> 
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col"> Name</th>
                            <th scope="col">product</th>
                            <th scope="col">Brands</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                     {product?.map((val, key) => (
                            <tr key={key}>
                                <th scope="row">{val._id}</th>
                                <td>{val.productName}</td>
                                <td>
                                    <img
                                        src={val.productImage}
                                        className='img-fluid'
                                        style={{ height: '5vh', objectFit: 'contain' }}
                                        alt=""
                                    />
                                </td>
                                <td>
                                    <button className="btn btn-dark mx-1"><BsFillPencilFill /></button>
                                    <button className="btn btn-dark mx-1" onClick={() => deleteProduct(val.productName)}><AiFillDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
