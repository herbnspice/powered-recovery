<template>
     <section class="programs-section">
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
</template>
<style scoped>

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
</style>