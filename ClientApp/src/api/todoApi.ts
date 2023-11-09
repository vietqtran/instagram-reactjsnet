import instance from "./axiosClient";

const END_POINT = {
   TODOS: "todos",
};

export const getTodosAPI = async () => {
   try {
      const response = await instance.get<any[]>(END_POINT.TODOS);
      return response.data;
   } catch (error) {
      // Handle error
      console.error("Error in getTodosAPI:", error);
      throw error;
   }
};

export const deleteTodoAPI = async (id: string) => {
   try {
      const response = await instance.delete(`${END_POINT.TODOS}/${id}`);
      return response.data;
   } catch (error) {
      // Handle error
      console.error("Error in deleteTodoAPI:", error);
      throw error;
   }
};

export const addTodoAPI = async (todo: any) => {
   try {
      const response = await instance.post(END_POINT.TODOS, todo);
      return response.data;
   } catch (error) {
      // Handle error
      console.error("Error in addTodoAPI:", error);
      throw error;
   }
};

export const updateTodoAPI = async (todo: any) => {
   try {
      const response = await instance.put(END_POINT.TODOS, todo);
      return response.data;
   } catch (error) {
      // Handle error
      console.error("Error in updateTodoAPI:", error);
      throw error;
   }
};
