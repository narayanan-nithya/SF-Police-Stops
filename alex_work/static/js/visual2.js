var url = "http://127.0.0.1:5000/mongo2-data";

///////////// DROP DOWN OPTIONS /////////////////////

// Set variable to select where data should go
var idSelect = d3.select("#selDataset");

var gender = ["All", "Male", "Female"];


gender.forEach((sex, index) => {
       
  var idSelection = idSelect.append("option");

  idSelection.text(sex);

  idSelection.attr("value", `${index}`);

});

//////////////         INIT ARRESTS BAR FUNCTION              /////////////////////////

// Initiailize function to set first bar chart to be displayed when opening the webpage;
// set to index 0 in the samples object. 

function initBar() {

  d3.json(url,function(data) {

// HISPANIC CODE //

    // create function to return data on HISPANIC individuals only.
    function hispanic(person) {
      return person.subject_race == "hispanic";
    }

    // Pass through data array and store HISPANIC data in variable
    var hispanicData = data.filter(hispanic);

    // create function to return data on ARRESTED HISPANIC individuals only.
    function hispanicArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED HISPANIC data in variable
    var arrestH = hispanicData.filter(hispanicArrested);  
    
    // Variable to hold the number of times HISPANIC individuals are arrested
    var ah = arrestH.length;    


// BLACK CODE //

    // create function to return data on BLACK individuals only.
    function black(person) {
      return person.subject_race == "black";
    }

    // Pass through data array and store BLACK data in variable
    var blackData = data.filter(black);

    // create function to return data on ARRESTED BLACK individuals only.
    function blackArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED BLACK data in variable
    var arrestB = blackData.filter(blackArrested);  
    
    // Variable to hold the number of times BLACK individuals are arrested
    var aB = arrestB.length;   




// WHITE CODE //


    // create function to return data on WHITE individuals only.
    function white(person) {
      return person.subject_race == "white";
    }

    // Pass through data array and store WHITE data in variable
    var whiteData = data.filter(white);

    // create function to return data on ARRESTED WHITE individuals only.
    function whiteArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED WHITE data in variable
    var arrestW = whiteData.filter(whiteArrested);  
    
    // Variable to hold the number of times WHITE individuals are arrested
    var aW = arrestW.length;   



// ASIANPAC CODE //

    // create function to return data on ASIAN/PAC ISLANDER individuals only.
    function asianPac(person) {
      return person.subject_race == "asian/pacific islander";
    }

    // Pass through data array and store ASIAN/PAC ISLANDER data in variable
    var asianPacData = data.filter(asianPac);

    // create function to return data on ARRESTED ASIAN/PAC individuals only.
    function asianPacArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED ASIAN/PAC data in variable
    var arrestA = asianPacData.filter(asianPacArrested);  
    
    // Variable to hold the number of times ASIAN/PAC individuals are arrested
    var aA = arrestA.length;   

  


// UNKNOWN CODE //

    // create function to return data on OTHER individuals only.
    function other(person) {
      return person.subject_race == "other";
    }

    // Pass through data array and store OTHER data in variable
    var otherData = data.filter(other);

    // create function to return data on ARRESTED OTHER individuals only.
    function otherArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED OTHER data in variable
    var arrestO = otherData.filter(otherArrested);  
    
    // Variable to hold the number of times OTHER individuals are arrested
    var aO = arrestO.length;   





    // Plotting Bar Chart
    var trace1 = {
      x: ["White", "Hispanic", "Black", "Asian/Pacific Islander",
          "Other"],
      y: [aW, ah, aB, aA, aO],
      type: "bar"
    };
    
    var data = [trace1];
    
    var layout = {
      title: "Total Number of Arrests by Ethncity",
      xaxis: { title: "Ethncity"},
      yaxis: { title: "# of Police Stops"}
    };
    
    Plotly.newPlot("bar", data, layout);



  
  });
};

initBar();

/////////////            BAR CHART FUNCTION FOR EVENT LISTENER      ///////////////////////////////

