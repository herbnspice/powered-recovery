<template>
    <section class="gallery-section">
        <div class="container">
            <h2 alt="Gallery" class="light">
                Gallery
            </h2>
            <div class="container">
                <ul class="gallery">
                    <li>
                        <img src="/img/gallery1.jpg" alt="Gallery 1" srcset="">
                    </li>
                    <li>
                        <img src="/img/gallery2.jpg" alt="Gallery 1" srcset="">
                    </li>
                    <li>
                        <img src="/img/gallery3.jpg" alt="Gallery 1" srcset="">
                    </li>
                    <li>
                        <img src="/img/gallery4.jpg" alt="Gallery 1" srcset="">
                    </li>
                    <li>
                        <img src="/img/gallery5.jpg" alt="Gallery 1" srcset="">
                    </li>
                    <li>
                        <img src="/img/gallery6.jpg" alt="Gallery 1" srcset="">
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
.gallery{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.gallery li img{
    flex: 1 0 auto;
    height: 250px;
    line-height: 150px;
    background: #EC985A;
    color: white;
    margin: 0 1rem 1rem 0;
    text-align: center;
    font-family: system-ui;
    font-weight: 900;
    font-size: 2rem;
    flex: 1 0 auto;
}
</style>