import React, { useContext, useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/Context'
import { decodeToken } from 'react-jwt'



export const AppRoute  = '/'

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      console.log('Decoded Token:', res); 
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  console.log('Current Token:', currentToken); 
  const CurrentUser = getUserRole(currentToken)
  return <CurrentUser />
}
