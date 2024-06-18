import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomMessage from "./components/WelcomMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => {
      const newTodoItems = [
        ...currentValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    }); // set on basis of old value
  };


  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{
      todoItems, // when key and value are same use single item todoItems, otherwise  addNewItem: addNewItem
      // adddNewItem,
      // deleteItem
      addNewItem,
      deleteItem,
    }}>
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <WelcomMessage></WelcomMessage>
      <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;