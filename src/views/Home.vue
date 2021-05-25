<template>
  <div class="home">
        <Header />
        <main>
          <AboutSection />
          <FeatureSection/>
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
import Header from  '../components/Header.vue'
import Footer from  '../components/Footer.vue'
import AboutSection from './sections/Home/about.vue'
import FeatureSection from './sections/Home/featured.vue'
import ProgramSection from './sections/Home/program.vue'
import FitnessSection from './sections/Home/fitness.vue'
import ReviewSection from './sections/Home/reviews'
import BMISecton from './sections/Home/bmi'
import CalendarSection from './sections/Home/calendar'
import CoachSection from './sections/Home/coach'
import GallerySection from './sections/Home/gallery'
import PricingSeciton from './sections/Home/pricing'
import BookSecton from './sections/Home/book'
import { ref } from 'vue'

export default {
  components: {
    Header,
    Footer,
    AboutSection,
    ProgramSection,
    FeatureSection,
    FitnessSection,
    ReviewSection,
    BMISecton,
    CalendarSection,
    CoachSection,
    GallerySection,
    PricingSeciton,
    BookSecton
  },
  setup(){
    const tru = ref(true)
    return  { tru }
  }
}
</script>