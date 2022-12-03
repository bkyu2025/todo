import React, { useState } from "react";
import styled from "styled-components";

function TodoLeft({ todos, switchStatus, deleteTodo }) {
    const completed = todos.filter((todo) => todo.isDone == true);
    return <>{todos.length} todos, {completed.length} completed</>;

}

export default TodoLeft;