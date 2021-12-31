import React from 'react';
import { NavDropdown} from 'react-bootstrap';

export const ShoppingCartItem = (props)=>{

    let product = props.product;

    return(
        <NavDropdown.Item href="#action/3.1"> 
            <img src={product.image} alt="" style={{height: "50px", marginRight: "10px"}} /> 
            {product.title} - {product.category} - ${product.price} 
        </NavDropdown.Item>
    )
}