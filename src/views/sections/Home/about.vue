<template>
    <section class="about-section"> 
        <div class="container">
            <div class="title-container">
                <h2 alt="About us "> About us </h2>
                <p class="sub-title"> Sports and Perfomance</p>
            </div>
            <div class="about-content-container">
                <p>
            We are a unique team of fitness professionals
            who aims to provide quality care and promotion
            for sustainable healthy lifestyle.
            </p>
            <img src="/img/about.jpg" alt="" >
            <BookComponent />
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>

@import '@/assets/scss/_mixins.scss';

.about-section {
  background: #000;
}
.about-section p { 
  color: #fff;
}
.about-content-container{
  display: flex;
  flex-wrap: wrap;
}
.about-content-container p{
    margin: 10px 10px 10px 0px;
      flex: 1;   
}
.about-content-container img{
    margin: 10px 10px 10px 0px;
}
.about-content-container img{
    margin-top: -200px;
    position: relative; 
    max-height: 350px;
  
}

@include mobile{
    .about-content-container img{
        margin: 40px 0px;
        width: 100%;
    }
}
</style>
<script>
import BookComponent from '@/components/Book.vue'
export default {
    components: {
        BookComponent
    },
    setup() {
        
    },
}
</script>