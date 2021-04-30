<template>
  <div class="home">
        <Header />
        <main>
          <AboutSection />
          <ProgramSection />
          <FitnessSection />
          <ReviewSection />
          <BMISecton />
          <CalendarSection />
          <CoachSection />
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
import CalendarSection from './sections/Home/calendar'
import CoachSection from './sections/Home/coach'
export default {
  components: {
    Header,
    Footer,
    AboutSection,
    ProgramSection,
    FitnessSection,
    ReviewSection,
    BMISecton,
    CalendarSection,
    CoachSection
  },
  setup() {
    
  },
}
</script>