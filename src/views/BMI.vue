<template>
  <div class="home">
        <Header />
        <main>
          <AboutSection />
          <ProgramSection />
          <ReviewSection />
          <FitnessSection />
          <BMISecton />
          <CalendarSection />
          <CoachSection />
          <GallerySection />
          <PricingSeciton />
          <BookSecton showMe=""/>
        </main>
        <Footer/>
  </div>
</template>
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