import React, { useContext, useState } from 'react';
import { Card, CardDeck, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EventContext } from '../../App';

const Events = (props) => {
    // const { id, title } = props.singleData;
    const {_id, title, description, date} = props.event;
    const [event, setEvent] = useContext(EventContext)

    const handleEventClick = (id) => {
        setEvent(id);
    }
    
    return (
        <Col className="col-md-3">
            <CardDeck>
                
                    <Card style={{marginBottom: '30px'}} onClick={() => handleEventClick(_id)}>
                    <Link to="/volunteerRegistration">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title> {title} </Card.Title>
                            <Card.Text>
                                {description}
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"> {(new Date(date).toDateString())} </small>
                        </Card.Footer>
                        </Link>
                    </Card>
                
            </CardDeck>
        </Col>
    );
};

export default Events;