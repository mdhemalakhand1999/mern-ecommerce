import React, { useEffect, useState } from 'react'
import { Layout } from '../layout'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategory } from '../../actions/category.action'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Input } from '../UI/Input'
/**
* @author
* @function Category
**/

export const Category = (props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryID, setParentCategoryID] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const handleClose = () => {
        const form = new FormData();
        form.append('name', categoryName);
        form.append('parentID', parentCategoryID);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        setShow(false);
    };

    const dispatch = useDispatch();
    const category = useSelector(state => state.category)
    useEffect(() => {
        console.log('category.js');
        dispatch(getAllCategory())
    }, [])
    const renderCategories = (categories) => {
        let catArr = [];
        if(categories.length > 0) {
            for(let cat of categories) {
                catArr.push(
                    <li key={cat._id}>
                        {cat.name}
                        {cat.children && (<ul>{renderCategories(cat.children)}</ul>)}
                    </li>
                )
            }
        }
        return catArr
    }
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
    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
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
            <Row>
                <Col md={12}>
                    <ul>
                        {renderCategories(category.categories)}
                    </ul>
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
                value={categoryName}
                placeholder={`Category Name: `}
                onChange={(e) => {setCategoryName(e.target.value)}}
                />
                <select
                value={parentCategoryID}
                onChange={(e) => setParentCategoryID(e.target.value)} className='form-control'>
                    <option>Select category</option>
                    {
                        createCategoryList(category.categories).map(option => 
                            <option key={option.value} value={option.value}>{option.name}</option>    
                        )
                    }
                </select>
                <input type='file' name='categoryImage' onChange={handleCategoryImage} />
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

