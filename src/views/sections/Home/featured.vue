<template>
    <section class="feature-section">
        <h4>Featured on</h4>
        <div class="feature-container">
            <a href="https://www.instagram.com/lovefest.ph/" alt="Love fest" target="_blank">
                <img src="img/love-fest.png" alt="Love fest">
            </a>
             <a href="https://www.instagram.com/boutsofthesouth/" alt="Bouts South" target="_blank">
                <img src="img/bout-south.png" alt="Bouts South">
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
a:hover img{
    filter: grayscale(0);
    transition: filter 0.3s ease-in-out;
}


</style>