export const addNewTask = (addNewTask) => async (dispatch) => {
  dispatch({
    type: "ADD_NEW_TASK",
    payload: { whatTodo: addNewTask },
  });
};

export const reverseStatusOfTask = (index) => async (dispatch) => {
  dispatch({
    type: "REVERSE_STATUS_OF_TASK",
    payload: { index },
  });
};

export const deleteTask = (index) => async (dispatch) => {
  dispatch({
    type: "DELETE_TASK",
    payload: { index },
  });
};
