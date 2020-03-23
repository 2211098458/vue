<template>
  <div id="app">
    <keep-alive>
     <router-view  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    
    <router-view  v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>

// import Index from './pages/index'
export default {
  name: 'App',
  components:{
    // Index
  }
 
}
</script>

<style>

</style>
