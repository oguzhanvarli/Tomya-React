import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  getAllTodos,
  getStatus,
} from "../../network/features/todoSlices";
import TodoCart from "../../components/todoCart/TodoCart";
import AddTodoModal from "../../components/addTodoModal/AddTodoModal";

function Todos() {

  const todos = useSelector(getAllTodos)
  const status = useSelector(getStatus)
  const [refreshData, setRefreshData] = useState(todos)
  const dispatch = useDispatch()
  //get todos when page load.
  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchTodos())
    }
  }, [])
  //using show any changing on main state refresh showing todos. 
  useEffect(() => {
    setRefreshData(todos)
  }, [todos])
  const searchTodoTitle = (text) => {
    const filteredList = todos.filter((data) => {
      const searchText = text.toLowerCase();
      return data.title.indexOf(searchText) > -1 || data.userId == text;
    });
    setRefreshData(filteredList);
  };

  return (
    <div className="row justify-content-center">
      <AddTodoModal />
      <div className="input-group input-group-sm m-3 w-50">
        <input
          type="text"
          className="form-control rounded-3 me-3"
          placeholder="Title veya UserId Ara.."
          onChange={(e) => searchTodoTitle(e.target.value)}
        />
        <button className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addTodoModal">Ekle</button>
      </div>
      <div className="col-md-11 row">
        {refreshData.map((todo, key) => (
          <div key={key} className='col-md-4 '>
            <TodoCart todo={todo}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
