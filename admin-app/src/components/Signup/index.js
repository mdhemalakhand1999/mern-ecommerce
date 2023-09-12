import React, { useState } from 'react'
import { Layout } from '../../layout'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Input } from '../UI/Input';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';

/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  const auth = useSelector(state => state.auth);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  if(auth.authenticate) {
    return <Navigate to="/" replace />;
  }
  const userSignUp = (e) => {
    e.preventDefault();
    const user = {firstname, lastname, username , email, password}
    dispatch(signup(user));
  }
  return(
    <Layout>
          <Container>
            <Row>
              <Col md={{span: 6, offset: 3}}>
                <Form onSubmit={userSignUp}>
                  <Row>
                    <Col md={6}>
                        <Input
                        label="First Name"
                        name="firstname"
                        value={firstname}
                        placeholder="First Name"
                        type="text"
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Last Name"
                        name="lastname"
                        value={lastname}
                        placeholder="Last Name"
                        type="text"
                        onChange={(e) => setLastname(e.target.value)}
                        />
                    </Col>
                    <Col md={12}>
                      <Input
                        label="User Name"
                        name="username"
                        value={username}
                        placeholder="Username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </Col>
                  </Row>
                  <Input
                    label="Email Address"
                      name="email"
                      value={email}
                    placeholder="Email Address"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />

                  <Input
                    label="Password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
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