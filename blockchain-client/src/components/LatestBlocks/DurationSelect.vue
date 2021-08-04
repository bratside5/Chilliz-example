<template>
  <div class="">
    <p class="">Set Block Generation Speed</p>
    <select v-model="options.selected">
      <option :value="null" disabled>Please select one</option>
      <option
        v-for="option in options.options"
        :value="option.value"
        :key="option.value"
        selected
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const options = inject("options");
    return {
      options,
    };
  },
};
</script>

<style>
</style>