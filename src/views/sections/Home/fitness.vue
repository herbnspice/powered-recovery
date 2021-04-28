<template>
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
</template>
<style scoped>
.fitness-goal-section{
  padding: 50px;
  background: #000;
  color: #fff;
  text-align: center;
  margin: 0px;
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
</style>