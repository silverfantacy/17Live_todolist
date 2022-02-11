<template>
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
</template>

<script>
import iconTrash from "~/assets/img/icon/trash-alt-solid.svg?inline";
import iconCheckbox from "~/assets/img/icon/checkbox.svg?inline";
import iconCheckboxChecked from "~/assets/img/icon/checkbox_check.svg?inline";

export default {
    name: "ListItem",
    components: { iconTrash, iconCheckbox, iconCheckboxChecked },

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