<template>
  <div id="app">
    <full-page :pages="pages" :bgColor="bgColor">
      <template slot="one">
        <page-one></page-one>
      </template>
      <template slot="two">
        <page-two></page-two>
      </template>
    </full-page>
  </div>
</template>

<script>
  import fullPage from '@/components/fullPage'
  import pageOne from '@/components/page1'
  import pageTwo from '@/components/page2'
  export default {
    data(){
      return {
        bgColor: ['#c90','#c09','#09c','#9c0'],
        pages:5,
      }
    },
  components:{
    fullPage,
    pageOne,
    pageTwo
  }
}


</script>

<style lang="scss">
  body{
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
