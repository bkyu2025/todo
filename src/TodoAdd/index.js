import React, { useState } from "react";
import styled from "styled-components";

const Button1 = styled.input`
    width: 300px;
    height: 30px;
    border: solid black 1px;
    border-radius: 3px;
    padding-left: 10px;

`;

const Button2 = styled.button`
    width: 200px;
    height: 34px;
    border: solid black 1px;
    background-color: rgb(144, 0, 255);
    color: white;
    font-weight: 600;
    border-radius: 3px;
    margin-left: -1%;

`;

const DIVY = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: -100px;
`;

const TextOn = styled.text`
    color: black;
    font-size: 18px;
`;




function TodoAdd({ todos, updateTodo }) {
    const [todo, setTodo] = useState({
        id: null,
        text: "",
        isDone: false,
    });

    const addTodo = (e) => {
        const { name, value } = e.target;
        setTodo({
            id: todos.length + 1,
            text: value,
            isDone: false,
        });
    };

    const onClickChange = () => {
        if (todo.text == "") {
            alert("Please Enter Text");
            return;
        }
        updateTodo(todo);
        setTodo({
            id: null,
            text: "",
            isDone: false,
        });
    };
    console.log(todo);
    return (
        <DIVY>
            <Button1
                type="text"
                placeholder="Add a new Task"
                name="text"
                value={todo.text}
                onChange={addTodo}
                id="OnClickAdd"
            ></Button1>
            <Button2 onClick={onClickChange}>Add New Task</Button2>
        </DIVY >

    )
}

export default TodoAdd;