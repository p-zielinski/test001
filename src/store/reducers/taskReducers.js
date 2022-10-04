const initState = {
  allTasks: [],
};

const taskReducers = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return {
        ...state,
        allTasks: [
          ...state.allTasks,
          { status: false, whatTodo: action.payload.whatTodo },
        ],
      };
    case "REVERSE_STATUS_OF_TASK":
      return {
        ...state,
        allTasks: state.allTasks.map((value, index) => {
          if (index !== action.payload.index) {
            return value;
          }
          return { ...value, status: !value.status };
        }),
      };
    case "DELETE_TASK":
      state.allTasks.splice(action.payload.index, 1);
      return { ...state };
    default:
      return { ...state };
  }
};

export default taskReducers;
