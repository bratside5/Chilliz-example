<template>
  <div v-if="loading != null" class="">
    <p class="">{{ loading }}</p>
    <ul class="list">
      <div class="card-container">
        <div class="card">
          <div class="additional">
            <div class="user-card">
              <div class="profile">
                <img src="" alt="" class="profile-img" />
              </div>
              <div class="currency">
                <!-- <p class="">${{ latest.data.latestBalance }}</p> -->
              </div>
            </div>
          </div>
          <div class="general">
            <!-- <h1>{{ latest.data.first }} {{ latest.data.last }}</h1>
            <p>{{ latest.data.date }} {{ latest.data.time }}</p> -->
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const loading = inject("loading");
    return {
      loading,
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
}
.list .list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px;
  padding-bottom: 3px;
}
.hash {
  font-size: 12px;
}
.profile-img {
  border: gray 1px solid;
  border-radius: 50%;
  box-shadow: gray;
  margin-top: 5px;
  margin-bottom: 5px;
}
.user-card {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  height: 100%;
  padding: 12px;
}
.currency {
  height: 100%;
  width: auto;
  font-size: 24px;
  color: #fff;
}

.card {
  /* display: flex; */
  width: auto;
  height: 100%;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  margin: 1.5rem;
}

.card h1 {
  text-align: left;
  font-size: 16px;
}

.card .additional {
  width: auto;
  height: auto;
  background: linear-gradient(#42b983, #5ad1a2);
  z-index: 2;
}

.general {
  width: auto;
  height: auto;
  text-align: left;
  margin-left: 10px;
  padding: 16px;
  font-size: 14px;
}
</style>