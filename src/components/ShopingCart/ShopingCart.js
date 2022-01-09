import React, {useState, useEffect} from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Row, Col, NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';
import db, {getAllProducts} from "../../db/db";
import { ShoppingCartItem } from "./ShoppingCartItem";


export const ShopingCart = () => {

    const [productsList, setProductsList ] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);



    const calculateTotalPrice =()=>{
        const total = productsList?.reduce((totalPrice, product)=>{
            return totalPrice + parseFloat(product.price);
        },0)

        setTotalPrice(total)
    }


    useLiveQuery(async () => {
        const productsDB = await db.cart.toArray()
        setProductsList(productsDB)
      },[])

    useEffect(() => {
        if(productsList.length > 0){
            calculateTotalPrice();
        }

    }, [productsList])

    const icono = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>




    return (
        <>
            <NavDropdown title={icono} id="collasible-nav-dropdown">

                {   
                    productsList.map((product, i)=>(
                       <ShoppingCartItem key={i} product={product}/>
                    ))
                }
                
                <NavDropdown.Divider />
                <NavDropdown.Item> Total Price: ${parseFloat(''+totalPrice.toFixed(2))} </NavDropdown.Item>
                

            </NavDropdown>
        </>
    )

}