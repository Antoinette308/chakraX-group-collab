import ButtonLink from "./ButtonLink";

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
