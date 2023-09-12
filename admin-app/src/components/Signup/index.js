import React from 'react'
import { Layout } from '../../layout'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Input } from '../UI/Input';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  const auth = useSelector(state => state.auth);
  if(auth.authenticate) {
    return <Navigate to="/" replace />;
  }
  return(
    <Layout>
          <Container>
            <Row>
              <Col md={{span: 6, offset: 3}}>
                <Form>
                  <Row>
                    <Col md={6}>
                        <Input
                        label="First Name"
                        value=""
                        placeholder="First Name"
                        type="text"
                        onChange={() => {}}
                        />
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Last Name"
                        value=""
                        placeholder="Last Name"
                        type="text"
                        onChange={() => {}}
                        />
                    </Col>
                  </Row>
                  <Input
                    label="Email Address"
                    value=""
                    placeholder="Email Address"
                    type="email"
                    onChange={() => {}}
                    />

                  <Input
                    label="Password"
                    value=""
                    placeholder="Password"
                    type="password"
                    onChange={() => {}}
                  />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Layout>
   )

 }