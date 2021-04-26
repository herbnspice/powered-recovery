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
          <section class="fitness-goal-section">
             <div class="container ">
                  <p class="sub-title center">
                    Set your Fitness goals
                  </p>
                  <p> After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination. </p>
                  <div class="fitness-container">
                    <div class="fitness-item">
                      <img src="/img/icons/dumbell.svg" alt="dumbell">
                      <p>Quality and Sanitized Equipments</p>
                    </div>
                    <div class="fitness-item">
                      <img src="/img/icons/health.svg" alt="health">
                      <p>Healthy Nutrition Plan</p>
                    </div>
                    <div class="fitness-item">
                      <img src="/img/icons/heart-dumbell.svg" alt="heart-dumbell">
                      <p>Daily Unique WODS</p>
                    </div>
                  </div>
              </div >
          </section>
          <section class="reviews-section">
            <div class="container">
              <h2 alt="Reviews" class="light-secondary"> Reviews</h2>
                <div class="carousel-container">
                    <div class="carousel-item">
                      <div class="carousel-item-img">
                          <img src="/img/gino.png" alt="Reviewer-1">
                          <p class="name"> Gian Carlo Orallo Mercado</p>
                          <p>@gino.boom</p>
                      </div>
                      <div class="carousel-item-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Aenean aliquet maximus tellus. Duis volutpat rutrum dolor, 
                          quis convallis velit tristique vel.
                        </p>
                      </div>
                    </div>
                </div>
                <div class="carousel-item-pagination-container">
                  <div class="carousel-item-pagination-item active"></div>
                  <div class="carousel-item-pagination-item"></div>
                  <div class="carousel-item-pagination-item"></div>
                  <div class="carousel-item-pagination-item"></div>
                </div>
            </div>
            
          </section>
          <section class="bmi-section">
            <div class="container">
              <h2 alt="BMI" class="light-tertiary">
                BMI
              </h2>
               <p class="sub-title center">
                      Know your BMI
                    </p>
                    <p class="sub-text center">It is importrant to know your BMI to avoid health risk for certain diseases such as 
heart disease, high blood pressure,  type 2 diabetes, gallstones, breathing problems, and certain cancers
                  </p>
            </div>
            <div class="container">
                <div class="bmi-container">
                  <div class="bmi-chart-container">
                    <h3> BMI Chart</h3>
                    <div class="bmi-table">
                        <div class="col">
                          <div class="row"> BMI</div>
                          <div class="row"> Below 18.5</div>
                          <div class="row"> 18.5 - 24.9 </div>
                          <div class="row"> 25.0 -  29.9 </div>
                          <div class="row"> 30.0 and above</div>
                        </div>
                        <div class="col">
                          <div class="row"> Weight Status </div>
                          <div class="row"> Underweight</div>
                          <div class="row"> Healthy </div>
                          <div class="row"> Overweight </div>
                          <div class="row"> Obese  </div>
                        </div>
                    </div>
                    <p> * BMR Metabolic Rate / BMI Body Mass Index </p>
                  </div>
                  <div class="bmi-calculator-container">
                      <h3> Calculate your BMI</h3>
                      <form action="#">
                          <div class="form-group">
                            <input type="number" name="height" id="height" placeholder="Height/cm">
                          </div>
                            <div class="form-group">
                            <input type="number" name="weight" id="weight" placeholder="Weight/kg">
                          </div>
                          <div class="break"></div>
                            <div class="form-group">
                            <input type="number" name="age" id="age" placeholder="Age/kg">
                          </div>
                          <div class="form-group">
                            <select name="gender" id="gender">
                              <option value="male">Male</option>
                              <option value="male">Female</option>
                            </select>
                          </div>
                          <div class="break"></div>
                           <div class="form-group">
                            <select name="activity" id="activity">
                              <option value="male">What is your activity factor?</option>
                              <option value="male">Female</option>
                            </select>
                          </div>
                          <div class="break"></div>
                          <div class="form-group">
                            <button class="btn scale"> Calculate</button>
                          </div>
                      </form>
                      <div class="calculate-status-container">
                        <img src="/img/icons/obese.svg" alt="results">
                        <p> You are obese</p>
                        <p> Your BMI is 1076.39. BMR 625 kcal/day, and   BMR w/Activity Factor 968.75 kcal/day</p>
                      </div>
                       <div class="calculate-recomend-container">
                        <p> We Recommend to take action </p>
                        <button class="btn book center"> Book a schedule with us</button>
                      </div>
                  </div>
                </div>
            </div>
          </section>
        </main>
        <footer>
          <div class="container">
            <div>
              <img src="/img/logo.png" alt="logo">
            </div>
            <div>
              <ul>
              <li class="grow-1"><a href="#" class=""> Home </a> </li>
              <li class="grow-2"> <a href="#" class=""> About </a></li>
              <li class="grow-3"> <a href="#" class=""> Gallery </a></li>
              <li class="grow-3"> <a href="#" class=""> Contact us </a></li>
            </ul>
            </div>
            <div>
              <button class="btn book"> Book a schedule with us</button>
            </div>
          
          </div>
         
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
section{
  padding:50px;
  margin-bottom: 30px;
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
  position: relative;
}

