import React from 'react'
import { Layout } from '../../layout'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Input } from '../UI/Input';

/**
* @author
* @function Signin
**/

export const Signin = (props) => {
  return(
    <Layout>
      <Container>
        <Row>
          <Col md={{span: 6, offset: 3}}>
            <Form>
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