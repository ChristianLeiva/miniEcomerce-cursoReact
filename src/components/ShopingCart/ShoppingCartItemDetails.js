import React from 'react';
import { NavDropdown} from 'react-bootstrap';

export const ShoppingCartItemDetails = (props)=>{

    let product = props.product;

    return(
        <div className="card">
            <div className="card-body text-start">
                <div className="row">
                    <div className="col-2 text-center" > <img className="card-image" src={product.image} alt="" style={{height: "50px", marginRight: "10px"}} />  </div>
                    <div className="col-8">

                        {product.title} - {product.category} 
                    </div>
                    <div className="col-2">
                        <b>$ {product.price} </b>
                    </div>
                </div>
            </div>
    

        </div>
    )
}