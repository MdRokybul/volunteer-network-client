import React, { useEffect, useState } from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import Events from '../Events/Events';

const Home = () => {
    const [eventList, setEventList] = useState([]);
    console.log(eventList)
    useEffect(() => {
        fetch('https://damp-beyond-64004.herokuapp.com/eventlist')
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