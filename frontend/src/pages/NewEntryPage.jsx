import Header from "../components/Header";
import JournalEntry from "../components/JournalEntry";


function NewEntry() {
    return (
        <>
            <Header size="6xl" bg="teal.500" color="gray.900" text="What's on your  mind?" />
            <Body>
                <JournalEntry />
            </Body>
        </>
    )
};

export default NewEntry;