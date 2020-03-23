<template>
<div>
    <span>这是id为</span>
    <span>{{movieDetail}}的电影详情</span>
    
</div>
</template>
<script>
export default {
    data(){
        return{
            movieDetail:null
        }
    },
    created(){
        //获取路由ID,进行数据请求
        let id = this.$route.query.id;
        this.movieDetail = id;
        // 不能取同一文件两次id
        // this.$axios.get('/api/test?id='+id).then(res=>{
        //     this.movieDetail =res.data.data.shuju;
        // })

    }

}
</script>
<style scoped>

</style>