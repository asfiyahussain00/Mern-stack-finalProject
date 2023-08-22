import React, { useContext } from 'react'
import './custom.css'
import { CartContext } from '../../CardContext/context'
import { GlobalContext } from '../../../Context/Context'
import { decodeToken } from 'react-jwt'


export default function CustomCart() {

   const { cart_state, cart_dispatch } = useContext(CartContext)
    const { state, dispatch } = useContext(GlobalContext)
    const currentUser = decodeToken(state.token)

    const placeOrder = () => {
       const payload = {
            customerName: currentUser.username,
           customerId: currentUser.id,
            customerEmail: currentUser.email,
           customerAddress: "Hello Street#123",
            customerContact: "+923040257471",
           order: cart_state.cart
       }
  }}

      