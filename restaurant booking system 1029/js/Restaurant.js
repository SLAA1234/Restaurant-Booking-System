class Restaurant extends Domer{
    resName = "";
    resTelNum = "";
    adress = "";
    resEmail = "";
    dishList = new DishList();
    weekOpeningHour = new WeekOpeningHour();
    theDayDish = new TodayDish(this.dishList.dishList);
     
    constructor(){
        super();
        this.resName = resName;
        this.resTelNum = resTelNum;
        this.adress = adress;
        this.resEmail = resEmail;
        this.weekOpeningHour = weekOpeningHour;
        this.theDayDish = theDayDish;  
    }

    onBookTableClick(){
        return window.location.href = "http://127.0.0.1:5500/indexBooking.html"
    }

    onWeekClick(){
        return window.location.href = "http://127.0.0.1:5500/indexWeekMenu.html"
    }
    render(html){
        return html`
            <section>
                <div class="center">
                    <h3>Welcome to ${this.resName}!</h3>
                    <hr>
                </div>

                <div id='register_login'>
                    <button type="button">Register Account</button>
                    <button type="button">Log In</button>
                    <hr>
                </div>

                <div class="flex-button" >    
                    <div><button class="table-button" type="button" click="onWeekClick">Week Menu</button></div>
                    <div><button class="table-button" type="button" click="onBookTableClick">Book A Table</button></div> 
                </div>

                <hr>
                <div class="dish-info"><br>
                    <div>${this.theDayDish}</div>
                    <div><br>
                        <br>${this.weekOpeningHour}<hr>
                        <br>Telephone Number: ${this.resTelNum}<br>
                        <br>Adress: ${this.adress}<br>
                        <br>Email: ${this.resEmail}<br>    
                    </div>   
                </div>
                <hr>
                <div class="footer">Lisa wang OOP kurs2  Inlämningsuppgift</div>
            </section>
        `
    }
}
let resName = "Lisa Restaurant";
let resTelNum = "0790798888";
let adress = "stralsundvage 13";
let resEmail = "HelloWorld@gmail.com";

new Restaurant();