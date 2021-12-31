import React from "react";
import { Row } from "react-bootstrap";
import json from '../examples/products.json';
import { Product } from './Product';

export const ListProducts = () => {

    const products = json.products;

    // const recorrer = (array) => {
    //     let lista = [];
    //     for (let i = 0; products.length > i; i++) {
    //         const elemento = <div key={i}>{array[i].title}</div>
    //         lista.push(elemento);
    //     }
    //     return lista;
    // }
    return (
        <Row>
            {products.map((product, index) => (
                <Product key={index} item={product} />
            ))}
        </Row>
    );
};