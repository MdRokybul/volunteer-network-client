import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, CardDeck, Col } from 'react-bootstrap';
import { UserContext } from '../../App';

const IndividualEventList = (props) => {
    const { _id, title, description } = props.individualVolunteer;

    const deleteVolunteer = (id) => {
        fetch('https://damp-beyond-64004.herokuapp.com/deleteVolunteer/'+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    //testing function
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [singleVolunteer, setSingleVolunteer] = useState([])

    useEffect(() => {
        fetch('https://damp-beyond-64004.herokuapp.com/volunteer?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setSingleVolunteer(data))
    }, [])
    return (
        <Col className="col-md-6">
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title> {title} </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => deleteVolunteer(_id)}>Cancel</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Col>
    );
};

export default IndividualEventList;