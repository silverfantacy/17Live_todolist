<template>
    <div class="list_item">
        <input type="checkbox" />
        <div class="check_btn" @click="complete(todo)">
            <iconCheckboxChecked v-if="todo.completed" />
            <iconCheckbox v-else/>
        </div>
        <p @click="complete(todo)" :class="{'complete': todo.completed}">{{todo.content}}</p>
        <div class="config">
            <button class="delete_btn" @click="remove(todo)"><iconTrash/></button>
        </div>
    </div>
</template>

<script>
import iconTrash from "~/assets/img/icon/trash-alt-solid.svg?inline";
import iconCheckbox from "~/assets/img/icon/checkbox.svg?inline";
import iconCheckboxChecked from "~/assets/img/icon/checkbox_check.svg?inline";

export default {
    name: "ListItem",
    components: { iconTrash, iconCheckbox, iconCheckboxChecked },
    props: ['todo'],
    methods: {
        complete: function(item) {
            this.$emit('completeTodo', item)
        },
        remove: function(item) {
            this.$emit('removeTodo', item)
        }
    },
}
</script>

<style lang="scss" scoped>
.list_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    [type="checkbox"] {
        display: none;
    }
    .config {
        margin-left: auto;
    }
    p {
        word-break: break-word;
        cursor: pointer;
        &.complete {
            color: $primary;
            text-decoration: line-through;
        }
    }
}

.check_btn,
.delete_btn {
    padding: 12px;
    cursor: pointer;
}

.check_btn {
    flex: 0 0 44px;
    display: flex;
    align-items: center;
}

.delete_btn {
    flex: 0 0 44px;
    border: none;
    background: transparent;
}
</style>