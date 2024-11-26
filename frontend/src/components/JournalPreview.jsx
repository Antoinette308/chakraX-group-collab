/* eslint-disable react/prop-types */
import { Card } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function JournalCard({ entry }) {
    const getSnippet = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Card.Title mt="2">{entry.title}</Card.Title>
                <Card.Description>
                    {getSnippet(entry.entry)}
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
            </Card.Footer>
        </Card.Root>
    )
};

export default JournalCard;