function buildBar () {

  d3.json(url,function(data) {

      // Get the "value" attribute from the user's selection, which is equivalent to the index 
      // position of the selected ID in the "samples" object of the json data.

      var userSelection = idSelect.property("value");

      // Change the selection value from a string to integer
      var selectionIndex = parseInt(userSelection);

     // create function to return data on selected GENDER only.
     function gender(person) {
       if (selectionIndex == 2) {
        return person.subject_sex == "female";
       }
       else if (selectionIndex == 1) {
         return person.subject_sex == "male";
       }
       else {
         return person
       }
    };
    
// HISPANIC CODE //

    // create function to return data on HISPANIC individuals only.
    function hispanic(person) {
      return person.subject_race == "hispanic";
    }

    // Pass through data array and store HISPANIC data in variable
    var hispanicData = data.filter(hispanic);

    // create function to return data on ARRESTED HISPANIC individuals only.
    function hispanicArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED HISPANIC data in variable
    var arrestH = hispanicData.filter(hispanicArrested);  
    
    // Pass through data to gender function to get data of the selected GENDER
    var hispanicGender = arrestH.filter(gender);

    var hispanicGenderStops = hispanicGender.length;


// BLACK CODE //

    // create function to return data on BLACK individuals only.
    function black(person) {
      return person.subject_race == "black";
    }

    // Pass through data array and store BLACK data in variable
    var blackData = data.filter(black);

    // create function to return data on ARRESTED BLACK individuals only.
    function blackArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED BLACK data in variable
    var arrestB = blackData.filter(blackArrested);  
    
    // Pass through data to gender function to get data of the selected GENDER
    var blackGender = arrestB.filter(gender);

    var blackGenderStops = blackGender.length;




// WHITE CODE //


    // create function to return data on WHITE individuals only.
    function white(person) {
      return person.subject_race == "white";
    }

    // Pass through data array and store WHITE data in variable
    var whiteData = data.filter(white);

    // create function to return data on ARRESTED WHITE individuals only.
    function whiteArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED WHITE data in variable
    var arrestW = whiteData.filter(whiteArrested);  
    
    // Pass through data to gender function to get data of the selected GENDER
    var whiteGender = arrestW.filter(gender);

    var whiteGenderStops = whiteGender.length;


// ASIANPAC CODE //

    // create function to return data on ASIAN/PAC ISLANDER individuals only.
    function asianPac(person) {
      return person.subject_race == "asian/pacific islander";
    }

    // Pass through data array and store ASIAN/PAC ISLANDER data in variable
    var asianPacData = data.filter(asianPac);

    // create function to return data on ARRESTED ASIAN/PAC individuals only.
    function asianPacArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED ASIAN/PAC data in variable
    var arrestA = asianPacData.filter(asianPacArrested);  
    
    // Pass through data to gender function to get data of the selected GENDER
    var asianPacGender = arrestA.filter(gender);

    var asianPacGenderStops = asianPacGender.length;
  


// UNKNOWN CODE //

    // create function to return data on OTHER individuals only.
    function other(person) {
      return person.subject_race == "other";
    }

    // Pass through data array and store OTHER data in variable
    var otherData = data.filter(other);

    // create function to return data on ARRESTED OTHER individuals only.
    function otherArrested(person) {
      return person.arrest_made == true;
    }

    // Pass through data array and store ARRESTED OTHER data in variable
    var arrestO = otherData.filter(otherArrested);  
    
    // Pass through data to gender function to get data of the selected GENDER
    var otherGender = arrestO.filter(gender);

    var otherGenderStops = otherGender.length;  





    // Plotting Bar Chart
    var trace1 = {
      x: ["White", "Hispanic", "Black", "Asian/Pacific Islander",
          "Other"],
      y: [whiteGenderStops, hispanicGenderStops, blackGenderStops, asianPacGenderStops, otherGenderStops],
      type: "bar"
    };
    
    var data = [trace1];
    
    var layout = {
      title: "Total Number of Arrests by Ethncity",
      xaxis: { title: "Ethncity"},
      yaxis: { title: "# of Arrests"}
    };
    
    Plotly.newPlot("bar", data, layout);



      });
  };



///////////////////////// STATIC TOTAL BAR FUNCTION //////////////////////////

function staticBar() {

  d3.json(url,function(data) {
  
// HISPANIC CODE //
    // create function to return data on HISPANIC individuals only.
    function hispanic(person) {
      return person.subject_race == "hispanic";
    }

    // Pass through data array and store HISPANIC data in variable
    var hispanicData = data.filter(hispanic);

    // Variable to hold the number of times hispanic individuals 
    var hispanicStops = hispanicData.length;

    console.log(`Hispanic Stops: ${hispanicStops}`);

    // create function to return data on MALE HISPANIC individuals only.
    function hispanicMale(person) {
      return person.subject_sex == "male";
    }

    // Pass through data array and store MALE HISPANIC data in variable
    var hispanicDataM = hispanicData.filter(hispanicMale);    



// BLACK CODE //

    // create function to return data on BLACK individuals only.
    function black(person) {
      return person.subject_race == "black";
    }

    // Pass through data array and store BLACK data in variable
    var blackData = data.filter(black);

    // Variable to hold the number of times BLACK individuals 
    var blackStops = blackData.length;    

    console.log(`Black Stops: ${blackStops}`);


// WHITE CODE //


    // create function to return data on WHITE individuals only.
    function white(person) {
      return person.subject_race == "white";
    }

    // Pass through data array and store WHITE data in variable
    var whiteData = data.filter(white);

    // Variable to hold the number of times WHITE individuals 
    var whiteStops = whiteData.length;  

    console.log(`White Stops: ${whiteStops}`);

// ASIANPAC CODE //

    // create function to return data on ASIAN/PAC ISLANDER individuals only.
    function asianPac(person) {
      return person.subject_race == "asian/pacific islander";
    }

    // Pass through data array and store ASIAN/PAC ISLANDER data in variable
    var asianPacData = data.filter(asianPac);

    // Variable to hold the number of times ASIAN/PAC individuals 
    var asianPacStops = asianPacData.length;  

    console.log(`Asian/Pac Stops: ${asianPacStops}`);


// UNKNOWN CODE //

    // create function to return data on OTHER individuals only.
    function other(person) {
      return person.subject_race == "other";
    }

    // Pass through data array and store OTHER data in variable
    var otherData = data.filter(other);

    // Variable to hold the number of times OTHER individuals 
    var otherStops = otherData.length;  

    console.log(`Other Stops: ${otherStops}`);



    // Plotting Bar Chart
    var trace1 = {
      x: ["White", "Hispanic", "Black", "Asian/Pacific Islander",
          "Other"],
      y: [whiteStops, hispanicStops, blackStops, asianPacStops, otherStops],
      type: "bar"
    };
    
    var data = [trace1];
    
    var layout = {
      title: "Total Number of Police Stops by Ethncity",
      xaxis: { title: "Ethncity"},
      yaxis: { title: "# of Police Stops"}
    };
    
    Plotly.newPlot("gauge", data, layout);

});

};

