import React, { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../App';
import VolunteerRegister from '../VolunteerRegister/VolunteerRegister';

const VolunteerRegistration = () => {
    const [event, setEvent] = useContext(EventContext);

    const [eventTitle, setEventTitle] = useState([]);

    // const [matchedItem, setMatchItem] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/eventlist')
            .then(res => res.json())
            .then(data => setEventTitle(data))
    }, []);

    // useEffect(() => {
    //     const amarData = eventTitle.find(edata => edata._id === event);
    //     setMatchItem(amarData);
    // }, [eventTitle])

    return (
        <div>
            {
                eventTitle.map(event => <VolunteerRegister event={event}></VolunteerRegister>)
            }
        </div>
    );
};

export default VolunteerRegistration;