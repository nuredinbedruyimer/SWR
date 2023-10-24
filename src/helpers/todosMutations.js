import { addTodo, updateTodo, deleteTodo } from "../aoi/todosApi";

export const addMutation = async (newTodo, todos) => {
  const added = await addTodo(newTodo);
  return [...todos, added];
};
export const addMutationOptions = (newTodo, todos) => {
  return {
    optimisticData: [...todos, newTodo],
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  };
};
