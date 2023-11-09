<script setup lang="ts">
import { ref } from 'vue'

const file = ref<File>()

const onClick = async ()=> {
  if( file.value === undefined) {
    alert('Debe de seleccionar un archivo')
    return;
  }
  try {
    let data = new FormData()
    data.append('FileDetails', file.value)
    data.append('IsPublic','true')
    
    const response = await fetch('https://opensalus-api.azurewebsites.net/api/media/upload',{
      method: 'POST',
      body: data,
      headers:{
        'accept':'*/*',
        //'Content-Type':'multipart/form-data'
      }
    })
    if( response.status === 200) {
      alert('se ha subido correctamentte la imagen');
      const inputFile  =  document.querySelector('.uploadFile') as HTMLInputElement
      (document.querySelector('.iconHome') as HTMLImageElement).setAttribute('src', URL.createObjectURL( file.value))
      inputFile.value = ''
    }
  } catch (error) {
    alert( (error as Error).message)
  }
}

const onFileChanged = ( $event: Event)=>{
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
  }
}

</script>

<template>
    <div class="p-3">
      <input class="form-control uploadFile" type="file" @change="onFileChanged($event)" 
        accept="image/png, image/jpeg"
      />
    </div>
    <button @click="onClick" class="btn btn-primary">Enviar</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
