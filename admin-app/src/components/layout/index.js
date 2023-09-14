import React from 'react'
import { Header } from '../header'
import { NavLink } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'

/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  console.log(props);
  return(
    <>
        <Header/>
        {
          props.sidebar ?
          <Container fluid>
            <Row>
              <Col md={2} className='sidebar'>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/orders">Orders</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category">Category</NavLink>
                  </li>
                </ul>
              </Col>
              <Col md={10} style={{marginLeft: 'auto' }}>
                {props.children}
              </Col>
            </Row>
          </Container>
          : props.children
        }
    </>
   )

 }