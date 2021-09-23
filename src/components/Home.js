import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Restaurants from './Restaurants'
import Spinner from 'react-bootstrap/Spinner'
import { InputGroup, FormControl } from "react-bootstrap"
import './restaurant.css'

// import Loader from "react-loader-spinner";

export default function Home() {
    const [hotels, setHotels] = useState([])
    const [location, setLocation] = useState("")
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            await fetch("/restaurants.json")
                .then(res => {
                    res.json()
                        .then(data => {
                            setHotels(data.restaurants)
                            setLoading(true)
                        })

                })

        }
        fetchData()
    }, [])
    console.log(hotels);
    console.log(loading);

    return (
        <>

            <Row>
                {/* <input
                    className="mt-2"
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                /> */}
                <InputGroup className="mb-2">
                    <FormControl
                        className="mt-3"
                        placeholder="Find Location"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </InputGroup>
                {loading ?
                    (hotels.filter(item => {
                        if (location === "") {
                            return item
                        }
                        else if (item.neighborhood.toLowerCase().includes(location.toLowerCase())) {
                            return item
                        }
                    })
                        .map(item => (
                            <Col sm={12} ms={8} lg={6} xl={3}>
                                <Restaurants data={item} />
                            </Col>
                        ))) : <Spinner className="spin" animation="border" />

                }
            </Row>
        </>
    )
}
