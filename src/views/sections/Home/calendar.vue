<template>
    <section class="calendar-section">
        <div class="container">
            <h2 alt="Class Schedule">
                SCHEDULE 
            </h2>
            <div class="calendar-container">
                <div class="days">
                                        <div></div>

                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                    <div>Sunday</div>
                </div>
                <div class="calendar-rows">
                    <div class="time"> 
                        <p> 6:00 </p>
                    </div>
                     <div class="schedule"> 
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule">
                        
                    </div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                </div>  
                <div class="calendar-rows">
                    <div class="time"> 
                        <p> 6:00 </p>
                    </div>
                     <div class="schedule"> 
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                </div>  
                <div class="calendar-rows">
                    <div class="time"> 
                        <p> 6:00 </p>
                    </div>
                     <div class="schedule"> 
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                </div>  
                <div class="calendar-rows">
                    <div class="time"> 
                        <p> 6:00 </p>
                    </div>
                     <div class="schedule"> 
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                    <div class="schedule"></div>
                    <div class="schedule">
                        <p class="type">Health</p>
                        <p class="slots">3 Slots left</p>
                        <p class="time"> 6:00 - 7:00</p>
                        <p class="coach"> Coach Roach</p>
                    </div>
                </div>  
    
            </div>
                            <button class="btn book"> Book a Schedule with us</button>

        </div>
    </section>
</template>
<style scoped>
.calendar-section{
    background: #000;
    margin-bottom: 0;
}
.calendar-container{
    display: flex;
    color: #fff;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex   : 1;
    margin-bottom: 30px;
}
.calendar-container .calendar-rows{
    display: flex;
    color: #fff;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-basis : 100%;
}
.calendar-container .days{
    display: flex;
    color: #fff;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-basis: 100%;
    font-size: 12px;

}
.calendar-container .days div{
    display: flex;
    color: #fff;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    flex: 1;
    text-align: center;
    align-items: center;
}
.calendar-container .calendar-rows div{
    display: flex;
    color: #fff;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
    padding: 20px;
    align-items: center;
    border : solid #272727 1px;
}

p{
    font-size: 10px;
}
.time p{
    font-size: 20px;
}
.schedule .type{
    font-weight: 700;
    text-transform: uppercase;
}
.schedule .coach{
    font-weight: 700;
    text-transform: uppercase;
    color: #a7a1a1v;
}
</style>