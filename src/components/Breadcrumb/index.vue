<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in menus" :key="item.path">
        <span>首页</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
export default {
  data() {
    return {
      levelList: null,
      menus: [{path:'/ccc'},{path: '/d'}]
    }
  },
  created(){
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb(){
      let matched = this.$route.matched
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
