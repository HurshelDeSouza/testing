<script setup lang="ts">
//import { ref } from 'vue'


//const count = ref(0)
</script>

<template>
  <header class="p-2 text-bg-dark">
    <div class="container d-flex justify-content-center">
      <div class="d-flex flex-wrap">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item">
            <router-link to="/qrcode">
              <span class="nav-link text-white">QR Code</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img  class="iconHome" width="32" height="32" src="icons8-home.svg" />
            </router-link>     
          </li>
          <li class="nav-item">
            <router-link to="/changeicon">
              <span class="nav-link text-white">Change icon</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
