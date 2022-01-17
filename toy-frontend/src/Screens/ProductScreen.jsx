import React from 'react'
import products from '../data/products'
import {Row, Col, Container} from 'react-bootstrap'
import Product from '../Components/Product'

function ProductScreen() {
    return (
        <div>
            <Container>
            <h1 className="py-3 text-center">Products</h1>

            <Row>
                {products.map(product => ( 
                    <Col sm={12} md={6} lg={4}>
                        <Product product={product}/>
                    </Col>)) 
                }   
            </Row>
            </Container>

            
           
        </div>
    )
}

export default ProductScreen
