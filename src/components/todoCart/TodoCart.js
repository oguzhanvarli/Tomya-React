import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {deleteTodo, changeTodo} from '../../network/features/todoSlices'
function TodoCart({todo}) {

  const dispatch = useDispatch()
  
  return (
    <div className="card text-center mb-3">
      <DeleteOutlined
        //deleting from redux state
        onClick={() => dispatch(deleteTodo(todo))}
        className="garbage-icon col-md-1 offset-sm-10 pt-2"
      />
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">User Id = {todo.userId}</p>
        {todo.completed ? (
          <button
          //changin todo completed field
            onClick={() => dispatch(changeTodo(todo))}
            className="btn btn-outline-danger"
          >
            Change Complete
          </button>
        ) : (
          <button
          //changin todo completed field
            onClick={() => dispatch(changeTodo(todo))}
            className="btn btn-outline-primary"
          >
            Completed!
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoCart;
