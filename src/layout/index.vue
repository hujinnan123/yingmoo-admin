<template>
  <div class="app-wrapper">
    <div v-show="wrapperBlock" class="bg-color" @click="toggleSideBar"></div>
    <Sidebar v-show="wrapperBlock"/>
    <div class="main-container">
      <Navbar />
      <Tagview />
      <Sidebar-switch :is-active="wrapperBlock" @toggleClick="toggleSideBar"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import SidebarSwitch from '@/components/SidebarSwitch'
import { Sidebar, Navbar, Tagview } from './components'
export default {
  components: {
    Sidebar,
    SidebarSwitch,
    Navbar,
    Tagview
  },
  data() {
    return {
      wrapperBlock: false
    }
  },
  methods: {
    toggleSideBar() {
      this.wrapperBlock = !this.wrapperBlock
    }
  }
}
</script>

<style lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #000;
  overflow: hidden;
  .bg-color{
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.1;
  }

  .sidebar-container{
    position: fixed;
    z-index: 10;
    width: 60%;
    height: 100%;
    background-color: #304156;
    overflow-y: auto;
  }

  .main-container{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
</style>
