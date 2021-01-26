<template>
<!-- 导航 -->
    <div class="tab-control">
            <!-- 导航内的每个小块 -->
            <div class="tab" v-for="(item,index) in titles" :key="index" @click="tabClick(index)">
                <span :class="{active:index==activeIndex}">{{item}}</span>
            </div>
        </div>
</template>

<script>
export default {
    name: 'TabControl',
    data() {
        return {
            activeIndex:0
        };
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        tabClick(index){
            this.activeIndex=index;
            this.$emit('activeText',index);
        }
    }
};
</script>

<style scoped>
.tab-control{
    width: 100%;
    display:flex;
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
}
.tab{
    flex: 1;
}
span{
    padding-bottom: 5px;
}
.active{
    color: var(--color-high-text);
     border-bottom: 1px solid var(--color-high-text);
}
</style>