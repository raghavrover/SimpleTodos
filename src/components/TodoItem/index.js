import './index.css'

const TodoItem = props => {
  const {todoDetails, removeTodo} = props
  const {title, id} = todoDetails

  const deleteTodo = () => {
    removeTodo(id)
  }
  return (
    <li className="todo-item-container">
      <p className="todo">{title}</p>
      <button className="delete-btn" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
