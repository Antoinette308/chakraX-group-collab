import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function DeleteHabit({ habitId, deleteHabit }) {
    return (
        <button onClick={() => deleteHabit(habitId)}><FaTrashAlt /></button>
    );
}

export default DeleteHabit;