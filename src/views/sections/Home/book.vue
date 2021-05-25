<template>
    <section class="appointment-container">
        <div class="container">
            <h2 alt="Book an appointment" class="light"> Book </h2>
            <div class="book-container">
                <div class="book-form-container">
                    <form action="">
                        <div class="form-group">
                            <input type="text" placeholder="Full Name" >
                        </div>
                        <div class="form-group">
                            <input type="number" placeholder="Age">
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Email Address">
                        </div>
                          <div class="form-group">
                            <input type="number" placeholder="Address">
                        </div>
                        <div class="form-group">
                            <input type="number" placeholder="Phone number">
                        </div>
                         <div class="form-group">
                             <button class="btn"> Book a schedule with us </button>
                        </div>
                    </form>
                   
                </div>
                 <div class="status-container ">
                    <img src="/img/icons/strong-heart.svg" alt="">
                    <div class="status-text-container">
                        <h3>You have made a good decision! </h3>
                        <p>Thank you for booking with us please wait for our call
 to finalize your booking! See your on the other side!</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';
.appointment-container{
    background: #F8F7F8;
    margin: 0;
}
.book-form-container{
    width: 50%;
    position: relative;
    display: flex;
}
.book-form-container form{
    width: 100%;
    flex: 1;
}
.book-form-container::after{
    width: 100%;
    content: "";
    position: absolute;
    background:url(/img/icons/schedule-orange.svg) no-repeat center;
    height: 100%;
    top: 0;
    right: -109%;
    background-size: contain;
}
.status-container{
    display: none; //flex
    flex-wrap: wrap;
    background: #fff;
    padding: 30px;
    border-radius: 2px;
    margin-top: 30px;
    box-shadow: #f5e9e9 0px 2px 12px 0px;
}
.status-text-container{
    margin: 30px;
    flex: 1;
}
.status-text-container h3{
    margin: 0px;
    font-size: 30px;
    font-weight: bold;
    color: #bf610d;

}

@include mobile{
    .book-form-container{
        width: 100%;
        margin-top:20px;
    }
    .status-container{
        text-align: center;
        align-items: center;
        justify-content: center;
    }
}
</style>