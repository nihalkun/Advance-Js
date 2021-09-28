let data = require('./prize.json');

data.prizes.forEach(p => {
    if (p.year >= 2000 && p.year <=2019 && p.category === 'chemistry') {
       p.laureates.forEach((l) => {
        console.log(l.firstname);
        console.log(l.surname);
    });
  }
});