let data = require('./movies.json');
//console.log(data);

function actor_cast(data) {
    var a = [];
    for (var i=0, l=data.length; i<l; i++)
        if (a.indexOf(data[i].cast[0]) === -1 && data[i].cast[0] !== null)
            a.push(data[i].cast[0]);
    return a;
}
var na = actor_cast(data);
var act = [actor_cast(data)];


var b = [];
for (let j = 0; j < data.length; j++) {
    var element = data[j].cast[0];
    if(element!==undefined){
        b.push(element);
    }
}        



const l = act.map(item => item.length);
var art=[];

for (let i = 0; i < l; i++) {
    var ele = act[i];
    
      for (let j = 0; j < data.length; j++) {
        var element = b[j];
        if(ele===element){
           art.push(data[j].title);
           //console.log(data[j].title);
        }
        
    }
}


var genre_title = [];
for (let j = 0; j < data.length; j++) {
    var element = data[j].genres[0];
    if(element!==undefined){
        genre_title.push(element);
    }
}  


function genres_type(data) {
    var type_gener = [];
    for (var i=0, l=data.length; i<l; i++)
        if (type_gener.indexOf(data[i].genres[0]) === -1 && data[i].genres[0] !== null)
            type_gener.push(data[i].genres[0]);
    return type_gener;
}

var gen = genres_type(data);
var arr = [gen];


const r = gen.length;
var movies_genres=[];

for (let i = 0; i < r; i++) {
    var ele = arr[i];
    
      for (let j = 0; j < data.length; j++) {
        var element = genre_title[j];
        if(ele===element){
           movies_genres.push(data[j].title);
           //console.log(data[j].title);
        }
        
    }
}


let obj = {
    'actors': {
        'Name': na,
        'Movies': art
    },
    'Genres': {
        'Type': gen,
        'Movies':movies_genres
    }
}

//console.log(genres_type(data));
console.log(obj);