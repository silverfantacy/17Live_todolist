<template>
    <main>
        <div class="container">
            <div class="card">
                <h2 class="card_title">Todo List</h2>
                <ul>
                    <li v-for="(todo, key) in filterTodos" :key="key">
                        <ListItem :todo="todo" @completeTodo="completeTodo" @removeTodo="removeTodo" />
                    </li>
                </ul>
    
                <div class="input_block">
                    <input type="text" name="content" placeholder="請輸入要做的事情" v-model="newTodo" @keyup.enter="addTodo(newTodo)" />
                    <button @click="addTodo(newTodo)">
                                      <iconPlus />
                                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import iconPlus from "~/assets/img/icon/plus.svg?inline";
import ListItem from "./ListItem";

export default {
    name: "Main",
    components: { iconPlus, ListItem },
    data() {
        return {
            todos: [],
            filterTodos: [],
            newTodo: '',
            canuse: true
        }
    },
    methods: {
        addTodo: function(todo) {
            if (!this.canuse || !this.newTodo) return
            this.canuse = false
            this.$nuxt.$loading.start()
            setTimeout(() => {
                this.$nuxt.$loading.finish()
                this.todos.push({
                    content: todo,
                    completed: false
                });
                this.newTodo = '';
                this.filterTodos = this.todos;
                this.canuse = true
            }, 1000)

        },
        removeTodo: function(todo) {
            if (!this.canuse) return
            this.canuse = false
            this.$nuxt.$loading.start()
            setTimeout(() => {
                this.$nuxt.$loading.finish()
                this.todos.splice(this.todos.indexOf(todo), 1);
                this.canuse = true
            }, 1000)
        },
        completeTodo: function(todo) {
            if (!this.canuse) return
            let index = this.todos.indexOf(todo);
            this.todos[index].completed = !todo.completed
        }
    },
    mounted() {
        this.todos = [{
                content: '我要成為海賊王',
                completed: false
            },
            {
                content: '我在HandsUP 前測',
                completed: true
            }
        ]
        this.filterTodos = this.todos;
    },
};
</script>

<style lang="scss" scoped>
main {
    padding-top: 55px;
}

.container {
    padding: 16px;
    margin: 0 auto;
    max-width: 800px;
}

.card {
    padding: 30px 30px 0 30px;
    background: white;
    border: 1px solid $border;
    box-sizing: border-box;
    border-radius: $border_radius;
    display: flex;
    flex-direction: column;
    min-height: 85vh;
    &_title {
        margin: 0;
        font-weight: bold;
        font-size: 36px;
        color: black;
    }
}

ul {
    list-style: none;
    padding: 0;
}

.input_block {
    display: flex;
    height: 34px;
    margin: auto -17px 10px -10px;
    input {
        width: 100%;
        padding-left: 14px;
    }
    button {
        width: 35px;
        height: 100%;
        border: none;
        border-radius: $border_radius;
        background: $primary;
        margin-left: 25px;
        cursor: pointer;
        @include flex_center;
    }
}
</style>