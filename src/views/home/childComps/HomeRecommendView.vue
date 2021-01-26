<template>
<!-- 推荐信息展示 -->
    <div class="recommends">
        <!-- 盒子内的每个小圆圈 -->
        <div v-for="(item,index) in recommends" :key="index" class="left">
            <a :href="item.link">
                <div class="img">
                    <img :src="item.image">
                </div>
                <div>
                    {{item.title}}
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    data() {
        return {
            
        };
    },
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
};
</script>

<style scoped>
.recommends{
    width: 100%;
    display: flex;
    text-align: center;
    margin-top: 10px;
    border-bottom: 10px solid #eee;
    box-sizing: border-box;
    padding-bottom: 30px;
}
.recommends .left{
    flex: 1;
}
.recommends .left img{
    width: 80px;
    height: 80px;
    margin-bottom: 8px;
}
</style>