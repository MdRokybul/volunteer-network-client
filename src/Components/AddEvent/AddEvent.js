import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddEvent = () => {
    const [event, setEvent] = useState({
        title: '',
        date: '',
        description: ''
    })
    console.log(event)
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        const newEvent = { ...event }
        setStartDate(date)
        newEvent.date = startDate;
        setEvent(newEvent);
    }

    const handleBlur = (e) => {
        if (e.target.name === 'title') {
            const newEvent = { ...event }
            newEvent.title = e.target.value;
            setEvent(newEvent);
        }
        if (e.target.name === 'description') {
            const newEvent = { ...event }
            newEvent.description = e.target.value;
            setEvent(newEvent);
        }
    }

    const handleAddEvent = () => {
        const newEvent = { ...event };
        fetch('https://damp-beyond-64004.herokuapp.com/addEvent', {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        newEvent.title = "";
        setEvent(newEvent);
    }
    return (
        <Container>
            <Form>
                <h3>Add Event</h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control onBlur={handleBlur} type="text" placeholder="Enter Title" name="title" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Event Date</Form.Label><br />
                        <DatePicker selected={startDate} onChange={handleDateChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" onBlur={handleBlur} placeholder="Enter Description" name="description" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" disabled />
                    </Form.Group>
                </Form.Row>
                <div className="text-right">
                    {/* <a href="/admin"> */}
                        <Button variant="primary" onClick={handleAddEvent}>Submit</Button>
                    {/* </a> */}
                </div>
            </Form>
        </Container>
    );
};

export default AddEvent;