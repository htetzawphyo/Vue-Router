<template>
  <div>
    <menu-bar></menu-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";

export default {
  name: "App",
  components: {
    MenuBar,
  }
}
</script>