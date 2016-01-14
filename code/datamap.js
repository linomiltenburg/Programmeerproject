var bla = document.getElementById('button1')
value = bla.getElementsByClassName('value')
bla.onclick = updateData

function updateData(value){
  console.log(value);
}

// // get the class 'button' out of the html
// var button = document.getElementsByTagName('button')
// for (i = 0; i < button.length; i++){
//   button_value = button[i].value
// }
//
// button.onclick = updateData
//
// function updateData(){
//   console.log(button);
// }


d3.json("meat_consumption.json", function(error, data) {
  if (error) return console.error(error);

  // define slider
  var slider = d3.slider().axis(true).min(1993).max(2002).step(1)
  d3.select('#slider').call(slider)

    array = {}

    for (i = 0, n = data.length; i < n; i++){
      id = data[i][0]
      value = data[i][1]

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

    // defining the world map
    var map = new Datamap({
      element: document.getElementById('container'),

      // setting some settings for hovering
      geographyConfig: {
        highlightBorderColor: 'black',
        popupTemplate: function(geography, data) {
            return '<div class="hoverinfo">' + geography.properties.name + ': ' +  Math.round(data.consumption) + ''
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
});
