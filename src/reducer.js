const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "EDIT_TODO": {
      let newTodos = [...state.todos];
      let index = newTodos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        newTodos[index].label = action.payload.label;
        return {
          ...state,
          todos: newTodos,
        };
      }
      break;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
