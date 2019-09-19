<template>
  <div class="row q-mb-sm">
    <q-input
      ref="name"
      v-select-all
      :value="name"
      outlined
      :rules="[val => !!val || 'Field is required']"
      label="Task Name"
      autofocus
      class="col"
      clearable
      @input="$emit('update:name', $event)"
    />
  </div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";
export default {
  directives: {
    selectAll
  },
  props: {
    name: String
  }
};
</script>

<style></style>
