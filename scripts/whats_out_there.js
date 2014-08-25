/*

http://www.d3noob.org/2014/02/grouping-and-summing-data-using-d3nest.html

https://github.com/mbostock/d3/wiki/Gallery
*/

// basic settings
var h = 600;
var w = 1000;
var dataset;
var padding = 50;

// import csv data
d3.csv("./data/exoplanet.eu_catalog.csv",
  // select and rename the fields; convert string numbers to numbers
  function(d){
    return {
      name: d.name,
      star_distance: +d.star_distance,
      radius: +d.radius,
      mass: +d.mass,
      discovered: +d.discovered
    };
  },

  // process the data
  function(error, data) {

    if(error){
      console.log('d3 error!', error);
    } 

    var dataset = d3.nest()
      // group data by year
      .key(function(d){ return d.discovered; })
      .sortKeys(d3.ascending)
      // calculate the number of planets per year
      .rollup(function(leaves, i) { 
        console.log(leaves.length, i)
        return  leaves.length;
      })
      .entries(data);

    console.log(dataset);

    
      
  }
);

