
// https://github.com/Rumaisha-Bashar45/basic.js
// number-1
    function kilometerToMeter(x){
        var y=Math.abs(x);

    var result= (y*1000);
        return result;
    }

    var op=kilometerToMeter(9)
    console.log(op);

// number-2
    function budgetCalculator(a,b,c){
        var m= Math.abs(a);
        var n= Math.abs(b);
        var o= Math.abs(c);

    var watch=50*m;
    var mobile= 100*n;
    var laptop= 500*o;
    var sum= watch+mobile+laptop;
    return sum;
    }

    var budget=budgetCalculator(3,5,2)
    console.log(budget);



// number3

    function hotelCost(n){
        if(n<=10){
            var price= n*100;
        }
        else if(n>10&&n<=20){

            var price= n*80;
        }
        else if(n>20){
            var price= n*50;
        }
        return price;
    }

// number 4
    var total=hotelCost(6);
    console.log(total);
    var total1=hotelCost(13);
    console.log(total1);
    var total2=hotelCost(43);
    console.log(total2);


    function megaFriend(names){
    
    var max= names[0];
    for(var j=0;j<names.length;j++){
        var largeName= names[j];
        if(max<largeName){
            max= largeName;
        }
        
    }
    return max;
    }
    var dudes=megaFriend(["arwa",'sadib','rashadi','zaimanati','rafayet'])
    console.log(dudes);