.btn.book{

    padding-right: 50px;
}

.btn.book.about{

    position: absolute;
    right: -20px;
    bottom: 35px;
}
.btn.scale{
  padding-right: 45px;
}
.btn.scale::after{
  content: " ";
    background: url(/img/icons/scale.svg);
    width: 20px;
    height: 20px;
    position: absolute;
    background-size: cover;
    right: 13px;
    bottom: 10px;


}
.btn.book::after{
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

.calculate-status-container{
  background: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: space-evenly;
  padding:10px;
  margin: 20px 0px 10px 0px ;
  align-items: center;
  box-shadow: #e8e8e8 0px 4px 9px 2px;
  
}

.calculate-status-container img{
  width: 30px;
  margin: 10px
}

.calculate-status-container p{
  margin: 10px;
}

.calculate-status-container p{
  font-size: 14px;
  font-weight: 900;
  text-align: center;
}
.calculate-status-container p:last-child{
  font-size: 13px;
  font-weight: 400;
  flex: 3;
  text-align: center;
}

.calculate-recomend-container{
  padding: 20px;
  text-align: center;
}
.calculate-recomend-container p{
    font-size: 14px;

}

.calculate-recomend-container .btn{
  margin-top: 20px;
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

footer{
  padding: 50px;
  background: #000;
  color: #fff;
  display: flex;
}
footer img{
  width:250px;
}
footer div{
  flex: 1;
  display: flex;
  align-items: center;
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
    padding:20px
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

.fitness-goal-section{
  padding: 50px;
  background: #000;
  color: #fff;
  text-align: center;
  margin: 0px;
}
.fitness-goal-section .sub-title.center{
  margin: 0 auto;
}
.fitness-container{ 
  display: flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
  align-items: center;
}
.fitness-item{
  text-align: center;
  align-items: center;
  padding: 50px 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.fitness-item img{
  width: 50px;
  display: block;
  margin: 20px auto;
}
.reviews-section{
  background: #CD680E;
  color: #fff;
  padding: 50px 0px 150px;
  margin: 0;
}
.bmi-section{
  margin:0;
}


.dark{
  background: #000;
  color: #fff;
}
/* CAROUSEL */
.carousel-container{
  display: flex;
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
}
.carousel-item-img img{
  width: 100px;
  height: 100px;
  margin: 0 auto;
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

.bmi-section{
    background: #F8F7F8;
}
.bmi-section h3{
  font-size: 16px;
  font-weight: 400;

}
.bmi-container{
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px ;
}

.bmi-chart-container{
  flex:2; 
  margin: 0px 10px
}
.bmi-calculator-container{
  flex: 2;
}
.bmi-table{
  display: flex;
  flex-wrap: wrap;
  margin: 0px 40px 0px 0px;
}
.bmi-table .col{
  flex: 1;
  margin: 10px;
}
.bmi-table .col:first-child{
  border-right: dashed 1px #000;
  margin-right:0px;
 
}
.bmi-table .col:last-child{
  margin-left:0px;
}
.bmi-table .row{
  border-bottom: dashed 1px #000;
  padding: 20px;
}
.bmi-table .row:first-child{
   font-weight: 800;
   font-size: 14px;
   text-transform: uppercase;
}
.bmi-table p{
  display: block;
}
.bmi-calculator-container{
  display: block;

}
.bmi-calculator-container form{
 display: flex;
 flex-wrap: wrap;
 justify-content: space-evenly;
}

.form-group{
  padding: 5px;
  flex:1;
}

.form-group input, .form-group select{
  padding:10px;
  font-size: 10px;
  background: #fff;
  color: #949494;
  width: 100%;
}

.break{
  flex-basis: 100%;
}
/* TYPOGRAPHY  */
h2{
  font-weight:900;
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

h2.light-secondary{
    color:#D37B2D;
}
h2.light-secondary::before{
    color: #f4f4f4;
}

h2.light-tertiary{
    color: #ffff;
} 
h2.light-tertiary::before{
    color: #000;
}

h2::before{
  content: attr(alt);
  width: 200%;
  position: absolute;
  top:105px;
  left: 35%;
  font-size: 1.5rem;
  color: #d2d2d2;
  font-weight: 400;
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
  margin-top: 70px;
}
</style>