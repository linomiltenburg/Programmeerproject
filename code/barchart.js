d3.csv("data_cancer_descending.csv", function(error, data) {
  if (error) return console.error(error);

  // function to get data of country which is clicked on map
  takeData = function(name){
    console.log(name)
    for (i = 0; i < data.length; i++){
      if (data[i].country == name){
        selectBar(name)
        console.log(name)
      }
    }
  }

  // define width, height and margins
  var margin = {top: 40, right: 5, bottom: 100, left: 150},
      width = 450 - margin.left - margin.right,
      height = 820 - margin.top - margin.bottom;

  var y = d3.scale.ordinal().rangeRoundBands([0, height], .10);
  var x = d3.scale.linear().range([0,width]);

  var svg = d3.select("#barchart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("top")
      .ticks(10);

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

  // bostock referentie
  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>" + d.country + "</strong> <span style='color:red'>" + d.value + "</span>";
  })

  svg.call(tip);

  x.domain([0, d3.max(data, function(d) { return parseFloat(d.value); })]).range([0,width]);
  y.domain(data.map(function(d) { return d.country; }));

  // draw x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", ".5em")
      .attr("dy", "2em")
      // .text("Incidentie darmkanker (per 100.000 inwoners)")
      // .attr("x", 265)
      // .attr("y", 800)

  // draw y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("dy", "-4em")
      .style("text-anchor", "end")
      .text("Naam land");
      //.attr()

  // draw bars
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("id", function(d) { return d.country })
      .attr("class", "bar")
      .attr("y", function(d) { return y(d.country); })
      .attr("height", y.rangeBand())
      .attr("x", function(d) { x(parseFloat(d.value)); })
      .attr("width", function(d) { return x(d.value); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

  // removeSelection = function(name){
  //   //name = '#'+name
  //   svg.select(name)
  //     .style("fill", "orange")
  // }

  selectBar = function(name){
    console.log(name)
    name = '#'+name
    svg.select(name)
      .style("fill", "blue")
  }

  })
