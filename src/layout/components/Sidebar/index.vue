<template>
  <div class="sidebar-container">
    <div class="login">这是登录效果</div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        v-for="(item, itemIndex) in menus"
        :key="itemIndex"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu :index="itemIndex + ''">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span :key="itemIndex">{{ item.title }}</span>
          </template>
          <app-link
            :ref="itemIndex + '-' + itemListIndex"
            v-for="(itemList, itemListIndex) in item.children"
            :to="itemList.href.substring(4)"
            :key="itemListIndex"
          >
            <el-menu-item :index="itemIndex + '-' + itemListIndex">
              {{itemList.title}}
            </el-menu-item>
          </app-link>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { setToken } from "@/utils/auth";
import { menus } from "@/api/menus";
import AppLink from "./Link";
export default {
  data() {
    return {
      menus: []
    };
  },
  components: {
    AppLink
  },
  created() {
    menus().then(data => {
      this.menus = data.data
    })
  }
}
</script>

<style lang="scss">
.login {
  height: 50px;
  background: #ccc;
  text-align: center;
  line-height: 50px;
  border-right: solid 1px #e6e6e6
}
</style>
