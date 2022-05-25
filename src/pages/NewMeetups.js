

import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://meetup-page-43b0a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            header: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/');
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>

};

export default NewMeetupsPage;