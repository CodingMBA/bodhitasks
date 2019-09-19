<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div :class="{ 'q-mt-lg': !settings.showTasksInOneList }">
      <list-header v-if="!settings.showTasksInOneList" bg-color="bg-green-4"
        >Completed</list-header
      >
      <q-list bordered separator>
        <task
          v-for="(task, key) in tasksCompleted"
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
  props: ["tasksCompleted"],
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
