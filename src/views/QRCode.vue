<script setup lang="ts">
  import { ref } from 'vue'
  import.meta

  const content = ref<string>('')

const onClick = async ()=> {
  try {
    const contentTrimmed = content.value.trim()
    const url = new URL('https://opensalus-api.azurewebsites.net/api/qrcode')
    url.search = new URLSearchParams([['qrText',contentTrimmed]]).toString()

    const response = await fetch( url, {
      method: 'GET',
    })

    const imageBlob = await response.blob()
    document.querySelector('.qrcode_preview')?.setAttribute('src', URL.createObjectURL(imageBlob))
    content.value = ''

  } catch( err) { 
    console.log( (err as Error).message)
  }
  
}
</script>

<template>
  
  <div class="row p-3">
    <div class="col-auto">
      <textarea class="form-control" type="text"  v-model="content"/>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3" 
        :disabled="content.trim().length === 0"
        @click="onClick"
      >Generar código QR</button>
    </div>
    <div>
      <img  class="qrcode_preview"/>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
