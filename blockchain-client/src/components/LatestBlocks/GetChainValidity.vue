<template>
  <p class="" v-if="validity !== false">
    Chain Is: <span class="valid">{{ validate }}</span>
  </p>
  <p class="" v-else-if="validity === false">
    Chain Is: <span class="invalid">Invalid</span>
  </p>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const validity = ref(null);
    const validate = ref("");
    async function checkValidity() {
      try {
        const res = await fetch("http://localhost:3000/api/chain");
        const getData = await res.json();
        const validity = getData;
        if (validity !== false) {
          validate.value = "Valid";
        }
      } catch (error) {
        console.log(error);
      }
    }
    onMounted(() => {
      checkValidity();
    });

    return {
      validity,
      validate,
    };
  },
};
</script>

<style scoped>
.valid {
  color: #42b983;
  font-weight: 600;
}
.invalid {
  color: #c5452f;
  font-weight: 600;
}
</style>