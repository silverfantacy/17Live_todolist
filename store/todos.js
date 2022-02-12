export const state = () => ({
  todos: [],
})

export const mutations = {
  add(state, item) {
    state.todos.push(item)
  },
  remove(state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  complete(state, todo) {
    let index = state.todos.indexOf(todo);
    state.todos[index].completed = !todo.completed
  }
}