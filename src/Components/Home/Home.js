import React, { useEffect, useState } from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import data from '../../FakeData/FakeData';
import Events from '../Events/Events';

const Home = () => {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/eventlist')
        .then(res => res.json())
        .then(data => setEventList(data))
    },[])
    return (
        <div>
            <Container>
                <Row>
                    {
                        eventList.map(event => <Events event={event}></Events>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;