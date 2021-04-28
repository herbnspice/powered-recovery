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
</template>
<style scoped>

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
</style>