<template>
    <section class="pricing-section">
        <div class="container">
            <h2 alt="Pricing" >
                Pricing
            </h2>
            <p class="sub-title center text-white">
                Pricing
            </p>
            <p class="center text-white">
                We offer affordable prices and quality service,  support and equipment 
to achieve your fitness goals!
            </p>
        </div>
        <div class="container price-container">
            <div class="price-item">
                <img src="img/icons/barbel-blue.svg" alt="health" class="price-icon">
                <h3>
                    <span class="starts"> &nbsp;</span>
                    <span class="currency">PHP</span> 
                    <span class="price"> 800 </span>
                    <span class="per"> PER MONTH</span>
                </h3>
                <img src="/img/icons/healthy-heart.svg" alt="">
                <p class="title"> Health </p>
                <p>
                    Aims to add longetivity to young 
                    adults and help them perform
                    daily activities with ease 
                    through  basic strength and conditioning
                </p>
            </div>
             <div class="price-item">
                <img src="img/icons/barbel-blue.svg" alt="health" class="price-icon">
                <h3>
                    <span class="starts"> &nbsp;</span>
                    <span class="currency">PHP</span> 
                    <span class="price"> 800 </span>
                    <span class="per"> PER MONTH</span>
                </h3>
                <img src="/img/icons/weightlifting.svg" alt="">
                <p class="title"> Active </p>
                <p>
                    Aims to add longetivity to young 
                    adults and help them perform
                    daily activities with ease 
                    through  basic strength and conditioning
                </p>
                <p class="notes">
                    25% Off for Student
                    20% uniformed officials ( PNP /BFP/ AFP )
                </p>
            </div>
             <div class="price-item">
                <img src="img/icons/barbel-blue.svg" alt="health" class="price-icon">
                <h3>
                    <span class="starts"> Starts at</span>
                    <span class="currency">PHP</span> 
                    <span class="price"> 800 </span>
                    <span class="per"> PER MONTH</span>
                </h3>
                <img src="/img/icons/boxing.svg" alt="">
                <p class="title"> Box in a the Box </p>
                <p>
                    Aims to add longetivity to young 
                    adults and help them perform
                    daily activities with ease 
                    through  basic strength and conditioning
                </p>
            </div> 
        </div>
        <button class="btn book center"> Book a Schedule with us</button>
        <div class="container notes-container">
            <p>
                * Strictly no walk-in policy. Only booked appointment are entertained.
Physical distancing should be observed.
Health and declaration will be monitored.
Minimum health monitoring will be enforced.
Equipment Used are regularly sanitized after use.
            </p>
        </div>

    </section>
</template>
<style scoped>
.pricing-section{
    background: #2B2A2A;
    margin-bottom: 0;
}
.price-container{
    color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
}
.price-item{
    flex: 1;
    margin: 10px;
    padding: 30px;
    background: #000;
    border-radius: 5px;
    text-align: center;
    position: relative
}

.price-item img{
    display: block;
    margin: 20px auto;
}

.price-item h3{
    display: flex;
    align-items: flex-end;
    justify-content: center;
        flex-flow: wrap;
}

.price-item h3 span.price{
    font-size: 4rem;
    font-weight: 900;
    margin: 10px;
    line-height: 33px;
}
.price-item h3 span.per{
    flex-basis: 100%;
    color: #FF861A;
}
.price-item h3 span.starts{
    flex-basis: 100%;
    color: #FF861A;
    margin: 5px 50px;
}
.price-item img{
    height: 60px;
}
.price-item .price-icon{
       height: 40px;
    position: absolute;
    right: 20px;
    top: 0;
}
.price-item .title{
    font-size: 1.4rem;
    text-transform: uppercase;
    margin: 10px;
}
.price-item .notes{
    margin-top: 50px;
    font-size: 0.8rem
}
.notes-container{
    margin-top: 50px;
    color: #fff;
}
</style>