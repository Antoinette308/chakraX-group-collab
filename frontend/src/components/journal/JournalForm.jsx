/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { useNavigate } from "react-router-dom";

// Keely-Ann notes: Journal 'form' created to submit journal entries.

function JournalForm({ entry = null, onUpdate, theme }) {

    // Store the title and body of the journal entry
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const user = 1;
    const navigate = useNavigate();

    async function handleSave() {
        const url = "http://localhost:3000/journal/new-entry";

        try{
            const response = await fetch(url, {
                method: "POST",
            body: JSON.stringify({
                user_id: user,
                title: title,
                entry: text,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(!response.ok){
            throw new Error(`Response Status: ${response.status}`)
        }
        const json = await response.json()
            console.log(json)
            return json;
        }
        catch(err){
            console.error(err.message);
        }



    }

    useEffect(() => {
        if (entry) {
            setTitle(entry.title || "");
            setText(entry.entry || "");
        }
    }, [entry]);

    // Handle the journal submissions either updating or uploading new entry)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(entry){
            console.log(title, text)
            onUpdate({title, text, user})
            console.log("Journal updated");
        } else {
            const newEntry = {title, text};
            handleSave(newEntry)
            navigate('/journal')
            console.log("New entry saved", newEntry);
        }
        setTitle("");
        setText("");
    };

    // Setting up the journal form
    return (
        <form onSubmit={handleSubmit}>
            <Stack gap="4" align="center">
                <Field >
                    {/* Title Input */}
                    <Input 
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                    color={theme.ButtonColor}
                    bg={theme.pageButtons}
                    width="250px">Submit</Button>
            </Stack>
        </form>
    )

};


export default JournalForm;