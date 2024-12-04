import Header from "../components/Header";
import JournalEntry from "../components/JournalEntry";


function NewEntry({ handleSave }) {

    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text={entry.title} />
            <JournalEntry onSave={handleSave} />
        </>
    )
};

export default NewEntry;