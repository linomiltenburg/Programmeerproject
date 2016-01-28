d3.csv("data/data_cancer_descending.csv", function(error, data) {
  if (error) return console.error(error);

  // define width, height and margins
  var margin = {top: 40, right: 5, bottom: 100, left: 150},
      width = 450 - margin.left - margin.right,
      height = 770 - margin.top - margin.bottom;

  var y = d3.scale.ordinal().rangeRoundBands([0, height], .10);
  var x = d3.scale.linear().range([0,width]);

  // select SVG
  var svg = d3.select("#barchart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // define axis
  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("top")
      .ticks(10);

  // define axis
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

  // set domains of x and y
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

  svg.append("g")
    .select("text")
      .style("text-anchor", "end")
      .attr("x", 100)
      .attr("y", 100)
      .text("Incidentie darmkanker per 100.000 inwoners in 2002")

  // draw y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  var old_name = ""

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
      .on('click', function(d){ name = d.country; selectDot1(name, old_name); old_name = name })

  // function to select bar when country on map is clicked in world map
  selectBar = function(name, old_name){
    name = '#'+name
    if (old_name != ""){
      old_name = '#'+old_name
      svg.select(old_name)
        .attr("class", "bar")
    }
    svg.select(name)
      .attr("class", "selected_bar")
  }

  // function to select bar when dot is clicked in scatterplot
  selectBar1 = function(name, old_name){
    name = '#'+name
    if (old_name != ""){
      old_name = '#'+old_name
      svg.select(old_name)
        .attr("class", "bar")
    }
    svg.select(name)
      .attr("class", "selected_bar1")
  }
})
