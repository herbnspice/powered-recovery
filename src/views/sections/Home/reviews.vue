<template>
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
</template>
<style scoped>
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

.reviews-section{
  background: #CD680E;
  color: #fff;
  padding: 50px 0px 150px;
  margin: 0;
}
</style>