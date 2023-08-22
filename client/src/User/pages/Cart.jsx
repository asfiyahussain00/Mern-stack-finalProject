//import React, { useContext } from 'react';
//import { CartContext } from '../CardContext/context';

//export default function Cart() {
 // const { cart } = useContext(CartContext); 

  //return (
  //  <div className="container">
   //   <div className='text-center my-5'>
    //    <h2>Cart</h2>
     //   <small className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor laudantium ipsa nobis quod molestiae, quo minima exercitationem fugiat consequatur tempora optio, ullam expedita hic debitis soluta quaerat illo saepe! Sunt?</small>
     ///   <div className='p-5 rounded bg-dark'>
      //    {cart.map((product, key) => (
       //     <div className='card mb-3 w-100' key={key}>
         //     <div className='row g-0'>
          //      <div className='col-md-2 d-flex justify-content-center align-items-center'>
           //       <img src={product.thumbnail} style={{ height: '10vh', objectFit: 'contain' }} className='img-fluid rounded' alt={product.ProductName} />
            //    </div>
              //  <div className='col-md-8'>
              //    <div className='card-body'>
                //    <h5 className='card-title'>{product.ProductName} - {product.price} :{product.priceUnit}</h5>
                //    <p className='text'>{product.description}</p>
                 //   <p className='card-text'>
                   //   <small>Quantity: {product.quantity}</small>
                   // </p>
                 // </div>
               // </div>
               // <div className='col-md-2'>
               //   <h5>{product.quantity * product.price}</h5>
            //    </div>
           //   </div>
           // </div>
         // ))}
          //<div className="border border-primary border-3 bg-light px py-3 rounded d-flex justify-content-around align-items">
         //   <h6>Total</h6>
           // <div>
           //   {cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)}
           // </div>
         // </div>
      //  </div>
      //</div>
   // </div>
 // );
//}
