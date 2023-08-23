import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AppRoute } from '../../App';


function ProductModal() {
    const [show, setShow] = useState(false);
    const [brands, setBrands] = useState([]);
    const [category, setCategory] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        axios.get(`${AppRoute}/api/getAllBrands`)
            .then((json) => {
                setBrands(json.data.brands);
                console.log(json.data.brands); 
            })
            .catch((error) => {
                console.error("Error fetching brands:", error);
            });

        axios.get(` ${AppRoute}/api/getallCategories`)
            .then((json) => {
                setCategory(json.data.category);
                console.log(json.data.category); 
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });

        setShow(true);
    };


    const [productName, setproductName] = useState("")
    const [productImage, setproductImage] = useState(null)






    const Addproduct = (e) => {
        e.preventDefault();
        console.log("working")
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add product
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add product</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={Addproduct}>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">
                                product Name
                            </label>
                            <input
                                value={productName}
                                onChange={(e) => setproductName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="productName"
                                aria-describedby="emailHelp"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                product Image
                            </label>
                            <input className="form-control" onChange={(e) => setproductImage(e.target.files[0])} type="file" id="formFile" />
                        </div>


                        <Form.Select aria-label="Please select a Brand">
              <option disabled>Please select a Brand</option>
              {brands.map((val, key) => (
              <option key={key} value={val.BrandName}>
            {val.BrandName}
        </option>
    ))}
</Form.Select>




<Form.Select aria-label="Please select a Brand">
    <option disabled>Please select a Category</option>
    {category.map((val, key) => (
        <option key={key} value={val.CategoryName}>
            {val.CategoryName}
        </option>
    ))}
</Form.Select>




                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>


                </Modal.Body>

            </Modal>
        </>
    );
}

export default ProductModal;
