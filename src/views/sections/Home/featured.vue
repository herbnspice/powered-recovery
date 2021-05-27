<template>
    <section class="feature-section">
        <h4>Featured on</h4>
        <div class="feature-container">
            <a href="https://www.instagram.com/lovefest.ph/" alt="Love fest" target="_blank">
                <img src="img/instagram-love-fest.png" alt="Love fest">
            </a>
             <a href="https://www.instagram.com/boutsofthesouth/" alt="Bouts South" target="_blank">
                <img src="img/instagram-bout-south.png" alt="Bouts South">
            </a>
             <a href="https://www.wheninmanila.com/32-awesome-filipino-startups-that-will-make-you-proud-to-be-pinoy/3/" alt="Bouts South" target="_blank">
                <img src="img/instagram-wheninmanila.png" alt="Bouts South">
            </a>
        </div>
    </section>
</template>
<style scoped>
.feature-section{
    background: #c75f03;
    margin-top: -30px;
    text-align: center;

}
.feature-section h4{
    font-weight: 800;
    text-transform:uppercase;
        margin-bottom: 30px;
    color: #ffffff;

}
.feature-container{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
}

img{
    filter: grayscale(1);
    transition: filter 0.3s ease-in-out;

}
a img{
    filter: grayscale(1);
    transform: scale(0.8);
    transition: all 0.3s ease-in-out;
    filter:  drop-shadow(2px 3px 6px #864104);
}
a:hover img{
    filter: grayscale(0);
    transform: scale(1);
    transition: all 0.3s ease-in-out;
    filter:  drop-shadow(2px 3px 6px #864104);

}


</style>