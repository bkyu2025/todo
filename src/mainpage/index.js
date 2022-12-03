import React, { useState } from "react";
import styled from "styled-components";
import TodoDate from "../TodoDate";
import TodoAdd from "../TodoAdd";
import TodoLeft from "../TodoLeft";
import TodoList from "../TodoList";


const Wrapper = styled.div`
    background: linear-gradient(225deg, #131086,#b621f3);
    min-height: 100vh;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

`;

const Container = styled.div`
    height: 680px;
    width: 500px;
    padding: 25px;
    display:flex;
    flex-direction:column;
    background-color: white;
    border-radius: 20px;
    opacity: 80%;
    font-size: 30px;
    font-weight: 800;


`;


const Name = styled.div`
    font-size: 20px;
    color: black;
    font-weight: 600;
    margin-top: 6px;
`;

const DIV = styled.div`
    color: blue;
    font-weight: 600;
`;

const Div = styled.div`
    display: flex; 
    margin-top: 100px;
`;

const Hr = styled.hr`
    width: 100%;
    border: 1px solid black;
    margin-top: 50px;
`;





function MainPage() {
    const [todos, setTodos] = useState([]);
    const [memos, setMemos] = useState([]);
    console.log(todos);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };
    const changeIsDone = (id) => {
        var currentTodo;
        for (var i = 0; i < todos.length; i++) {
            if (todos[i]['id'] == id) {
                currentTodo = todos[i];
            }
        }
        currentTodo.isDone = !currentTodo.isDone;
        setTodos([...todos]);
    };
    const removeTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id);
        setTodos(newTodos);
    };
    return (
        <Wrapper>
            <Container>
                <TodoDate />
                <br></br>
                {/* <Name>JUSTIN JI's Todo List</Name> */}
                <DIV><TodoLeft todos={todos} updateTodo={addTodo} /></DIV>
                <Hr></Hr>
                <Div><TodoAdd todos={todos} updateTodo={addTodo} /></Div>
                <TodoList
                    todos={todos}
                    switchStatus={changeIsDone}
                    deleteTodo={removeTodo}
                />
            </Container>
        </Wrapper>)
}


export default MainPage;