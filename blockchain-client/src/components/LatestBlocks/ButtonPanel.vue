<template>
  <div class="button-container">
    <button class="button" @click="addBlock" v-if="running === null">
      {{ btn_start }}
    </button>
    <button
      class="button"
      @click="stopBlockGeneration"
      v-else-if="running === true"
    >
      {{ btn_stop }}
    </button>
  </div>
  <div class="button-container">
    <button class="button-2" @click="addSingleBlock">
      {{ btn_single }}
    </button>
    <button class="button-2" @click="clearBlocks">{{ btn_clear }}</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    btn_single: String,
    btn_start: String,
    btn_stop: String,
    btn_clear: String,
  },
  setup() {
    const addSingleBlock = inject("addSingleBlock");
    const clearBlocks = inject("clearBlocks");
    const createBlocks = inject("createBlocks");
    const running = inject("running");
    const addBlock = inject("addBlock");
    const stopBlockGeneration = inject("stopBlockGeneration");
    const loading = inject("loading");
    return {
      addSingleBlock,
      clearBlocks,
      createBlocks,
      running,
      addBlock,
      stopBlockGeneration,
      loading,
    };
  },
};
</script>

<style>
.button-container {
  margin-top: 3px;
  padding: 6px;
}
.button {
  padding: 6px;
}
.button-2 {
  padding: 6px;
  margin-left: 3px;
  margin-right: 3px;
}
</style>