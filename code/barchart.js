d3.json("country_codes_converter.json", function(error, data1){
  if (error) return console.error(error);
  //console.log(data1)

  d3.csv("data_cancer_descending.csv", function(error, data) {
    if (error) return console.error(error);

    // testing hich countries are spelled the same
    // for (i = 0; i < data1.length; i++){
    //   console.log(data1[0][i])
    // }

    // function to get data of country which is clicked on map
    takedata = function(code){
      country = data1[code][0]
      console.log(data1)

      for (i = 0; i < data.length; i++){
        if (data[i].country == country){
          console.log(data[i].country)
          console.log(country)
        }
        //list.push(parseFloat(data_list[i]))
      }
    }
    // define width, height and margins
    var margin = {top: 40, right: 50, bottom: 100, left: 50},
        width = 400 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

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

    x.domain([0, d3.max(data, function(d) { return parseFloat(d.value); })]).range([0,(width)]);
    y.domain(data.map(function(d) { return d.country; }));

    // draw x-axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.5em")
        .attr("dy", "-.4em")
        .attr("transform", "rotate(-45)" );

    // draw y-axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "-4em")
        .style("text-anchor", "end")
        .text("Incidentie darmkanker (per 100.000 inwoners)");

    // draw bars
    svg.selectAll("bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("y", function(d) { return y(d.country); })
        .attr("height", y.rangeBand())
        .attr("x", function(d) { return x(parseFloat(d.value)); })
        .attr("width", function(d) { return height - x(d.value); })
        .on('mouseover',tip.show)
        .on('mouseout', tip.hide)

  })
})
