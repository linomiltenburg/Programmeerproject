d3.csv("data_cancer.csv", function(error, data) {
  if (error) return console.error(error);

  // data.forEach(function(d) {
  //   d.country = +d.country;
  //   d.value = +d.value;
  // });

  // list = []
  // x_list = []
  // for (i = 0; i < data.length; i++){
  //   console.log(data[i])
  //   list.push(parseFloat(data[i][1]))
  //   x_list.push(data[i][0])
  // }

  console.log(data)
  // define width, height and margins
  var margin = {top: 50, right: 50, bottom: 50, left: 50},
      width = 1000 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  var x = d3.scale.ordinal().rangeRoundBands([0, width], .10);
  var y = d3.scale.linear().range([height, 0]);

  var svg = d3.select("#barchart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(10);

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

  x.domain(data.map(function(d) { return d.country; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]).range([(height), 0]);

  // draw x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  // draw y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "-4em")
      .style("text-anchor", "end")
      .text("Incidentie darmkanker per 100.000 inwoners");

  // draw bars
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.county); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });

});
