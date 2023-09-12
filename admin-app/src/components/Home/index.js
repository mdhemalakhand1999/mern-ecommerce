import React from 'react';
import { Layout } from '../../layout';
import Container from 'react-bootstrap/esm/Container';
import { Col, Row } from 'react-bootstrap';
import './style.css';
/**
* @author
* @function Home
**/

export const Home = (props) => {
  return(
    <Layout style={{margin: "5rem"}} className="text-center">
      <Container fluid>
        <Row>
          <Col md={2} className='sidebar'>sidebar</Col>
          <Col md={10} style={{marginLeft: 'auto' }}>content</Col>
        </Row>
      </Container>
    </Layout>
   )
}