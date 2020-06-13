// Dummy code

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

// ////////////////////////////////////////////////

// HARD CODE

<script type="text/javascript"> 
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

</script>


// ////////////////////////////////////


function loadData(incident_race) {
    d3.json("sf_police_data.json").then(function(data) {
        var filteredData = data.filter(incident => incident.subject_race === incident_race)
        console.log(filteredData);

        var results = []
        filteredData.forEach(element => {
            var result = {}
            result["coordinates"] = [element.lat, element.lng]
            
            results.push(result)

        });
        return results;
    })
}
var hispanicData = loadData("hispanic");

