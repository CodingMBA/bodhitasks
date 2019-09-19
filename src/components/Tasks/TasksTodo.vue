<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header v-if="!settings.showTasksInOneList" bg-color="bg-orange-4"
        >Todo</list-header
      >
      <q-list bordered separator>
        <task
          v-for="(task, key) in tasksTodo"
          :id="key"
          :key="key"
          :task="task"
        ></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["tasksTodo"],
  components: {
    task: require("components/Tasks/Task.vue").default,
    "list-header": require("components/Shared/ListHeader.vue").default
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>

<style></style>
