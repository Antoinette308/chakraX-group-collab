import { useState } from "react";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react"
import { Field } from "../components/ui/field"

// Keely-Ann notes: Journal 'form' created to submit journal entries.

function JournalEntry({ size, colorPalette, width }) {

    // Store the title and body of the journal entry
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // Handling the journal submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents a default form submission
        console.log({ title, text });
        // Clear the form after submitting
        setTitle("");
        setText("");
    };
    // Setting up the form
    return (
        <form onSubmit={handleSubmit}>
            <Stack gap="4" align="flex-start" maxW="sm">
                <Field>
                    {/* Title Input */}
                    <Input placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // Update state on change
                    />
                </Field>
                <Field>
                    {/* Text Input */}
                    <Textarea
                        placeholder="Write your thoughts"
                        value={body}
                        onChange={(e) => setText(e.target.value)} />
                </Field>
                <Button type="submit"
                    borderRadius="30px"
                    colorPalette={buttonColor}
                    width="250px">Submit</Button>
            </Stack>
        </form>
    )

};


export default JournalEntry;