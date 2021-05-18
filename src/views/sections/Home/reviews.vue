<template>
    <section class="reviews-section">
        <div class="container">
            <h2 alt="Reviews" class="light-secondary"> Reviews</h2>
            <div class="carousel-avatars">
                <a v-for="( review, index ) in reviews"
                :key="index"
                :href="review.url"
                target="_blank"
                :data-index="index"
                :class="{ active : index == 0}"
                @click.prevent='onChangeSlide(index)'>
                    <img :src="review.avatar" :alt="review.name" crossorigin="anonymous">
                </a>
            </div>
            <div class="carousel-container" v-for="( review, index ) in reviews" :key="review.name" :data-index="index" :class="{'active' : index == 0 }"> 
                <div class="carousel-item">
                    <div class="carousel-item-img">
                      <a :href="review.url" target="_blank">
                        <img :src="review.avatar" :alt="review.name" crossorigin="anonymous">
                        <p class="name"> {{ review.name }}</p>
                        <p> {{ review.profession }}</p>
                      </a>
                    </div>
                    <div class="carousel-item-content">
                    <p> {{ review.review}} </p>
                    </div>
                </div>
            </div>
            <div class="carousel-item-pagination-container">
                <a class="carousel-item-pagination-item"
                v-for="( review, index ) in reviews" :key="index" href="#"
                :data-index="index"
                @click.prevent='onChangeSlide(index)'
                :class="{ active : index == 0}"></a>
            </div>
        </div>
    </section>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const reviews = ref([
      {
      avatar: "/img/review/rockytecture.jpg",
      name: "@rockytecture",
      profession: "Artist",
      url : 'https://www.instagram.com/rockytecture/',
      review: 'Hands Down ! Best decision I have ever made to train with Powered Recovery coming from a self taught body building environment, Powered Recovery taught me the value of a well educated and professional Coach, it has humbled me to be a better athlete. Arigatou Sensei Paul .The Powered Recovery Community is diverse, from young to old , from skinny to plus size cause being fit and healthy is not about age, shape, size or gender, it is about the dedication, discipline, determination and passion for the sport. Thank you Powered Recovery for the 8 months of positive learning experience. This is just the beginning of my fitness journey and I’m looking forward for more years with the community 💪💪 Definitely 5 star'
      },
      {
        avatar: "/img/review/joshcraigchabon.jpg",
        name: "@joshcraigchabon",
        profession: "Athlete",
        url: "https://www.instagram.com/joshcraigchabon/",
        review: 'Love the individualised approach on treatment no matter the background of injury and performance need. ⭐️⭐️⭐️⭐️⭐️⭐️'
      },
      {
        avatar: "/img/review/thekentan.jpg",
        name: "@thekentan",
        url: "https://www.instagram.com/thekentan/",
        profession: "Philippine Strength and Conditioning Coach",
        review: '5 out of 5! I only trust 2 people with my Recovery and one of them is Paul. He explains why I got hurt or why I’m hurting. Helped me during ingame competition specially in Davao where we first met.'
      },
       {
        avatar: "/img/review/ajmpareja.jpg",
        name: "@ajmpareja",
        profession: "MD-MBA",
        url: "https://www.instagram.com/ajmpareja/",
        review: 'My experience with powered recovery is topnotch. The coaches were easily reachable and readily available. They were very thorough in explaining the procedures and I feel at ease being a Healthcare worker myself. Would totally recommend 10/10!'
      },
      {
        avatar: "/img/review/banzonjansen.jpg",
        name: "@banzonjansen",
        profession: "Crossfit L1 Coach",
        url: "https://www.instagram.com/banzonjansen/",
        review: '10... Super excellent..Powered recovery team is the best physio team that i ever met. They understand your needs as a person, they explain the situation, and they are not madamot in info on how to make things better. Friendly and skillful team, i reccommend 10***** stars!!!!'
      },
       {
        avatar: "/img/review/sobrevinas_kat.jpg",
        name: "@sobrevinas_kat",
        profession: "Real Estate Agent",
        url: "https://www.instagram.com/sobrevinas_kat/",
        review: 'I first heard about Paul and powered recovery from a friend who did post ACL surgery rehab with them. And the first time I met him was during the love fest event in 2020. Paul and his team really took care of us that day! They spoiled the athletes with different recovery modalities. All I can say is that I felt 100% recovered the day after the competition! Pandemic happened and training at home took its toll on my body. My first issue was pain in my inner quad. I was afraid it was mcl or acl but Paul was kind enough to make a thorough assessment online!!! He gave me the assurance that it’s nothing serious and I just need to incorporate mobility and strengthening drills in my training. I slowly built my back and front squat. 1 RM now is 215 lbs and 185 lbs respectively without any pain!'
      },
    ])
    

    const setSlideInterval = setInterval( () => {
      const activeEl =document.querySelector(`.carousel-container.active`) 
      const activeAvatarEl = document.querySelector(`.carousel-avatars a.active`)
      const activePaginationEl =  document.querySelector(`.carousel-item-pagination-item.active`)
      let activeIndexEl = activeEl.getAttribute('data-index');


      console.log( activeIndexEl, reviews.value.length )
      if( activeIndexEl == reviews.value.length -1 ){
        activeIndexEl = 0
      } else {
        activeIndexEl++
      }
      activeEl.classList.remove('active')
      activeAvatarEl.classList.remove('active')
      activePaginationEl.classList.remove('active')

      const slideEl = document.querySelector(`.carousel-container[data-index='${activeIndexEl}'`)
      const slideAvatarEl = document.querySelector(`.carousel-avatars a[data-index='${activeIndexEl}'`)
      const paginationEl = document.querySelector(`.carousel-item-pagination-item[data-index='${activeIndexEl}']`)


      slideEl.classList.add('active')
      slideAvatarEl.classList.add('active')
      paginationEl.classList.add('active')
    
    }, 1000 )


    const onChangeSlide = ( activeIndex ) => {
      clearInterval(setSlideInterval)
      const activeEl = document.querySelector(`.carousel-container.active`)
      const slideEl = document.querySelector(`.carousel-container[data-index='${activeIndex}']`)
      const activeAvatarEl = document.querySelector(`.carousel-avatars a.active`)
      const paginationEl = document.querySelector(`.carousel-item-pagination-item[data-index='${activeIndex}']`)
      const slideAvatarEl = document.querySelector(`.carousel-avatars a[data-index='${activeIndex}'`)

      const activePaginationEl =  document.querySelector(`.carousel-item-pagination-item.active`)
      
      slideEl.classList.add('active')

      activeAvatarEl.classList.remove('active')
      activeEl.classList.remove('active')

      activePaginationEl.classList.remove('active')
      paginationEl.classList.add('active')
      slideAvatarEl.classList.add('active')

    }

    return { reviews,onChangeSlide}
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

