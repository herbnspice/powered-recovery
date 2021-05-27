<template>
  <div class="home">
        <nav>
             <img src="/img/logo.png" alt="logo">
        </nav>
        <main>
          <BMISecton />
        </main>
  </div>
</template>
<style scoped>
nav{
        background: #000;
    padding: 10px;
}
nav img{
    width:200px
}
</style>
<script>
import BMISecton from './sections/Home/bmi'
import { ref } from 'vue'

export default {
  components: {
    BMISecton,
  },
  setup(){
    const tru = ref(true)
    return  { tru }
  }
}
</script>