
function retreiveData(sample) {
    d3.json("samples.json").then(data=> {
        console.log(data)
    });
};

retreiveData();





  d3.selectAll("#selDataset").on("change", getData);

  // CREATE HORIZONTAL BAR CHART
  
  function getData() {
       
    d3.json("samples.json").then(function(data) {

    //we extract the # of the selected individual     
        var dropdownMenuValue = d3.selectAll("#selDataset").node().value;

    //we choose all the values associated with this individual
        var chosen_data_set = data.samples.filter(x => x.id === dropdownMenuValue);
        var data_set_v1 = chosen_data_set[0];
        var x_values_v1 = data_set_v1.sample_values;
        var x_values_v2 = x_values_v1.slice(0,10);
        

    //Horizontal bar chart    
      //  trace1 = {
      //      x: chosen_data_set.sample_values.slice(0,10),


      //  }
      console.log(chosen_data_set)
      console.log(data_set_v1)  
      console.log(x_values_v1)
        console.log(x_values_v2)
    })};

getData();


function initialview(){

    var choice = d3.select("#selDataset");
    
    d3.json("samples.json").then(function(data) {

        var alternatives = data.names;

        alternatives.forEach(function(x){

            choice.append("option").text(x).property("value",x)
        })
    })
        
};

initialview();

//function add_options() {
//    d3.json("samples.json").then(function(data) {

//        data.names.forEach(function(x){
//            select.append(option).node().value(x);
//        })
//    })};




