<template>
  <div class="home">
        <header> 
          <div class="container">
            <nav>
              <img src="/img/logo.png" alt="logo">
              <ul>
                <li> <a href="#"> About </a> </li>
                <li> <a href="#"> Programs  </a></li>
                <li> <a href="#"> Reviews </a></li>
                <li> <a href="#"> Schedules</a></li>
                <li> <a href="#"> Pricing </a></li>
                <li> <a href="#" class="btn"> Book </a></li>
              </ul>
            </nav>
            <p>
              <strong> BEAT</strong>
              EXPECTATIONS
            </p>
            <p>
              BE <strong>MORE</strong>
            </p>
          </div>
        </header>
        <main>
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
              <img src="/img/about.jpg" alt="" width="50%">
              <button class="btn book about"> Book a schedule with us </button>
              </div>
            </div>
          </section>
          <section>
            <div class="container">
                <div class="title-container">
                    <h2 alt="Programs" class="light"> Programs </h2>
                    <p class="sub-title center">
                      What we have to offer
                    </p>
                    <p class="sub-text center">Enjoy our progressive programs with world class fitness equipment,
                    trainers and nutrition counselors to help you 
                    transform your body and health.
                  </p>
                </div>
                <div class="programs-content-container">
                  <div class="programs-container">
                      <div class="programs-item-container">
                          <p class="program-title">HEALTH</p>
                          <p class="program-type">CARDIO</p>
                          <p class="program-content">CrossFit is a strength and conditioning workout
                          that is  made up of functional movement performed
                          at a high intensity level.</p>
                      </div>
                  </div>
                  <div class="programs-container">
                      <div class="programs-item-container">
                          <p class="program-title">HEALTH</p>
                          <p class="program-type">CARDIO</p>
                          <p class="program-content">CrossFit is a strength and conditioning workout
                          that is  made up of functional movement performed
                          at a high intensity level.</p>
                      </div>
                  </div>
                  <div class="programs-container">
                      <div class="programs-item-container">
                          <p class="program-title">HEALTH</p>
                          <p class="program-type">CARDIO</p>
                          <p class="program-content">CrossFit is a strength and conditioning workout
                          that is  made up of functional movement performed
                          at a high intensity level.</p>
                      </div>
                  </div>
                </div>
                <div class="container">
                                <button class="btn center"> Book a schedule with us </button>

                </div>
            </div>
          </section>
        </main>
        <footer>
          <p> Copywrite(c) 2017</p>
            <ul>
            <li class="grow-1"><a href="#" class=""> Home </a> </li>
            <li class="grow-2"> <a href="#" class=""> About </a></li>
            <li class="grow-3"> <a href="#" class=""> Gallery </a></li>
            <li class="grow-3"> <a href="#" class=""> Contact us </a></li>
          </ul>
        </footer>
  </div>
</template>
<style scoped>
:root {
  --blue-color: #FF8519;
}
*{
  font-family: 'Montserrat', sans-serif;  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Alignments  */
.center{
  text-align: center;
  margin: 0 auto;
}
.container{
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
}
nav{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
   align-items: flex-start;
   align-content: center;
}
nav img{
  width: 200px;
  margin-right: 20px;
}
nav ul {
  display: flex;
  align-items:flex-start;
  justify-content: space-between;
  background: #000;
  align-items: center;
    flex-wrap: wrap;
  
}
nav ul li{
  margin: 30px;
  color: #fff;
  font-weight: 100;
}
nav ul li:hover{
  color: #FF8519;
}
.btn{ 
  color:#FFF;
  background: #c75f03 ;
  padding: 10px 20px;
  border-radius: 4px ;
  font-weight: 600;
  display: block;
}
.btn.book.about{

    position: absolute;
    right: -20px;
    bottom: 35px;
    padding-right: 50px;
}
.btn.book.about::after{
    content: " ";
    background: url(/img/icons/schedule.svg);
    width: 20px;
    height: 20px;
    position: absolute;
    background-size: cover;
    right: 13px;
    bottom: 10px;
}
.btn:hover{
  background: #FF8519;
  transition: all 0.8s ease-out;
}
header{
  background: url(/img/Banner.jpg) no-repeat;
  height: 70vh;
  position: relative;
  display: flex;
}

header p{
  position: absolute;
}
header p{
  font-size: 3em;
  font-weight: 100;
  bottom:40%;
  left: 0px;
}
header p:nth-of-type(2){
  font-size: 6em;
  font-weight: 100;
  bottom: 30%;
  line-height: 80px;
  left: -10px;
}

header p strong {
  font-weight: 900;
}


@media (max-width: 980px){
  nav ul{
    display: none;
  }

  header p{
    bottom: 105px;
    padding: 5px 10px;
    line-height: 45px;

  }

  header p:nth-of-type(2){
    font-size: 5em;
    font-weight: 100;
    bottom: 30px;
    line-height: 80px;
  }
}

.about-section{
  background: #000;
  padding:20px 20px 120px 20px
}

.about-section p{
  color: #fff;
}

.about-content-container{
  display: flex;
}

.about-content-container img{
    margin: 10px 10px 10px 0px;
}
.about-content-container img{
    margin-top: -200px;
    position: relative;    
}

.programs-content-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0px;
}

.programs-container{
  background: url(/img/programs.jpg) no-repeat;
  background-size: cover;
  flex: 1;
  margin: 10px;
  padding: 180px 20px 20px 10px;
  border-radius: 5px;
  position: relative;

}

.programs-container::before{
  background: rgba(0,0,0,0.8);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: " ";
  position: absolute;
  z-index: 0;
    border-radius: 5px;

}
.programs-container:hover:before{
  background: rgba(0,0,0,0.9);
  transition: all 0.6s ease;

}
.programs-item-container{
      z-index: 1;
    position: relative;
}

.program-title{
  color: #F58826;
}
.program-type{
  font-size: 30px;
  font-weight: 900;
  color:#fff;
}
.program-content{
  color:#fff;
  font-size: 15px;
}

/* TYPOGRAPHY  */
h2{
  font-weight: 900;
  color:#232323;
  font-size: 10rem;
  display: block;
  position: relative;
  left: -35%;
  text-transform: uppercase;
}
h2.light{
    color:#f4f4f4;
}
h2.light::before{
    color: #232323;
}
h2::before{
  content: attr(alt);
  width: 200%;
  position: absolute;
  top:105px;
  left: 35%;
  font-size: 1.5rem;
  color: #d2d2d2;
}
h2::after{
  content: "";
  width: 200%;
  position: absolute;
  top:140px;
  left: 35%;
  border-bottom: 1px solid #FF8519
}

.sub-title{
    font-weight: 900;
    font-size: 2em;
    width: 50%;
    line-height: 57px;
    margin: -88px 0px 20px 0px;
    position: relative;
}

.sub-title.center{
    margin: -65px auto;
}
.sub-text {
  margin-top: 80px;
}
</style>