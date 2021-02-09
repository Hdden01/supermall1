<template>
    <div class="item">
        <div class="img" >
            <slot name="img"></slot>
        </div>
        <div class="text">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryRightItem',
};
</script>

<style  scoped>
.item{
    width: 50%;
}
img{
    width: 100%;
}
.text{
    text-align: center;
}
</style>