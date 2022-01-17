import React from 'react'
import {Container} from 'react-bootstrap'

function Product({product}) {
    return (
        <Container className="m-2">
            <h3>{product.name}</h3>
            <img className="w-100" src={product.image} alt={product.name} />
            <h4>£{product.price}</h4>
            <p>{product.description}</p>
        </Container>
    )
}

export default Product











