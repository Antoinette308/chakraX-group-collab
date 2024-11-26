import ButtonLink from "./ButtonLink";

// eslint-disable-next-line react/prop-types
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
