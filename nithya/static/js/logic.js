
function loadData(race) {
  var results = []
  
  d3.json("test.json",function(data) {
      var filteredData = data.filter(incident => incident.subject_race === race)

      filteredData.forEach(element => {
          var result = {}
          result["coordinates"] = [element.lat, element.lng]
          result["age"] = element.subject_age
          result["sex"] = element.subject_sex
          result["arrest"] = element.arrest_made
            
          results.push(result);
      });
    
  });
  return results;
}
  
  var hispanicData = loadData("hispanic");
  var blackData = loadData("black");
  var whiteData = loadData("white");
  var asianData = loadData("asian/pacific islander");

  console.log(hispanicData)
  
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    });

  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers:[streetmap]
  });

  for (var i = 0; i < hispanicData.length; i++) {
    L.marker(hispanicData.coordinates)
   .addTo(myMap);
  }
  
  