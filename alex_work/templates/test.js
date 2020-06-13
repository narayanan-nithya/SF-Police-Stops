var data = JSON.parse(('{{ data | tojson }}'));

console.log(data);

var arrests = []

var noArrests = []

for (var i = 0; i < data.length; i++) {

    if (data[i].arrest_made == true) {
      arrests.push(data[i].arrest_made);
    }

      else {
        noArrests.push(data[i].arrest_made);
      }
    };

var totalArrests = arrests.length

var free = noArrests.length

console.log(totalArrests);

console.log(free);



