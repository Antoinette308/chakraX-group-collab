import ButtonLink from "../ButtonLink";

/* eslint-disable-next-line react/prop-types
Keely-Ann notes: Adding a button to the journal main page to get new journal pages
*/
function AddNewEntry({ route = "new-entry", text = "Add New Entry", colorPalette = "teal", width = "auto" }) {
    return (
        <ButtonLink
            text={text}
            route={route}
            colorPalette={colorPalette}
            width={width}
        />
    );
};

export default AddNewEntry;
