<template>
  <div class="home">
        <Header />
        <main>
          <AboutSection />
          <ProgramSection />
          <FitnessSection />
          <ReviewSection />
          <BMISecton />
        </main>
        <Footer/>
  </div>
</template>
<script>
import Header from  '../components/Header.vue'
import Footer from  '../components/Footer.vue'

import AboutSection from './sections/Home/about.vue'
import ProgramSection from './sections/Home/program.vue'
import FitnessSection from './sections/Home/fitness.vue'
import ReviewSection from './sections/Home/reviews'
import BMISecton from './sections/Home/bmi'


export default {
  components: {
    Header,
    Footer,
    AboutSection,
    ProgramSection,
    FitnessSection,
    ReviewSection,
    BMISecton
  },
  setup() {
    
  },
}
</script>