/* CAROUSEL */
.carousel-container{
  display: flex;
  position: absolute;
  display: none;
  opacity: 0;
}
.carousel-container.active{
  position: relative;
  display: block;
  animation: fade 0.3s ease-in-out;
  opacity: 1;
}
.carousel-avatars {
  display: flex;
  margin-bottom: 120px;
  justify-content: center;
  flex-wrap: wrap;
}
.carousel-avatars a {
  margin: 20px;
}

.carousel-avatars a.active img {
  filter: grayscale(0);
  box-shadow: #9dff00 0px 2px 20px;

}
.carousel-avatars a:hover img {
  filter: grayscale(0);
  transition: all 0.3s ease-in-out;
  box-shadow: #9dff00 0px 2px 20px;

}

.carousel-avatars a img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  filter: grayscale(1);
  border: solid #fff 2px;
  box-shadow: rgba(51,255,0,0) 0px 2px 20px;

}

@keyframes fade {
  from {
    opacity:0.4;
  }
  to {
    opacity:1;
  }
}


.carousel-item{
   display: flex;
  justify-content: flex-start;
    flex-direction: row;
}

.carousel-item-img{
  align-items: center;
  flex:1;
  text-align: center;
   position: relative;
}

.carousel-item-img img{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  margin-bottom: 10px;
}

.carousel-item-img:hover a::after{
  box-shadow: #33ff00 0px 2px 20px;
  transition: box-shadow 0.3s ease-in-out;
}
.carousel-item-img a::after{
  background: linear-gradient(45deg, #f9964d, #df3969, #c52e91 );
  content: "";
  position: absolute;
  width: 110px;
  height: 110px;
  z-index: 0;
  border-radius: 50%;
  left: 50px;
  top: -5px;
  box-shadow: rgba(51,255,0,0) 0px 2px 20px;
  transition: box-shadow 0.3s ease-in-out;

}
.carousel-item-img p.name{
  font-weight: bolder;
  padding: 5px;
}
.carousel-item-content{
 flex:4;
}

.carousel-item-content p{
  font-size: 28px;
  text-align: left;
  position: relative;
  padding:10px;
}

.carousel-item-content p::before{
  height: 50px;
  position: absolute;
  width: 50px;
  content: " ";
  top: -40px;
  left: 0;
  background: url(/img/icons/qoutation.svg) no-repeat;
  background-size: contain;

}
.carousel-item-content p::after{
  height: 50px;
  position: absolute;
  content: " ";
  right: 0;
  bottom: 0;
  width: 50px;
  background: url(/img/icons/qoutation-neg.svg) no-repeat;
  background-size: contain;
}
.carousel-item-pagination-container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  
}
.carousel-item-pagination-item{
  display: flex;
  width: 10px;
  height: 10px;
  background: #E3AC7A;
  border-radius: 50px;
  margin: 5px;
}

.carousel-item-pagination-item.active{
  background: #F8EADD;
}

.reviews-section{
  background: #CD680E;
  color: #fff;
  padding: 50px 0px 150px;
  margin: 0;
}
@include mobile{
  .carousel-item{
    margin-top: 80px;
    flex-wrap: wrap;
  }
  .carousel-item-img{
    flex: 1 1 100%;
    margin-bottom: 40px;
  }
  .carousel-item-content p{
    padding: 20px;
    font-size: 20px;
  }
  .carousel-item-content p::before{
      top: -20px;
    left: 20px;
  }
   .carousel-item-content p::after{
    right: 20px;
    bottom: -20px;
  }
  .carousel-item-img a::after{
  left: 35%;
  }
}
</style>