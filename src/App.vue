<template>
  <div id="app">
    <el-container>
  <el-header>测试服务后台</el-header>
  <el-container>
    <el-aside width="200px"> <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <template slot="title">
          
        </template>

      <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-setting"></i><span> 系统管理</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
 <i class="el-icon-edit"></i><span> 工具</span>
        </template>
          <el-menu-item index="2-1">JOSN自动生成</el-menu-item>
          <el-menu-item index="2-2">函数质量检测</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu></el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>     
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    // class Obj {
    //   constructor (value, next) {
    //     this.value = value
    //     this.nextfun = null
    //   }
    //   [Symbol.iterator] () {
    //     return this
    //   }
    //   next () {
    //     let current = this
    //     const exct = function () {
    //       console.log(current)
    //       if (!current) return { done: true }
    //       current = current.nextfun
    //       return {
    //         value: current.value,
    //         done: false
    //       }
    //     }
    //     return exct()
    //   }
    // }
    // const one = new Obj(1)
    // const two = new Obj(2)
    // const three = new Obj(3)
    // console.log(one)
    // one.nextfun = two
    // two.nextfun = three
    // for (let item of one) {
    //   console.log(item)
    // }
    // function Obj(value) {
    //   this.value = value
    //   this.next = null
    // }

    // Obj.prototype[Symbol.iterator] = function() {
    //   var iterator = { next: next }

    //   var current = this

    //   function next() {
    //     console.log(current)
    //     if (current) {
    //       var value = current.value
    //       current = current.next
    //       return { done: false, value: value }
    //     } else {
    //       return { done: true }
    //     }
    //   }
    //   return iterator
    // }
    // class Obj {
    //   constructor(value) {
    //     this.value = value
    //     this.next = null
    //   }
    //   [Symbol.iterator]() {
    //     var iterator = { next: next }

    //     var current = this

    //     function next() {
    //       console.log(current)
    //       if (current) {
    //         var value = current.value
    //         current = current.next
    //         return { done: false, value: value }
    //       } else {
    //         return { done: true }
    //       }
    //     }
    //     return iterator
    //   }
    // }

    var one = new Obj(1);
    var two = new Obj(2);
    var three = new Obj(3);

    one.nextfun = two;
    two.nextfun = three;

    for (var i of one) {
      console.log(i); // 1, 2, 3
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app,
.el-container,
.el-menu {
  height: 100% !important;
}
.body {
  display: flex;
  height: 100%;
  overflow: scroll;
  .nav {
    flex: 2;
  }
  .main {
    flex: 18;
  }
}
</style>
