<template>
    <section>
        <div class="container">
            <h2 alt="Coaches" class="light"> Coaches</h2>
            <p class="sub-title center"> Meet your coaches</p>

            <div class="coach-container">
                <div class="coach-item">
                    <div class="text-container">
                        <img src="/img/c.jpg" alt="">
                        <p> Box Expert </p>
                    </div>
                </div>
                 <div class="coach-item">
                    <div class="text-container">
                        <img src="/img/c1.jpg" alt="">
                        <p> Box Expert </p>
                    </div>
                </div>
                <div class="coach-item">
                    <div class="text-container">
                        <img src="/img/c2.jpg" alt="">
                        <p> Box Expert </p>
                    </div>
                </div>
                 <div class="coach-item">
                    <div class="text-container">
                        <img src="/img/c3.jpg" alt="">
                        <p> Box Expert </p>
                    </div>
                    <div class="hover-container">
                        <p>COAH NAME </p>
                        <p class="title"> Physical Therapist</p>
                        <ul>
                            <li>
                                <img src="/img/icons/facebook.svg" alt="facebook">
                            </li>
                            <li>
                                <img src="/img/icons/instagram.svg" alt="instagram">
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        
    </section>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

    .coach-container{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .coach-item{

        margin:10px 20px;
        position: relative;
        overflow: hidden;
        max-height: 279px;
        flex: 1;

    }

    .coach-item:hover .text-container p{
        opacity: 0;
        animation: opacity 0.3s ease-in-out;
    }

    .coach-item .text-container p{
        bottom: 18px;
        left: 0%;
        z-index: 9;
        padding:10px 20px;
        border-radius: 5px;
        background: #fff;
        position: absolute;
        transform: translate(42%, 50%);
        opacity: 1;
    }
    .hover-container{
        opacity: 0;
    }
     .coach-item .hover-container{
        top: 0;
        position: absolute;
        background: rgba(0,0,0,0.6);
        width: 100%;
        overflow: hidden;
        height: 100%;
        padding: 40px 10px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: flex-end;
        align-content: center;
        opacity: 0;
        animation: opacity 0.3s ease-in-out;
    }

     .coach-item:hover .hover-container{
       
        opacity: 1;
        animation: opacity 0.3s ease-in-out;
    }

    .hover-container ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin: 10px 0px;
    }
    .hover-container p {
        color:#c75f03;
       font-weight: 900;
       text-align: center;
       width: 100%;
       text-align: center;
    }
    .hover-container p.title{
        color:#fff;
        font-weight: 100;
    }

    @include mobile{
        .coach-container{
            flex-wrap: wrap;
        }
        .coach-item{
            flex-basis: 100%;
            max-height: 420px;
        }
        .coach-item .text-container p{
                left: 20%;
        }
    }
</style>