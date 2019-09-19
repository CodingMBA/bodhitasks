<template>
  <q-select
    v-model="sortBy"
    class="col q-ml-sm"
    emit-value
    map-options
    filled
    :options="options"
    label="Sort by"
    stack-label
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          label: "Name",
          value: "name"
        },
        {
          label: "Date",
          value: "dueDate"
        }
      ]
    };
  },
  computed: {
    ...mapState("tasks", ["sort"]),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSort"])
  }
};
</script>

<style scoped>
.q-select {
  flex: 0 0 120px;
}
</style>
