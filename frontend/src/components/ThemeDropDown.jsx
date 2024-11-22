"use client"

import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
    } from "./ui/select";
import { createListCollection } from "@chakra-ui/react"


const themes = createListCollection({
    items: [ 
            {label: "Greens", value:"green"},
            {label: "Blues", value: "blue"}
    ]}
)


function ThemeDropDown(){
    return (<SelectRoot collection={themes}>
    <SelectLabel> Themes</SelectLabel>
    <SelectTrigger>
        <SelectValueText placeholder="Choose Your Theme" />
    </SelectTrigger>
    <SelectContent>
    {themes.items.map((theme) => (
        <SelectItem item={theme} key={theme.value}>
                {theme.label}
        </SelectItem>
    ))}
    </SelectContent>
</SelectRoot>
)};

export default ThemeDropDown;