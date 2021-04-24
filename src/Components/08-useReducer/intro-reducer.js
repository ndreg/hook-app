const toDo = [
  {
    id: 1,
    task: "Comprar pan",
    done: false,
  }
]

const todoReducer = (state=toDo, action) => {

  if(action?.type === "add") {
    return [action.payload, ...state]
  }

  return state;
}

const toDo2 = {
  id: 2,
  task: "Comprar leche",
  done: false,
}

const actionAdd = {
  type: "add",
  payload: toDo2,
}

const tasks = todoReducer(toDo, actionAdd);
console.log(tasks)