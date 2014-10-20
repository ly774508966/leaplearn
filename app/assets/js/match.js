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
 * Match Gesture
 * @param gestureToCheck {array}
 */
function matchGesture(gestureToCheck){

    gestureToCheck = getAxis(gestureToCheck,0,1);


    if (NUM_AXIS == 1){
        // num axis to check is "xy"
    }

    // Refresh gesture list
    one.check(gestureToCheck);            // Array of dots

    // Paint the shape realiced in the squares
    paintShape();


    // Listener
    one.on(gestureNames, function(result){
//      info.innerHTML = result.name+' ('+result.score+'%)';
        console.log(result.name+' ('+result.score+'%)');                        // WINNER!!!

        $.each(result.ranking, function(k,v){
            var li = "ul.gesture-list li#list-"+ v.name;
            $(li).find("span.score").html(v.score+"%");
            $(li).removeClass("winner");
        })
        var winner =  "ul.gesture-list li#list-"+ result.name;
        $(winner).addClass("winner");


        // Execute Keypress
        fireKey(125);

        });
    //console.log("matching gesture");
}

/**
 * Template for 1 Dollar
 * @param gesture
 * @return Function array with the format for 1 Dollar
 * a1 and a2: x(0), y(1), z(2)
 */
function getAxis(gesture,a1, a2){
    var gestureTemplate = [];
    for (var i in gesture){
        gestureTemplate.push([
            Math.round(gesture[i][a1]),
            Math.round(gesture[i][a2])                           // 2 dimension, add the third!
        ])
    }
    //console.log("Console check: ", gestureTemplate);
    return gestureTemplate;
}


/*
 * ***********************************************************************************
 * ALGORITHM HELPERS
 * ***********************************************************************************
 */

/**
 * Update algorithm data from the gesture list
 */
function updateGesturesAlgorithm(){
    // Remove gestures:

    gestureNames = getGestureNamesAlgorithm();
    // Add all the gestures (maybe again)
    $.each(gestureList, function(k, v) {
        //display the key and value pair: console.log(k + ' is ' + v);
        one.add(k, v);
    });
    console.log("List of gestures:", gestureList);
}

/**
 * Get the keys for the gestures.
 * @type {string[]}
 */
function getGestureNamesAlgorithm(){
    var names = "";
    $.each(gestureList, function(k) {
        names += k + " ";
    });
    return names;
}

/**
 * Gesture list:
 * ADD Format: one.add('circle',[[127,141],[124,140],[120,139],[...]]);
 */
function passGesturesToAlgorithm(){
    $.each(gestureList, function(k, v) {
        //display the key and value pair: console.log(k + ' is ' + v);
        one.add(k, v);
    });
}