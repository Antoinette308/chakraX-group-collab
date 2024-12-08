/* eslint-disable react/prop-types */
import ButtonLink from "../ButtonLink";

// Keely-Ann notes: Adding a button to the journal main page to get new journal pages
function AddNewEntry({ route = "new-entry", text = "Add New Entry", colorPalette, width = "auto" }) {
    return (
        <ButtonLink
            text={text}
            route={route}
            bg={colorPalette}
            width={width}
        />
    );
};

export default AddNewEntry;
