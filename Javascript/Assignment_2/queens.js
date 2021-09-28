class QueenAttack {
    constructor(qR, qC, oR, oC){
        this.qR = qR;
        this.qC = qC;

        this.oR = oR;
        this.oC = oC;
    }

    canQueenAttack(qR, qC, oR, oC)
    {
        if (qR == oR)
            return true;
 
        if (qC == oC)
            return true;
 
        if (Math.abs(qR - oR) == Math.abs(qC - oC))
            return true;
 
        return false;
    }
 
 
                  
    
}

var qR = 1, qC = 1;
var oR = 1, oC = 2;
     
var obj = new QueenAttack(qR, qC, oR, oC);
var ans = obj.canQueenAttack(qR, qC, oR, oC);
if(ans){
    console.log("can attack");
}
else
{
    console.log("can not attack");
}