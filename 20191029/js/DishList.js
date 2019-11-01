class DishList extends Domer {
    _dishList = [];
    todayDishPic = [
        "/images/0.jpg",
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg"
    ];
    
    constructor(){
        super();
        this._dishList.push(new Dish("Braised Leeks with Mozzarella", this.todayDishPic[0]));
        this._dishList.push(new Dish("Lamb Salad with Fregola", this.todayDishPic[1]));
        this._dishList.push(new Dish("Malted Custard French Toast", this.todayDishPic[2]));
        this._dishList.push(new Dish("Island Duck with Mulberry Mustard", this.todayDishPic[3]));
        this._dishList.push(new Dish("Pasta with Lamb", this.todayDishPic[4]));
        this._dishList.push(new Dish("Pappardelle with Sea Urchin", this.todayDishPic[5]));
        this._dishList.push(new Dish("Vegan", this.todayDishPic[6]));
    }

    getDishList(){
        let result="";
        for(let Dish of this._dishList){
            result += `
            <section id="list">
            <div>${Dish.dishName}</div>
            <img src="${Dish.dishPic}">   
            <br>
            </section>
            `
        }
        return result;
    }

    render(html){
        return html`
            <div id="dish-list">    
                ${this.getDishList()}
            </div>
        `
    }
}
