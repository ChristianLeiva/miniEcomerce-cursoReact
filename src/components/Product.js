import React from "react";
import { Col, Card, Row, Button, Badge } from "react-bootstrap";
import "../assets/css/styles.css";
import {Link } from 'react-router-dom';
import db from "../db/db";

export const Product = ({ item }) => {
    const {id,  title, image, price, description, category } = item;

    const addProductToCart = ({ title, price, category }) => {

        db.cart.add({
            title: title,
            price: price,
            category: category,
            image: image
        })
    }

    return (
        <div className="col-lg-4 d-flex align-items-stretch">
            <Card style={{ marginBottom: "15px", padding: 10 }}>
                <Row>
                    <Col xs={8}>
                        <Card.Img
                            className="mx-auto"
                            variant="top"
                            src={image}
                            style={{ height: 120, width: 120 }}
                        />
                    </Col>
                    <Col xs={4}>
                        <Badge pill bg="info">
                            {category}
                        </Badge>{" "}
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Row>
                    <Col>
                        <Button onClick={() => addProductToCart(item)} variant="warning">Agregar al carrito</Button>
                    </Col>
                    <Col>
                        <Link className="btn btn-secondary" to={"/product/"+id} >Detalles</Link>
                    </Col>
                    <Col>
                        <Button onClick={()=>{}} variant="primary">
                            Precio <Badge bg="secondary">${price}</Badge>
                        </Button>
                    </Col>
                </Row>
            </Card>
        </div>
        // () => saveLastInterestProduct(title)
    );
};
