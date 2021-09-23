import React from 'react'
import { Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './restaurant.css'

export default function Restaurants({ data }) {
    // console.log(data);
    return (
        <Link to={`restaurantDetails/${data.id}`}>
            <Card className="my-3 p-3 hotels">
                <Card.Img variant="top" src={data.photograph} className="p-3 image" variant="top" />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        Cuisine:{data.cuisine_type}
                    </Card.Text>
                    <Card.Text>
                        Place:{data.neighborhood}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>

    )
}
