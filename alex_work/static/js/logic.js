var url = "http://127.0.0.1:5000/read-data";

var results = []

console.log(results);

  d3.json(url,function(data) {

   
    // Loop through mongodb data; combine 'lat'/'lng' columns into coordinates; retrieve other data.
    data.forEach(element =>  {
          var result = {}
          result["coordinates"] = [element.lat, element.lng]
          result["age"] = element.subject_age
          result["sex"] = element.subject_sex
          result["race"] = element.subject_race
          result["arrest"] = element.arrest_made
          results.push(result);
          
    });
   

    // create function to return data on hispanic individuals only.
    function hispanic(person) {
      return person.race == "hispanic";
    }

    // Pass through results array and store hispanic data in variable
    var hispanicData = results.filter(hispanic);

    // create function to return data on arrested hispanic individuals only.
    function arrestedHispanic(person) {
      return person.arrest == true;
    }

    // Pass through results array and store hispanic data in variable
    var arrestedH = hispanicData.filter(arrestedHispanic);


    console.log(arrestedH);



    // Create Leaflet map

    
    var myMap = L.map("map", {
      center: [37.76, -122.431297],
      zoom: 13
    });
  
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
  }).addTo(myMap);
  
    for (var i = 0; i < arrestedH.length; i++) {
      var location = arrestedH[i];
        L.marker(location.coordinates)
        .bindPopup("<h3>Age: "+ location.age +"</h3><h3>Sex: " + location.sex +
        "</h3><hr><h3>Arrest: " + location.arrest + "</h3>")
          .addTo(myMap);
      }

 
});