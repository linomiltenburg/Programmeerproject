d3.csv("scatterplot_data.csv", function(error, data) {
  if (error) return console.error(error);

  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var svg = d3.select("#scatterplot")
    .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  data.forEach(function(d) {
    d.data_cancer = +d.data_cancer;
    d.data_meat = +d.data_meat;
  });

  var x = d3.scale.linear()
    .range([0, width]);

  var y = d3.scale.linear()
    .range([height, 0]);

  x.domain(d3.extent(data, function(d) { return d.data_meat; })).nice();
  y.domain(d3.extent(data, function(d) { return d.data_cancer; })).nice();

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(10);

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

  // draw x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .style("text-anchor", "end")
      .attr("dx", ".5em")
      .attr("dy", ".71em")
      .text("Vleesconsumtie (kg per inwoner)")

  // draw y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Incidentie darmkanker (per 100.000 inwoners)")

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.data_meat); })
      .attr("cy", function(d) { return y(d.data_cancer); })
      // .style("fill", function(d) { return color(d.species); });


});
