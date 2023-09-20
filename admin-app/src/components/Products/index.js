import React, { useState } from 'react'
import { Layout } from '../layout'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Input } from '../UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions/product.action';

/**
* @author
* @function Products
**/

export const Products = (props) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [productPictures, setProductPictures] = useState('');
  const [show, setShow] = useState(false);
  const category = useSelector(state => state.category);
  const dispatch = useDispatch();
  const handleClose = () => {
      const form = new FormData();
      form.append('name', name);
      form.append('quantity', quantity);
      form.append('price', price);
      form.append('description', description);
      form.append('category', categoryID);
      for(let pic of productPictures) {
        form.append('productPicture', pic)
      }
      dispatch(addProduct(form));
      setShow(false);
  };
  const handleShow = () => {
      setShow(true);
  };
  const createCategoryList = (categories, options=[]) => {
    for(let category of categories) {
        options.push({
            value: category._id,
            name: category.name
        });
        if(category.children.length > 0) {
            createCategoryList(category.children, options);
        }
    }
    return options;
}
const handleProductPicture = (e) => {
  console.log(e);
  setProductPictures([
    ...productPictures,
    e.target.files[0]
  ])
  console.log(productPictures);
}
  return(
    <Layout sidebar>
      <Container>
            <Row>
                <Col md={12}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3>Category</h3>
                        <button onClick={handleShow}>Add</button>
                    </div>
                </Col>
            </Row>
        </Container>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Input
                label="Name"
                value={name}
                placeholder={`Product Name`}
                onChange={(e) => {setName(e.target.value)}}
                />
                <Input
                label="Quantity"
                value={quantity}
                placeholder={`Quantity`}
                onChange={(e) => {setQuantity(e.target.value)}}
                />
                <Input
                label="Price"
                value={price}
                placeholder={`Price`}
                onChange={(e) => {setPrice(e.target.value)}}
                />
                <Input
                label="Description"
                value={description}
                placeholder={`Description`}
                onChange={(e) => {setDescription(e.target.value)}}
                />
              <select
                value={categoryID}
                onChange={(e) => setCategoryID(e.target.value)} className='form-control'>
                  <option>Select category</option>
                  {
                      createCategoryList(category.categories).map(option => 
                          <option key={option.value} value={option.value}>{option.name}</option>    
                      )
                  }
              </select>
              {
                productPictures.length > 0 ? productPictures.map((pic, index) => <div key={index}>{pic.name}</div>): null
              }
              <input type="file" name="productPicture" onChange={handleProductPicture}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button onClick={handleClose} variant="primary">Save Changes</Button>
            </Modal.Footer>
        </Modal>
    </Layout>
   )

 }