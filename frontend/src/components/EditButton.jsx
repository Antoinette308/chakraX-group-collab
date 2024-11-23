import UniButton from "./Button";

// Eve: 23/11
function EditButton({ handleEdit}) {

    return (
        <UniButton 
            onClick={handleEdit}
            //className="button"
            />
    );
}

export default EditButton;