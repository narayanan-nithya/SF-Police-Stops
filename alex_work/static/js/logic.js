var url = "http://127.0.0.1:5000/read-data";


  d3.json(url ,function(data) {

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

    // Store previously extracted data to array.
    var results = []

    // create function to return data on hispanic individuals only.
    function hispanic(person) {
      return person.race == "hispanic";
    }

    // Pass through results array and store hispanic data in variable
    var hispanicData = results.filter(hispanic);

    console.log(hispanicData);



  });



      // var filteredData = data.filter(incident => incident.subject_race === "hispanic")
      // hispanicData.push(filteredData);
      
      // console.log(filteredData);
      // var results = []

      // filteredData.forEach(element => {
      //     var result = {}
      //     result["coordinates"] = [element.lat, element.lng]
      //     result["age"] = element.subject_age
      //     result["sex"] = element.subject_sex
      //     result["arrest"] = element.arrest_made
      //     results.push(result);
      // });
      // console.log(results);
      // return results;
  // });




  // var blackData = loadData("black");
  // var whiteData = loadData("white");
  // var asianData = loadData("asian/pacific islander");
  // console.log(hispanicData)


//   var myMap = L.map("map", {
//     center: [37.09, -95.71],
//     zoom: 5
//   });

//   var lightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/light-v10',
//     accessToken: "pk.eyJ1IjoiYWx4cHJ5IiwiYSI6ImNrYW9saHZjNDA0Z3ozMG82cHZpcm0xbm8ifQ.yM3ZhZhGelQpcJBz0wtaiw"
// });

//   for (var i = 0; i < hispanicData.length; i++) {
//       L.marker(hispanicData[i].coordinates)
//         .bindPopup("<h3>Age: "+ h_data.age +"</h3><h3>Sex: " + h_data.sex +
//         "</h3><hr><h3>Arrest: " + h_data.arrest + "</h3>")
//         .addTo(myMap);
//     }
