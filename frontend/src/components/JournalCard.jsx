import { Card } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

// Keely-Ann notes: Journal card created to preview journal entries on the main page.

function JournalCard({ entry }) {
    // Only get a snippet of the entry not the whole journal entry.
    const getSnippet = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
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
                <Button variant="outline">View</Button>
            </Card.Footer>
        </Card.Root>
    )
};

export default JournalCard;