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


// /////////////////////////////////

d3.json(url, function (json) {
  
  console.log(json);

});  


////////////////////////////

.bindPopup("<h3>Age: "+ arrest_vis.age +"</h3><h3>Sex: " + arrest_vis.sex +
"</h3><hr><h3>Arrest: " + arrest_vis.arrest + "</h3>");

//////////////


function loadData(incident_race) {
  d3.json(url,function(data) {
      var filteredData = data.filter(incident => incident.subject_race === incident_race)
      //console.log(filteredData);
      var results = []
      filteredData.forEach(element => {
          var result = {}
          result["coordinates"] = [element.lat, element.lng]
          result["age"] = element.subject_age
          result["sex"] = element.subject_sex
          result["arrest"] = element.arrest_made
          
          results.push(result)
      });
      // console.log(results.length);
      return results;
  });
};
var hispanicData = loadData("hispanic");
var blackData = loadData("black");
var whiteData = loadData("white");
var asianData = loadData("asian/pacific islander");

console.log(hispanicData)


///////////////////////////////////////////

function loadData() {
  d3.json(url,function(data) {
      var filteredData = data.filter(incident => incident.subject_race === "hispanic")
      console.log(filteredData);
      // var results = []
      filteredData.forEach(element => {
          var result = {}
          result["coordinates"] = [element.lat, element.lng]
          result["age"] = element.subject_age
          result["sex"] = element.subject_sex
          result["arrest"] = element.arrest_made
          
          hispanicData.push(result);
      });
      // console.log(results.length);
      // return results;
  });
};
var hispanicData = []

console.log(hispanicData);


///////////////////////

d3.json(url ,function(data) {

var results = []
console.log(results);

data.forEach(element =>  {
      var result = {}
      result["coordinates"] = [element.lat, element.lng]
      result["age"] = element.subject_age
      result["sex"] = element.subject_sex
      result["race"] = element.subject_race
      result["arrest"] = element.arrest_made
      results.push(result);
});

});

////////////////


<!-- My JS Code-->
<script type="text/javascript" src="../static/js/logic.js"></script>


