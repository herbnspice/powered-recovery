<template>
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
</template>
<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

nav{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: center;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: 104px;
}
nav.animate{
  height: 0px;
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

@include mobile{
  nav ul{
    display: none;
  }

  header p{
    bottom: 105px;
    padding: 5px 10px;
    line-height: 45px;
    font-size: 2.5em;
    color: #fff;
  }

  header p:nth-of-type(2){
    font-size: 4em;
    font-weight: 100;
    bottom: 30px;
    line-height: 80px;
  }
}


</style>