<template>
    <div v-if="todos.length">
        <todo-item
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
        ></todo-item>

    </div>
    <b-alert show variant="info" v-else>No hay Todos<b-alert>
</template>

<script>
import TodoItem from './TodoItem'
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    }
}
</script>>