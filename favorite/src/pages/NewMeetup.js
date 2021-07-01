import { useHistory } from "react-router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const history = useHistory();

    function addMeetupHnadler(meetupData) {
        fetch(
            "https://react-getting-started-46616-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: { "Content-type": "application/json" },
            }
        ).then(() => {
            history.replace('/')
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHnadler} />
        </section>
    );
}

export default NewMeetupsPage;
