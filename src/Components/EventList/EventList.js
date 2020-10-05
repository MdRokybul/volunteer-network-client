import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import IndividualEventList from '../IndividualEventList/IndividualEventList';

const EventList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [singleVolunteer, setSingleVolunteer] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/volunteer?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setSingleVolunteer(data))
    }, [])
    return (
        <Container>
            <Row>
                <h3>This is event list</h3>
            </Row>
            <Row>
                {
                    singleVolunteer.map(volunteer => <IndividualEventList individualVolunteer={volunteer}></IndividualEventList>)
                }
            </Row>
        </Container>
    );
};

export default EventList;