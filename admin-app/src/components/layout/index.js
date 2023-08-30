import React from 'react'
import { Header } from '../header'

/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return(
    <>
        <Header/>
        {props.children}
    </>
   )

 }