<template>
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
                    <form action="#" @submit.prevent="onCalculateBMI">
                        <div class="form-group">
                          <input type="number" name="height" id="height" placeholder="Height/cm" v-model="height" required>
                          <span class="error"> This is required </span>
                        </div>
                        <div class="form-group">
                          <input type="number" name="weight" id="weight" placeholder="Weight/kg"  v-model="weight" required>
                           <span class="error"> This is required </span>
                        </div>
                        <div class="break"></div>
                        <div class="form-group">
                          <input type="number" name="age" id="age" placeholder="Age/kg" v-model="age" required>
                           <span class="error"> This is required </span>
                        </div>
                        <div class="form-group">
                        <select name="gender" id="gender"  v-model="gender" required>
                            <option value="">What is your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                         <span class="error"> This is required </span>
                        </div>
                        <div class="break"></div>
                        <div class="form-group">
                          <select name="activity" id="activity" v-model="activity" required>
                              <option value="">What is your activity factor?</option>
                              <option value="1.2">Little No Exercise / Sedentary Lifestyle / Desk Job </option>
                              <option value="1.375">Little Exercise 1 - 3 times a week </option>
                              <option value="1.55">Moderate Exercise 6 - 7 times a week </option>
                              <option value="1.725">Hard Exercise everday or exercising 2x/day</option>
                              <option value="1.9">Hard exercise 2 or more times per day or training for marathon, or triathlon, etc. </option>
                          </select>
                           <span class="error"> This is required </span>
                        </div>
                        <div class="break"></div>
                        <div class="form-group">
                        <button class="btn scale" @click.prevent="onCalculateBMI"> Calculate</button>
                        </div>
                    </form>
                    <div class="calculate-status-container" v-if="bmi">
                    <img src="/img/icons/man-severe-obese.svg" alt="results" 
                      v-show="weightGroup == 'Very Severely Obese'">
                    <img src="/img/icons/man-obese.svg" alt="results" 
                      v-show="
                        weightGroup == 'Severely Obese' ||
                        weightGroup == 'Overweight'">
                    <img src="/img/icons/man-overweight.svg" alt="results" 
                      v-show="weightGroup == 'Overweight'">
                    <img src="/img/icons/man-normal.svg" alt="results" 
                      v-show="weightGroup == 'Healthy'">
                     <img src="/img/icons/man-underweight.svg" alt="results" 
                      v-show="weightGroup == 'Underweight' ||
                        weightGroup == 'Very Severely Underweight' || 
                        weightGroup == 'Severely Underweight'">
                    <p> You are {{weightGroup }}</p>
                    <p> Your BMI is  <span>{{bmi}} </span> . BMR <span> {{bmr}} </span> cal/day, and BMR w/Activity Factor <span> {{activityModifier}} </span> cal/day</p>
                    </div>
                    <div class="calculate-recomend-container" v-if="bmi">
                    <p> We Recommend to take action </p>
                    <button class="btn book center"> Book a schedule with us</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ref } from 'vue' ;
export default {
  setup() {
    const height = ref(null);
    const weight = ref (null);
    const age = ref(null);
    const activity = ref( '');
    const bmi  = ref(null)
    const bmr  = ref(null)
    const gender = ref( '' )
    const weightGroup = ref(null)
    const activityModifier = ref(null)
    const error = ref( null )
    const onCalculateBMI =() => {
        let m =  height.value / 100 
        if( weight.value > 0 && m > 0 ){
          bmi.value  = (weight.value / Math.pow(m,2)).toFixed(2)
        }
        getWeihtGroup()
        onCalculateBMR()

    }

    const checkRequired = ( inputArray ) =>{
      Object.keys( inputArray ).map( key => {
        if( inputArray[key] === '' ||
            inputArray[key] === null) {
              let span = document.querySelector(`.form-group [name=${key}] + span`)
            if( span ){
              span.classList.add('show')
              setTimeout( () => {
                span.classList.remove('show')
              }, 2000)
            }
           error.value = true
        } else{
          error.value = false
        }
      })
    }

    const onCalculateBMR = () => {
      
      checkRequired({
        gender: gender.value, 
        weight: weight.value,
        height: height.value,
        age: age.value,
        activity: activity.value
      })
      if(!error.value ){
        if( gender.value == 'female'){
          bmr.value = ( 655 + (9.6 *  weight.value ) + (1.8 * height.value ) - (4.7 * age.value ) ).toFixed(2)
        } else {
          bmr.value = ( 66 + (13.7 * weight.value ) + (5 *  height.value ) - (6.8 * age.value) ).toFixed(2)
        }
          activityModifier.value  = ( activity.value * bmr.value ).toFixed(2)
      }
    }
    const getWeihtGroup = () =>{
       if (bmi.value == 0) {
                return "";
            } else if (bmi.value < 15) {
                weightGroup.value =  "Very Severely Underweight";
            } else if (bmi.value >= 15 && bmi.value < 16) {
                weightGroup.value = "Severely Underweight";
            } else if (bmi.value >= 16 && bmi.value < 18.5) {
                weightGroup.value = "Underweight";
            } else if (bmi.value >= 18.5 && bmi.value < 25) {
                weightGroup.value = "Healthy";
            } else if (bmi.value >= 25 && bmi.value < 30) {
                weightGroup.value = "Overweight";
            } else if (bmi.value >= 30 && bmi.value < 35) {
                weightGroup.value = "Moderately Obese";
            } else if (bmi.value >= 35 && bmi.value < 40) {
                weightGroup.value = "Severely Obese";
            } else if (bmi.value > 40) {
                weightGroup.value = "Very Severely Obese";
            }
    }

    return { bmi, bmr,  height, weight, age, activity, gender, weightGroup, activityModifier,  onCalculateBMI, error }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.bmi-section{
  margin:0;
}
.bmi-section{
    background: #F8F7F8;
    padding-bottom: 50px;
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

.calculate-status-container p span{
  font-weight: 400;
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

@include mobile{
  .bmi-table{
    margin: 0px 0px 20px 0px;
  }
  .bmi-table .col{
    margin: 0px;
  }

  .bmi-table .row{
    padding: 8px;
  }
  .calculate-status-container{
    flex-wrap: wrap;
  }

  .calculate-status-container img{
    flex-basis: 100%;
    max-width: 30px;
  }
  .calculate-status-container p{
    flex-basis: 100%;
  }

  .bmi-chart-container{
  flex:1 2 100%; 
}

  
}


</style>