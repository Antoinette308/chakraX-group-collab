/* eslint-disable react/prop-types */
import { Card } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

// Keely-Ann notes: Journal card created to preview journal entries on the main page.

function JournalCard({ entry, onDelete }) {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("Button clicked");
    }

    // Only get a snippet of the entry not the whole journal entry.

    const getSnippet = (text, maxLength = 150) => {
        if (!text){
            return "No content available";
        } else {
            return text.length <= maxLength ? text : `${text.substring(0, maxLength)}...`;}
    };

    return (
        // Use Chakra's card feature to hold the journal entry information such as title and journal body.
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Card.Title mt="2">{entry.title}</Card.Title>
                <Card.Description>
                    {getSnippet(entry.text)}
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline" onClick={() => {handleClick(); navigate(`/journal/${entry.id}`); }}>View</Button>
                <Button variant="outline" onClick={() => {handleClick(); navigate(`/journal/edit/${entry.id}`); }}>Edit</Button>
                <Button onClick={() => onDelete(entry.id)}>Delete</Button>
            </Card.Footer>
        </Card.Root>
    )
};

export default JournalCard;