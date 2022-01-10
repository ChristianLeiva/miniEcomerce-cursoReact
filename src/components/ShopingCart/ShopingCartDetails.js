import React, {useState, useEffect} from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Row, Col, NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';
import db, {getAllProducts} from "../../db/db";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { ShoppingCartItemDetails } from "./ShoppingCartItemDetails";


export const ShopingCartDetails = () => {

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


    return (
        <>
            <div className="container">

                {   
                    productsList.map((product, i)=>(
                       <ShoppingCartItemDetails key={i} product={product}/>
                    ))
                }
                

                    <span>Total Price: ${parseFloat(''+totalPrice.toFixed(2))}</span>

            </div>
        </>
    )

}