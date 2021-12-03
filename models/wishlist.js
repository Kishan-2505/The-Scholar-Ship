module.exports= function wishlist(oldWishlist){
    this.items = oldWishlist.items  || {};
    this.totalQuantity = oldWishlist.totalQuantity || 0;

    this.add = function(item,id){
        var storedItem = this.items[id];

        if(storedItem){
            console.log("item already exist"); 
        }
        else{
            storedItem = this.items[id] = {item: item , quantity: 0};
            storedItem.quantity++;
             this.totalQuantity++;
        }
    };


    this.removeItem = function(id){
       
        this.totalQuantity-= this.items[id].quantity;
        delete this.items[id];  
    }
    this.generateArray = function(){
        var arr=[];
         for(var id in this.items){
             arr.push(this.items[id]); 
         }
         return arr;
    };
};