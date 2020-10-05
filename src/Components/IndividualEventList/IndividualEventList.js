import React, { useEffect } from 'react';
import { Button, Card, CardDeck, Col } from 'react-bootstrap';

const IndividualEventList = (props) => {
    const { _id, title, description } = props.individualVolunteer;

    const deleteVolunteer = (id) => {
        fetch('http://localhost:5000/deleteVolunteer/'+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <Col className="col-md-6">
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title> {title} </Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        <Button onClick={() => deleteVolunteer(_id)}>Cancel</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Col>
    );
};

export default IndividualEventList;