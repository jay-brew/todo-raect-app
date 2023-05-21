import "./App.css";
import Todo from "./Todo";
import React, {useEffect, useState} from "react";
import {Container, List, Paper} from "@mui/material";
import AddTodo from "./AddTodo";
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);

  const requestOptions = {
    method: "GET",
    header: {"Content-Type":"application/json"}
  };

  useEffect(()=>{
    call("/todo", "GET", null)
    .then((response) => setItems(response.data));
  }, []);

  const addItem = (item) =>{
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  };

  const deleteItem = (item) =>{
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
  }



  /*
  useEffect(()=>{
    fetch("http://localhost:8080/todo", requestOptions)
      .then((response)=>response.json())
      .then((response)=>{
        setItems(response.data);
      },(error)=>{

      });
  }, []);

  const deleteItem = (item) => {
    // 삭제할 아이템을 찾는다.
    const newItems = items.filter((e) => e.id !== item.id);
    // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    setItems([...newItems]);
  };

  const addItem = (item) => {
    item.id = "ID-" + items.length; // key를 위한 id
    item.done = false; // done 초기화
    // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다.
    setItems([...items, item]);
    console.log("items : ", items);
  };

  const editItem = () => {
    setItems([...items]);
  };
   */

  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}} >
      <List>
        {items.map((item)=> (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem}/>
        ))}
      </List>
    </Paper>
  );
  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
