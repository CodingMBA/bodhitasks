<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      label="Due Date"
      :value="dueDate"
      clearable
      @input="$emit('update:dueDate', $event)"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date
              :value="dueDate"
              today-btn
              @input="$emit('update:dueDate', $event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: {
    dueDate: String
  }
};
</script>

<style></style>
