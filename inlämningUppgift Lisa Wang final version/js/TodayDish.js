class TodayDish extends Domer {
    
    today = new Date().getDay();
    todayDish = "";

    constructor(dishList){
        super(); 
        this.todayDish= dishList[this.today];     
    }

    render(html){
        return html`
            <div>   
                ${this.todayDish}   
            </div>
        `
    }
}


