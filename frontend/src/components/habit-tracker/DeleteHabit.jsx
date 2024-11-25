import React, { useState } from "react";

function DeleteHabit({ habitId, deleteHabit }) {
    return (
        <button onClick={() => deleteHabit(habitId)}>X</button>
    );
}

export default DeleteHabit;