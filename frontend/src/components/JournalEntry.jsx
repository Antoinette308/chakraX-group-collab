import { useState, useEffect } from "react";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react"
import { Field } from "../components/ui/field"

// Keely-Ann notes: Journal 'form' created to submit journal entries.

function JournalEntry({ entry, onSave, onUpdate }) {

    // Store the title and body of the journal entry
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        if (entry) {
            setTitle(entry.title);
            setText(entry.text);
        } else {
            setTitle("");
            setText("");
        }
    }, [entry]);

    // Handling the journal submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents a default form submission
        console.log({ title, text });
        // if statement depending on if it's an edit or a entry
        if (entry) {
            onUpdate({ ...entry, title, text });
        } else {
            // Generate a new entry with a unique ID and pass the entry to the journal page
            const newEntry = { id: Date.now(), title, text };
            onSave(newEntry);
        }
        // Clear the form after submitting
        setTitle("");
        setText("");
    };

    // Setting up the journal form
    return (
        <form onSubmit={handleSubmit}>
            <Stack gap="4" align="center" width="1800px">
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
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                </Field>
                <Button type="submit"
                    borderRadius="30px"
                    colorPalette="teal.500"
                    width="250px">Submit</Button>
            </Stack>
        </form>
    )

};


export default JournalEntry;