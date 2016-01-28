d3.json("data/data_meat_dictionary.json", function(error, data){
  if (error) return console.error(error);

  // define slider
  var slider = d3.slider().axis(true).min(1993).max(2002).step(1)
  d3.select('#slider').call(slider)

  // function to update colour after update of slider
  updateColour = function(year){
    data_list = data[year]
    list = []
    for (i = 0; i < data_list.length; i++){
      list.push(data_list[i])
    }

    array = {}

    // give colour to country with certain value
    for (i = 0, n = list.length; i < n; i++){
      id = list[i][0]
      value = list[i][1]

      // give a country a certain color when value between 0 and 25
      if (value > 0 && value <= 25){
        array[id] = {fillKey:'0-25', consumption: value}
      }
      // give a country a certain color when value between 25 and 50
      else if (value > 25 && value <= 50){
        array[id] = {fillKey:'25-50', consumption: value}
      }
      // give a country a certain color when value between 50 and 75
      else if (value > 50 && value <= 75){
        array[id] = {fillKey:'50-75', consumption: value}
      }
      // give a country a certain color when value between 75 and 100
      else if (value > 75 && value <= 100){
        array[id] = {fillKey:'75-100', consumption: value}
      }
      // give a country a certain color when value between 100 and 125
      else if (value > 100 && value <= 125){
        array[id] = {fillKey:'100-125', consumption: value}
      }
      // give a country a certain color when value between 125 and 150
      else if (value > 125){
        array[id] = {fillKey:'>125', consumption: value}
      }
    };
    return array
  }

  // initialize the map at the year 1993
  updateColour(1993)

  // variable where selection is saved in
  var old_name = ""
  // defining the world map
  var world_map = new Datamap({
    element: document.getElementById('container'),

    done: function(world_map) {
      world_map.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
      name = geography.properties.name
      selectDot(name, old_name)
      selectBar(name, old_name)
      old_name = name
      })
    },

    // setting some settings for hovering
    geographyConfig: {
      popupTemplate: function(geography, list) {
          if (Math.round(list.consumption) != 0){
            return '<div class="hoverinfo">' + geography.properties.name + ': ' +  Math.round(list.consumption) + ''
          }
      },
        highlightBorderWidth: 1

    },

    fills: {
      '0-25': '#fee5d9',
      '25-50': '#fcbba1',
      '50-75': '#fc9272',
      '75-100': '#fb6a4a',
      '100-125': '#de2d26',
      '>125': '#a50f15',
      defaultFill: 'grey'
      },

    data: array
  })

  // function which updates the world map after update of slider
  updateSlider = function (map){
    slider = document.getElementById("handle-one").style.cssText
    inputY = parseFloat(slider.split(" ")[1])

    xMax = 2002;
    xMin = 1993;

    yMax = 100;
    yMin = 0;

    percent = (inputY - yMin) / (yMax - yMin);
    year = parseFloat(Math.round(percent * (xMax - xMin) + xMin));

    colour = updateColour(year)
    world_map.updateChoropleth(colour)
  }
});