staticBar();


/////////////            BAR CHART FUNCTION FOR EVENT LISTENER      ///////////////////////////////

function dynamicBar () {

  d3.json(url,function(data) {

      // Get the "value" attribute from the user's selection, which is equivalent to the index 
      // position of the selected ID in the "samples" object of the json data.

      var userSelection = idSelect.property("value");

      // Change the selection value from a string to integer
      var selectionIndex = parseInt(userSelection);

     // create function to return data on selected GENDER only.
     function gender(person) {
       if (selectionIndex == 2) {
        return person.subject_sex == "female";
       }
       else if (selectionIndex == 1) {
         return person.subject_sex == "male";
       }
       else {
         return person
       }
    };
    
// HISPANIC CODE //
    // create function to return data on HISPANIC individuals only.
    function hispanic(person) {
      return person.subject_race == "hispanic";
    }

    // Pass through data array and store HISPANIC data in variable
    var hispanicData = data.filter(hispanic);

   
    // Pass through data to gender function to get data of the selected GENDER
    var hispanicGender = hispanicData.filter(gender);

    var hispanicGenderStops = hispanicGender.length;  



// BLACK CODE //

    // create function to return data on BLACK individuals only.
    function black(person) {
      return person.subject_race == "black";
    }

    // Pass through data array and store BLACK data in variable
    var blackData = data.filter(black);

    // Pass through data to gender function to get data of the selected GENDER
    var blackGender = blackData.filter(gender);

    var blackGenderStops = blackGender.length;  


// WHITE CODE //


    // create function to return data on WHITE individuals only.
    function white(person) {
      return person.subject_race == "white";
    }

    // Pass through data array and store WHITE data in variable
    var whiteData = data.filter(white);

    // Pass through data to gender function to get data of the selected GENDER
    var whiteGender = whiteData.filter(gender);

    var whiteGenderStops = whiteGender.length;   



// ASIANPAC CODE //

    // create function to return data on ASIAN/PAC ISLANDER individuals only.
    function asianPac(person) {
      return person.subject_race == "asian/pacific islander";
    }

    // Pass through data array and store ASIAN/PAC ISLANDER data in variable
    var asianPacData = data.filter(asianPac);

    // Pass through data to gender function to get data of the selected GENDER
    var asianPacGender = asianPacData.filter(gender);

    var asianPacGenderStops = asianPacGender.length;   



// UNKNOWN CODE //

    // create function to return data on OTHER individuals only.
    function other(person) {
      return person.subject_race == "other";
    }

    // Pass through data array and store OTHER data in variable
    var otherData = data.filter(other);

    // Pass through data to gender function to get data of the selected GENDER
    var otherGender = otherData.filter(gender);

    var otherGenderStops = otherGender.length;   




    // Plotting Bar Chart
    var trace1 = {
      x: ["White", "Hispanic", "Black", "Asian/Pacific Islander",
          "Other"],
      y: [whiteGenderStops, hispanicGenderStops, blackGenderStops, asianPacGenderStops, otherGenderStops],
      type: "bar"
    };
    
    var data = [trace1];
    
    var layout = {
      title: "Total Number of Police Stops by Ethncity",
      xaxis: { title: "Ethncity"},
      yaxis: { title: "# of Police Stops"}
    };
    
    Plotly.newPlot("gauge", data, layout);

});

};



  ///////////////          EVENT LISTENER          //////////////////////////////////

// Create a function to run all 3 functions we previously set up to up date charts based on user selection.

function callAll() {
  buildBar();
  dynamicBar();
};

// Create the event listener to listen for a change in the drop down of IDs

d3.selectAll("#selDataset").on("change", callAll);