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
            <section> 

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

.container{
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
}
nav{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
}
.btn:hover{
  background: #FF8519;
  transition: all 0.8s ease-out;
}
header{
  background: url(/img/Banner.png) no-repeat;
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
</style>