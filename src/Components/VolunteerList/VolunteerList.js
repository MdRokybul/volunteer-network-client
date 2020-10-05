import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const VolunteerList = (props) => {
    const volunteerList = props.singleVolunteer;

    const handleDelete = (id) => {
        fetch('https://damp-beyond-64004.herokuapp.com/deleteVolunteer/'+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <tr>
            <td> {volunteerList.fullName} </td>
            <td> {volunteerList.email} </td>
            <td> {volunteerList.date} </td>
            <td> {volunteerList.title} </td>
            <Button onClick={() => handleDelete(volunteerList._id)}>Delete</Button>
        </tr>
    );
};

export default VolunteerList;