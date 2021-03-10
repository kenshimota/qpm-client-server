<template>
  <div>
    <nav-bar />
    <v-container
      style="
        bakground: white;
        border-radius: 5px;
        padding: 10px;
        margin-top: 100px;
      "
    >
      <router-view :key="$route.fullPath"></router-view>
    </v-container>
  </div>
</template>

<script>
import NavBar from "./utils/NavBar";
export default {
  name: "App",
  components: { NavBar },
};
</script>