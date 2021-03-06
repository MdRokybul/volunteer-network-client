import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EventContext, MatchedItem, UserContext } from '../../App';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './VolunteerRegister.css';

const VolunteerRegister = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [event, setEvent] = useContext(EventContext);

    const [eventData, setEventData] = useState([]);

    const [eventTitle, setEventTitle] = useState([]);

    const [matchedItem, setMatchItem] = useContext(MatchedItem);
    console.log(matchedItem)

    const [startDate, setStartDate] = useState(new Date());

    const [volunteer, setVolunteer] = useState({
        fullName: '',
        email: '',
        description: '',
        title: '',
        date: startDate
    });
    console.log(volunteer)


    useEffect(() => {
        fetch('https://damp-beyond-64004.herokuapp.com/eventlist')
            .then(res => res.json())
            .then(data => setEventTitle(data))
    }, []);

    useEffect(() => {
        const amarData = eventTitle.find(edata => edata._id === event);
        setMatchItem(amarData);
    }, [eventTitle]);

    const handleBlur = (e) => {
        if (e.target.name === 'description') {
            const user = { ...loggedInUser };
            const newVolunteer = { ...volunteer };
            const title = matchedItem.title;
            newVolunteer.fullName = user.displayName;
            newVolunteer.email = user.email;
            newVolunteer.description = e.target.value;
            newVolunteer.title = title;
            setVolunteer(newVolunteer);
        }
    }

    const handleDateChange = (date) => {
        const newVolunteer = { ...volunteer }
        setStartDate(date)
        newVolunteer.date = startDate;
        setVolunteer(newVolunteer);
    }

    const handleSubmit = () => {
        const newVolunteer = { ...volunteer }
        fetch('https://damp-beyond-64004.herokuapp.com/addVolunteer', {
            method: 'POST',
            body: JSON.stringify(newVolunteer),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center">

                <Col className="col-md-6">
                    <div className="register-style">
                        <Form>
                            <h3>Register as a Volunteer</h3><br />
                            <Form.Group controlId="formBasicFullName">
                                <Form.Control type="text" placeholder="Enter full name" value={loggedInUser.displayName} name="fullName" disabled />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" value={loggedInUser.email} name="email" disabled />
                            </Form.Group>

                            <Form.Group controlId="formBasicDate">
                                <DatePicker className="date-style" selected={startDate} onChange={handleDateChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicDescription">
                                <Form.Control onChange={handleBlur} type="text" placeholder="Enter Description" name="description" />
                            </Form.Group>

                            <Form.Group controlId="formBasicTitle">
                                {/* value={eventData.title} */}
                                <Form.Control type="text" name="event" value={volunteer.title} disabled />

                            </Form.Group>
                            {
                                volunteer.description !== '' ? <Link to="/eventList">
                                    <Button variant="primary" className="register-btn-style" onClick={handleSubmit}>Registration</Button>
                                </Link> :
                                    <Link to="/eventList">
                                        <Button variant="primary" className="register-btn-style" disabled>Registration</Button>
                                    </Link>
                            }
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default VolunteerRegister;