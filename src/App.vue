<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <router-link to="/Form">Form</router-link>
        </template>
        <el-menu-item index="1-1">
          <router-link to="/Form/radio">radio</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link to="/Form/checkbox">Checkbox</router-link>
        </el-menu-item>
        <el-menu-item index="1-3">
          <router-link to='/Form/input'>input</router-link>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <router-link to="/Data">Data</router-link>
        </template>
        <el-menu-item index="2-1">
          <router-link to="/Data/table">table</router-link>
        </el-menu-item>
      </el-submenu>
      
      <el-submenu index="3">
        <template slot="title">
          <router-link to="/Navigation">Navigation</router-link>
        </template>
        <el-menu-item index="3-1">
          <router-link to="/Navigation/navmenu">NavMenu</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- <h1>Form</h1>
    <div>
      <formexam></formexam>
    </div>-->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Form from "./components/Form/index.vue";

export default {
  name: "App",
  components: {
   
  },
  data(){
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect: function(key, keyPath){
        return key +  "  " +keyPath
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
 
}
a {
   text-decoration: none;
   color:#333;
}
</style>
