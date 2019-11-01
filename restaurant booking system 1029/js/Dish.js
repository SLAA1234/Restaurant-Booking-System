class Dish extends Domer{
    dishPic = "";
    dishName = "";
   
    constructor(dishName, dishPic){
        super();
        this.dishPic=dishPic;  
        this.dishName = dishName;   
    }

    render(html){
        return html`
            <div>
                <br><br><img src="${this.dishPic}"><br><br>
                ${this.dishName}   
            </div>
        `
    }
}