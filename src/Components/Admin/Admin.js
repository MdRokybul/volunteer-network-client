import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import Login from '../Login/Login';
import VolunteerList from '../VolunteerList/VolunteerList';

const Admin = () => {
    const [volunteer, setVolunteer] = useState([]);
    const [adminPanel, setAdminPanel] = useState(true)
    useEffect(() => {
        fetch('https://damp-beyond-64004.herokuapp.com/volunteerlist')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    return (
        <Container>
            <Row>
                <Col className="col-md-2">
                    <Link onClick={() => setAdminPanel(true)}>Volunteer list</Link><br />
                    <Link onClick={() => setAdminPanel(false)}>Add Event</Link>
                </Col>
                <Col className="col-md-10">

                    {
                        adminPanel ? 
                        <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registration Date</th>
                                <th>Volunteer List</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                volunteer.map(singleVolunteer => <VolunteerList singleVolunteer={singleVolunteer}></VolunteerList>)
                            }
                        </tbody>
                    </Table>
                    : 
                    <AddEvent></AddEvent>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;