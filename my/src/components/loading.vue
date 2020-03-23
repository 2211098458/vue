<template>
    <div>
        <div class="loading-bg">
            <img src="/images/loading.jpg" alt="">
            <p>你的网络有点慢呢</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'loading'
}
</script>
<style scoped>
   .loading-bg {
  text-align: center;
  position: fixed;
  padding: 20px;
  background-color: rgba(32, 32, 32, 0.493);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  z-index: 9;
}
</style>