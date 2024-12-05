/* eslint-disable react/prop-types */
import Header from "../components/Header";
import JournalForm from "../components/journal/JournalForm";


function NewEntry({ handleSave }) {

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="What's on your mind?" />
            <JournalForm onSave={handleSave} />
        </>
    )
};

export default NewEntry;