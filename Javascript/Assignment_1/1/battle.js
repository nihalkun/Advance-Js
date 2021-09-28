let data = require('./battles.json');

//let arr = data.slice();

var max_attacker_king = -1000 , max_defender_king = -1000 , max_region = -1000 , win = 0 , loss = 0 ;
var name_attacker_king , name_defender_king , name_region ;
var name_1 = [];
var unique_battle_type = [];
var unique_battle="";
for (let i = 0; i < data.length; i++) {

    const element_attacker_king = data[i].attacker_king;
    const element_defender_king = data[i].defender_king;
    const element_region = data[i].region;
    const element_name = data[i].name;
    const element_outcome_win = "win";
    const element_outcome_loss = "loss";
   // const element_unique_battle = data[i].battle_type;
    var count_attacker_king=0 , count_defender_king=0 , count_region=0 , count_name=0  ;
    

    for (let j = 0; j < data.length; j++) {

        if(element_attacker_king === data[j].attacker_king)
        {
            count_attacker_king++;
            if(max_attacker_king < count_attacker_king){
                max_attacker_king = count_attacker_king;
                name_attacker_king = element_attacker_king;
            }
        }
        
        if(element_defender_king === data[j].defender_king)
        {
            count_defender_king++;
            if(max_defender_king < count_defender_king){
                max_defender_king = count_defender_king;
                name_defender_king = element_defender_king;
            }
        }

        if(element_region === data[j].region)
        {
            count_region++;
            if(max_region < count_region){
                max_region = count_region;
                name_region = element_region;
            }
        }

        if(element_name === data[j].name)
        {
            count_name++;
        }

        if(element_outcome_win === data[j].attacker_outcome)
        {
            win++;
        }
        
        if(element_outcome_loss === data[j].attacker_outcome)
        {
            loss++;
        }

    }
    
    if(count_name===1){
        name_1.push(element_name);
    }
}


function unique(data) {
    var a = [];
    for (var i=0, l=data.length; i<l; i++)
        if (a.indexOf(data[i].battle_type) === -1 && data[i].battle_type !== '')
            a.push(data[i].battle_type);
    return a;
}
var unique_battle_type = unique(data);

var average_defender_size;
for (let i = 0; i < data.length; i++) {
    var sum = 0; 
    sum += data[i].defender_size;    
}
average_defender_size = sum/data.length;

var min_defender_size = 100000;
for (let i = 0; i < data.length; i++) {
    if(data[i].defender_size!==null){
        min_defender_size = Math.min(data[i].defender_size , min_defender_size); 
    }
}

var max_defender_size = -10000;
for (let i = 0; i < data.length; i++) {
    if(data[i].defender_size!==null){
        max_defender_size = Math.max(data[i].defender_size , max_defender_size); 
    }
}



var obj = {
    'most_active' : {
        'attacker_king': name_attacker_king,
        'defender_king': name_defender_king,
        'region'       : name_region,
        'name'         : name_1
    },
    'attacker_outcome': {
         'win' : win,
         'loss': loss      
    },
    'battle_type':unique_battle_type,
    'defender_size': {
        'average': average_defender_size,
        'min'    : min_defender_size,
        'max'    : max_defender_size
    }    
    };
console.log(obj);