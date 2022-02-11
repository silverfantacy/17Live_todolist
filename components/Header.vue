<template>
    <header>
        <nav>
            <a href="" class="btn sidebar-btn">
                <iconBar />
            </a>
            <a href="/" class="logo_title">HandsUP</a>
            <a href="" class="btn sign_out-btn">
                <iconSignOut />
            </a>
        </nav>
    </header>
</template>

<script>
import iconBar from "~/assets/img/icon/bar.svg?inline";
import iconSignOut from "~/assets/img/icon/sign-out-alt-solid.svg?inline";

export default {
    name: "Header",
    components: { iconBar, iconSignOut },
};
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: $primary;
    nav {
        display: flex;
    }
}

.btn {
  width: 55px;
    height: 55px;

    @include flex_center;
}
.sidebar-btn {
    
}

.logo_title {
  font-size: 36px;
  line-height: 55px;

  color: white;
  margin-right: auto;
}
.sign_out-btn{
  
}
</style>