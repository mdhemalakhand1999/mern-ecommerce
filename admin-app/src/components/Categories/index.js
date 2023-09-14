import React from 'react'
import { Layout } from '../layout'
import { Col, Container, Row } from 'react-bootstrap'

/**
* @author
* @function Category
**/

export const Category = (props) => {
  return(
    <Layout sidebar>
        <Container>
            <Row>
                <Col md={12}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3>Category</h3>
                        <button>Add</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
   )

 }