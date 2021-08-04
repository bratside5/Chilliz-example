<template>
  <div class="container">
    <DurationSelect />
    <ButtonPanel
      btn_single="Add Single Block"
      btn_start="Start Block Generation"
      btn_stop="Stop Block Generation"
      btn_clear="Clear Data"
    />
    <BlockItemSkeleton />
    <BlockItem />
  </div>
</template>

<script>
import { ref, onMounted, provide } from "vue";
import BlockItem from "./BlockItem.vue";
import ButtonPanel from "./ButtonPanel.vue";
import BlockItemSkeleton from "./BlockItemSkeleton.vue";
import DurationSelect from "./DurationSelect.vue";

export default {
  name: "GenerateBlocks",
  components: { BlockItem, ButtonPanel, BlockItemSkeleton, DurationSelect },
  setup() {
    //Initialize empty array for block generation
    const createBlocks = ref([]);
    const running = ref(null);
    const loading = ref(null);
    const options = ref({
      selected: 10000,
      options: [
        { text: "10 Seconds", value: 10000 },
        { text: "25 Seconds", value: 25000 },
        { text: "1 minute", value: 60000 },
        { text: "5 Minutes", value: 60000 * 5 },
      ],
    });

    let intId;
    let run;
    const fetchData = async function () {
      try {
        const res = await fetch("http://localhost:3000/api/chain/add");
        const getData = await res.json();
        const { blockchain } = getData;
        createBlocks.value = blockchain;
      } catch (error) {
        console.log(error);
      }
    };

    function generatingBlocks() {
      loading.value = "Starting...";
      setTimeout(() => {
        loading.value = null;
      }, options.value.selected);
    }

    function addBlock() {
      generatingBlocks();
      intId = setInterval(() => {
        fetchData();
        run = true;
        running.value = run;
        console.log(options.value.selected);
      }, options.value.selected);
    }

    function stopBlockGeneration() {
      generatingBlocks();
      clearInterval(intId);
      running.value = null;
      loading.value = null;
      console.log(intId);
    }

    function addSingleBlock() {
      fetchData();
    }

    function clearBlocks() {
      window.location.reload();
    }

    onMounted(() => {});
    provide("createBlocks", createBlocks);
    provide("addSingleBlock", addSingleBlock);
    provide("clearBlocks", clearBlocks);
    provide("running", running);
    provide("stopBlockGeneration", stopBlockGeneration);
    provide("addBlock", addBlock);
    provide("generatingBlocks", generatingBlocks);
    provide("loading", loading);
    provide("options", options);

    return {};
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>