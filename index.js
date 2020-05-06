const rect= require('./rectangle');
function solveRect(l,b){
    rect(l,b,(err,rectangle)=>
    {
        if(err){
            console.log("ERROR",err.message);
        }
        else{
            console.log(rectangle.area(l,b));
        }
    });
    console.log("This statement after the call to rect()");
};
solveRect(1,5);
solveRect(-8,9);