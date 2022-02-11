<template>
    <main>
        <div class="container">
            <div class="card">
                <h2 class="card_title">Todo List</h2>
                <ul>
                    <li>
                        <div class="list_item">
                            <input type="checkbox" />
                            <div class="check_btn">
                                <iconCheckbox/>
                                <iconCheckboxChecked/>
                            </div>
                            <p>我要成為海賊王</p>
                            <div class="config">
                                <button class="delete_btn"><iconTrash/></button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ListItem />
                    </li>
                    <li>
                        <ListItem />
                    </li>
                    <li>
                        <ListItem />
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import iconBar from "~/assets/img/icon/bar.svg?inline";
import iconSignOut from "~/assets/img/icon/sign-out-alt-solid.svg?inline";
import iconTrash from "~/assets/img/icon/trash-alt-solid.svg?inline";
import iconCheckbox from "~/assets/img/icon/checkbox.svg?inline";
import iconCheckboxChecked from "~/assets/img/icon/checkbox_check.svg?inline";
import ListItem from "./ListItem";

export default {
    name: "Main",
    components: { iconBar, iconSignOut, iconTrash, iconCheckbox, iconCheckboxChecked, ListItem },
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
}

.check_btn,
.delete_btn {
    padding: 12px;
    cursor: pointer;
}

.check_btn {
    display: flex;
    align-items: center;
}

.delete_btn {
    border: none;
    background: transparent;
}
</style>