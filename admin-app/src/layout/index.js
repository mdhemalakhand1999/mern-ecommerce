import React from 'react'
import { Header } from '../components/header'
import Container from 'react-bootstrap/esm/Container'

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