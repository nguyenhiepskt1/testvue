<template>
  <the-header v-if="['/'].includes($route.path)"></the-header>
  <the-content></the-content>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  name: "App",
  components: { TheHeader, TheContent, TheFooter },
};
</script>

<style>
@font-face {
  font-family: Montserrat;
  src: url(./assets/Fonts/Montserrat-Medium.ttf);
}
body {
  font-family: Montserrat;
  font-size: 13px;
  margin: 0;
  padding: 0;
}
</style>
