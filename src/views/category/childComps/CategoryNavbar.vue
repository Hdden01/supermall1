<template>
    <div class="nav">
        <NavBar class="nav-bar">
            <template v-slot:center>商品分类</template>
        </NavBar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
    name: 'CategoryNavbar',
    components: { NavBar },
    data() {
        return {
            
        };
    },
};
</script>

<style  scoped>
.nav-bar{
    background: var(--color-tint);
    color: #fff;
    font-weight: bold;
}
</style>