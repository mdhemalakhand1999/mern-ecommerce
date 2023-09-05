import React, { useState } from 'react'
import { Layout } from '../../layout'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Input } from '../UI/Input';
import { login } from '../../actions';
import { useDispatch } from 'react-redux'
/**
* @author
* @function Signin
**/

export const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(login(user));
  }
  return(
    <Layout>
      <Container>
        <Row>
          <Col md={{span: 6, offset: 3}}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email Address"
                placeholder="Email Address"
                type="email"
                onChange={(e) => {setEmail(e.target.value)}}
                />

              <Input
                label="Password"
                placeholder="Password"
                type="password"
                onChange={(e) => {setPassword(e.target.value)}}
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