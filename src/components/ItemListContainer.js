import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = (prop) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prop.img} />
                <Card.Body>
                    <Card.Title>{prop.producto}</Card.Title>
                    <Card.Text>
                      {prop.descripcion}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ItemListContainer