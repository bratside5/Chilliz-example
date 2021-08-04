<template>
  <div class="home">
    <Header msg="Block Chain Generator" />
    <GetChainValidity />
    <GenerateBlocks msg="Generate New Blocks In The Chain" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Globals/Header.vue";
import GenerateBlocks from "@/components/LatestBlocks/GenerateBlocks.vue";
import GetChainValidity from "../components/LatestBlocks/GetChainValidity.vue";

export default {
  name: "Home",
  components: {
    Header,
    GenerateBlocks,
    GetChainValidity,
  },
};
</script>

<style scoped>
</style>