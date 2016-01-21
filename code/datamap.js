d3.json("data_meat_dictionary.json", function(error, data){
  if (error) return console.error(error);

  // define slider
  var slider = d3.slider().axis(true).min(1993).max(2002).step(1)
  d3.select('#slider').call(slider)

  updateColour = function(year){

    data_list = data[year]
    list = []
    for (i = 0; i < data_list.length; i++){
      list.push(data_list[i])
    }

    array = {}

    for (i = 0, n = list.length; i < n; i++){
      id = list[i][0]
      value = list[i][1]

      // give a country a certain color when value between 0 and 25
      if (value > 0 && value <= 25){
        array[id] = {fillKey:'class1', consumption: value}
      }
      // give a country a certain color when value between 25 and 50
      else if (value > 25 && value <= 50){
        array[id] = {fillKey:'class2', consumption: value}
      }
      // give a country a certain color when value between 50 and 75
      else if (value > 50 && value <= 75){
        array[id] = {fillKey:'class3', consumption: value}
      }
      // give a country a certain color when value between 75 and 100
      else if (value > 75 && value <= 100){
        array[id] = {fillKey:'class4', consumption: value}
      }
      // give a country a certain color when value between 100 and 125
      else if (value > 100 && value <= 125){
        array[id] = {fillKey:'class5', consumption: value}
      }
      // give a country a certain color when value between 125 and 150
      else if (value > 125){
        array[id] = {fillKey:'class6', consumption: value}
      }
    };
    return array
  }

  updateColour(1993)

  // defining the world map
  var world_map = new Datamap({
    element: document.getElementById('container'),

    // setting some settings for hovering
    geographyConfig: {
      highlightBorderColor: 'black',
      popupTemplate: function(geography, list) {
          return '<div class="hoverinfo">' + geography.properties.name + ': ' +  Math.round(list.consumption) + ''
      },
        highlightBorderWidth: 1
    },

    fills: {
      'class1': '#fee5d9',
      'class2': '#fcbba1',
      'class3': '#fc9272',
      'class4': '#fb6a4a',
      'class5': '#de2d26',
      'class6': '#a50f15',
      defaultFill: 'black'
      },

    data: array
  })

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
    console.log(year);
    world_map.updateChoropleth(colour)
  }
});
