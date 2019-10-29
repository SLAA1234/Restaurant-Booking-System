class Dish extends Domer{
    dishPic = '';
    dishName = "";
   
    constructor(dishName, dishPic){
        super();
        this.dishPic=dishPic;  
        this.dishName = dishName;   
    }

    render(html){
        return html`
            <div>
                <br><br><img src="/images/2.jpg"><br><br>
                ${this.dishName}   
            </div>
        `
    }
}