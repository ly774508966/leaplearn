/**
 * LeapLearn. by Jesus García
 * ----------------------------------------------------------------
 * Copyright (c) 2014 Universidad Carlos III de Madrid
 *
 * @link http://www.ctwhome.com/leaplearn
 * @copyright 2014 Jesus García
 * @date 26/09/14, 11:25.
 *
 * Match gestures
 * ---------------------
 */

/**
 * ***********************************************************************************
 * Match Gesture 2D & 3D
 * @param gestureToCheck {array}
 * ***********************************************************************************
 */

/**
 * Match gesture
 */
function matchGesture(){
  var predominant = predominantPlane();
  // Data to mutch depending of the number of active axis

  // Show points of realized gestured
  getGestureStringlyfy()

  // split the gesture in their different axis
  descomposeGesture();      // get gestureAxis

  // Match the gestures and keep in an array
  checkGesture(predominant);
  // activate predominant panel buttons in the interface
  predominantPanel(predominant);
}

function checkGesture(predominant){
  predominant = predominant || "xy";
  // Paint the shape realiced in the squares
  paintShape();

  // Match the gestures
    var resultMatch ={};
    switch(predominant) {
      case  "xy" : resultMatch.xy = xy_algo.Recognize(gestureAxis.xy, useProtractor); break;
      case  "xz" : resultMatch.xz = xz_algo.Recognize(gestureAxis.xz, useProtractor); break;
      case  "yz" : resultMatch.yz = yz_algo.Recognize(gestureAxis.yz, useProtractor); break;
    }
    writeUIelements(resultMatch[predominant])
}

/**
 * Write elements in the list (depending of the average)
 * @param result
 * info.innerHTML = result.name+' ('+result.score+'%)';
 */
function writeUIelements(ranking){
  $('ul.gesture-list >li span.score').html("");

  var scoreList = [];
  //Paint results in % into the list
  $.each(ranking, function(k,v){
    scoreList.push(v.Score);
    var li = "ul.gesture-list li#list-"+ v.Name;
    var value = !isNaN(v.Score) ? useProtractor ? Math.round(v.Score*1000)/1000 : Math.round(v.Score*1000)/10+ "%" : useProtractor ? 0 : 0+ "%";
    $(li).find("span.score").html(value);
  })

  // WINNER If there is a Winner:
  var $winnerPercentage = $("#value-per").text();
  var major = useProtractor ? Math.round(getMaxOfArray(scoreList)*1000)/1000 : Math.round(getMaxOfArray(scoreList)*1000)/10+ "%"

  $('ul.gesture-list li').removeClass("winner");
    // Higligther winner
    useProtractor ? setWinner(): (major >= $winnerPercentage) && setWinner();

    function setWinner(){
      var winner = 'ul.gesture-list >li span:contains("'+major+'")';
      $(winner).parent().addClass("winner");
      // fire kay
      var key = $(winner).parent().find(".key").text();
      fireKey(keyToCode(key));
    }
}
