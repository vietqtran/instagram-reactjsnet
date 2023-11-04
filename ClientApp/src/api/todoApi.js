import instance from "./axiosClient"

const END_POINT = {
   TODOS: "todos",
}

export const getTodosAPI = () => {
   return instance.get(`${END_POINT.TODOS}`)
}

export const deleteTodoAPI = (id) => {
   console.log(`${END_POINT.TODOS}/${id}`)
   return instance.delete(`${END_POINT.TODOS}/${id}`)
}

export const addTodoAPI = (todo) => {
   return instance.post(`${END_POINT.TODOS}`, todo)
}

export const updateTodoAPI = (todo) => {
   return instance.put(`${END_POINT.TODOS}`, todo)
}
