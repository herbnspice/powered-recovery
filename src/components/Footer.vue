<template>
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
</template>
<style  lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

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
@include mobile{
  footer{
    padding: 20px;
  }
  footer .container{
    flex-wrap:  wrap;
  }
  footer .container div{
    flex-basis: 100%;
    padding: 10px;
    align-items: center;
    text-align: center;
  }
   footer .container div ul{
    width: 100%;
  }

}
</style>