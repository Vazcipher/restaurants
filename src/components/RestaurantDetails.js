import React, { useEffect, useState } from 'react'
import { ListGroup, Row, Col, Container, ListGroupItem } from 'react-bootstrap'
import Reviews from './Reviews'
import './restaurant.css'
import {Spinner} from 'react-bootstrap'

export default function RestaurantDetails({ match }) {

    const [restaurant, setRestaurant] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await fetch("/restaurants.json")
                .then(res => {
                    res.json()
                        .then(data => {
                            setRestaurant(data.restaurants)
                        })
                })
        }
        fetchData()
    }, [])
    var details = restaurant.find(i => i.id == match.params.id)
    console.log(details);
    //    console.log(restaurant)
    return (
        <div>
            {
                details ?
                    <Container>
                        <Row className="my-3">

                            <Col sm={12} ms={3} lg={3} xl={3}>
                                <img src={details.photograph} alt="" style={{ width: "100%" }} />
                            </Col>
                            <Col sm={12} ms={5} lg={5} xl={5}>
                                <ListGroup>

                                    <h1>{details.name}</h1>
                                    <h5>{details.neighborhood}</h5>
                                    <p>{details.address}</p>
                                    <p style={{fontWeight:"10px"}}>Cuisine: {details.cuisine_type}</p>

                                </ListGroup>
                            </Col>
                            <Col sm={12} ms={4} lg={4} xl={4}>
                                <ListGroup style={{borderRadius:"10px"}}>
                                    <ListGroup.Item style={{borderRightWidth:"20px"}}><h4 className="mt-3">OPERATING HOURS</h4> </ListGroup.Item>
                                    <ListGroupItem >
                                        <p>Tuesday:{details.operating_hours.Tuesday}</p>
                                        <p>Wednesday:{details.operating_hours.Wednesday}</p>
                                        <p>Thursday:{details.operating_hours.Thursday} </p>
                                        <p>Friday:{details.operating_hours.Friday}</p>
                                        <p>Saturday:{details.operating_hours.Saturday}</p>
                                        <p>Sunday:{details.operating_hours.Sunday}</p>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} ms={8} lg={8} xl={8}>
                                <h5>Customer reviews</h5>
                                {
                                    details.reviews.map(item => (
                                        <Reviews reviews={item} />
                                    ))
                                }
                            </Col>
                        </Row>
                    </Container>

                    : <Spinner className="spin" animation="border"/>
            }
        </div>
    )
}


