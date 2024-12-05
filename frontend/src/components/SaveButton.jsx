import UniButton from "./Button";

// Eve: 23/11
function SaveButton({ handleSave}) {

    return (
        <UniButton 
            onClick={handleSave}
            //className="button"
            />
    );
}

export default SaveButton;