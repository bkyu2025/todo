import React, { useState } from "react";
import styled, { css } from "styled-components";
import TodoDate from "../TodoDate";
import DeleteIcon from "./delete.png";
import CheckList from "./CheckList.png"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
`;

const Rectangle = styled.div`
    width: 100%;
    height: 45px;
    background-color: lightgrey;
    border-radius: 10px;
    display: flex;
    align-items:center;
    margin-bottom: 10px;

`;

const Buttonsdiv = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
color: white;
font-size: 18px;
margin-left: 20px;
margin-right: 50px;
width: 80%;
`;

const Img = styled.img`
    width: 29px;
    height: 29px;
    margin-top: 1%;
    margin-right: 20px;
    
`;

const Img1 = styled.img`
    width: 27px;
    height: 27px;
    margin-right: 10px;
`;

const Check = styled.button`
    border-radius: 50px;
    border: 3px solid #106cde;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    ${(props) =>
        props.isDone &&
        css`
            background-color: #106cde;
    `}
`;


function TodoList({ todos, switchStatus, deleteTodo }) {
    console.log(todos);
    return (
        <Container>
            {todos.map((todo) => (
                <Rectangle>
                    <Text>
                        {todo.text}
                    </Text>
                    <Buttonsdiv>
                        <Check type="checkbox" onClick={() => { switchStatus(todo.id) }} isDone={todo.isDone}></Check>
                        <Img src={DeleteIcon} onClick={() => { deleteTodo(todo.id) }}></Img>
                    </Buttonsdiv>
                </Rectangle>
            ))}

        </Container>
    );
}

export default TodoList;