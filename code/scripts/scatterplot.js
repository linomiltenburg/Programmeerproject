d3.csv("data/scatterplot_data.csv", function(error, data) {
  if (error) return console.error(error);

  // define width, height and margins
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 850 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  // select SVG
  var svg = d3.select("#scatterplot")
    .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // add the tooltip area to the webpage
  var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

  data.forEach(function(d) {
    d.data_cancer = +d.data_cancer;
    d.data_meat = +d.data_meat;
  });

  // define x
  var x = d3.scale.linear()
    .range([0, width]);

  // define y
  var y = d3.scale.linear()
    .range([height, 0]);

  // set domains of x and y
  x.domain(d3.extent(data, function(d) { return d.data_meat; })).nice();
  y.domain(d3.extent(data, function(d) { return d.data_cancer; })).nice();

  // define axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(10);

  // define axis
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
      .attr("x", 785)
      .attr("y", -15)
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
      .attr("dx", ".5em")
      .style("text-anchor", "end")
      .text("Incidentie darmkanker per 100.000 inwoners")

  var old_name = ""

  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("id", function(d) { return d.country })
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.data_meat); })
      .attr("cy", function(d) { return y(d.data_cancer); })
      .on("mouseover", function(d) {
                tooltip.transition()
                     .duration(200)
                     .style("opacity", .9);
                tooltip.html(d["country"] + "<br/> (" + Math.round(d.data_meat)
      	        + ", " + Math.round(d.data_cancer) + ")")
                     .style("left", (d3.event.pageX + 5) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                tooltip.transition()
                     .duration(500)
                     .style("opacity", 0);
            })
      .on('click', function(d){ name = d.country; selectBar1(name, old_name); old_name = name })

  // function to select dot when country on map is clicked in world map
  selectDot = function(name, old_name){
    console.log('1');
    name = '#'+name
    if (old_name != ""){
      console.log('2');
      old_name = '#'+old_name
      svg.select(old_name)
        .attr("class", "dot")
    }
    svg.select(name)
      .attr("class", "selected_dot")
  }

  // function to select dot when bar is clicked in barchart
  selectDot1 = function(name, old_name){
    console.log('1');
    name = '#'+name
    if (old_name != ""){
      console.log('2');
      old_name = '#'+old_name
      svg.select(old_name)
        .attr("class", "dot")
    }
    svg.select(name)
      .attr("class", "selected_dot1")
  }
})
