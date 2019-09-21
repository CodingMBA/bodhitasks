<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    this.getSettings();
    this.handleAuthStateChange();
  },
  methods: {
    ...mapActions("settings", ["getSettings"]),
    ...mapActions("auth", ["handleAuthStateChange"])
  }
};
</script>

<style>
.text-strikethrough {
  text-decoration: line-through;
}
</style>
