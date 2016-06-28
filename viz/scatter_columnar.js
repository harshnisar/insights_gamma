
// var data = [{"x": 50.0, "y": 110.1}, {"x": 20.0, "y": 20.5}, {"x": 30.0, "y": 20.5}, {"x": 40.0, "y": 20.5}];
var data;

// d3.csv("http://harshnisar.github.io/insights_gamma/viz/scatter.csv", function(loaddata) {
d3.csv("http://insights.aspiringminds.com/viz/scatter.csv", function(loaddata) {
  loaddata.forEach(function(d) {
    d.x = +d.x;
    d.y = +d.y;
  });
  data = loaddata;
  scatterplot();
});


function scatterplot() {
  // do something with rows


//SVG's lenght
var w = 500;
var h = 500;
var padding = 30;
var xmin = 4.9;
var ymin = 4.4;

var xScale = d3.scale.linear()
                     .domain([xmin, d3.max(data, function(d) { return d.x; })])
                     .range([0 + padding, w - padding]);

var yScale = d3.scale.linear()
                     .domain([ymin, d3.max(data, function(d) { return d.y; })])
                     .range([h - padding, padding ]);

var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom")
                  .ticks(5);

var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(5);


var svg = d3.select("#scatter")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("style","border:1px solid;");




//tooltips
var tooltip = d3.select("div#scatter")
    .append("div")  
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    //.style("border", "1px solid")
    .style("background-color", "azure")
    .text("Something something smart hello hello hello")
    .style("width","200px");
//svg.append('text').attr("x", "14").attr("y", "14").text("Marry had a \n  little lamb").call(wrap, "30px");

function emboss(){
    d3.selectAll("circle").filter( function (d){ return d.y>5.5;}).attr("r", 3.5);
    tooltip.style("visibility", "visible")
//        .style("top",(d3.event.pageY-10)+"px")
//        .style("left",(d3.event.pageX+10)+"px");
        .style("top", 1.2 +"em")
        .style("left", padding*2 +"px");
}
function demboss(){
    d3.selectAll("circle").filter( function (d){ return d.y>5.5;}).attr("r", 2.5);
    tooltip.style("visibility", "hidden");
}


//making the xAxis
svg.append("g")
    .attr("class", "axis")  //Assign "axis" class
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

var ypadding = 35;
//making the yAxis    
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);



svg.selectAll("circle")
    .data(data)
    .enter().append("circle")
    .attr("cx", function(d) { return xScale(d.x); })
    .attr("cy", function(d) { return yScale(d.y); })
    .attr("r", 3)
    .attr("stroke", "black")
    // .attr("fill", "#0099FF")
    .attr("fill", "#1c9099")
    // .attr("stroke-width","0.25");
    // .attr("onmouseover", "evt.target.setAttribute('fill', 'yellow')")
    // .attr("onmouseout", "evt.target.setAttribute('fill', 'blue')");




// d3.selectAll("circle").filter( function (d){ return d.y>5.5;}).on("mouseover", emboss).attr("stroke-width","1.5");
// d3.selectAll("circle").filter( function (d){ return d.y>5.5;}).on("mouseout", demboss).attr("stroke-width","0.5");










function yzerofy(){
  var numValues = data.length;  // Get original dataset's length
  dataset = [];  // Initialize empty array
  for(var i=0; i<numValues; i++) {
      dataset.push({"x":data[i].x, "y":4.5});  // Add new numbers to array
  }

  return dataset

}

function yxify(){
  var numValues = data.length;  // Get original dataset's length
  dataset = [];  // Initialize empty array
  for(var i=0; i<numValues; i++) {
      dataset.push({"x":data[i].x, "y":data[i].x});  // Add new numbers to array
  }

  return dataset

}

//Down
function downyx() {
                    // var numValues = data.length;  // Get original dataset's length
                    // var maxRange = Math.random() * 1200;  // Get max range of new values
                    // dataset = yzerofy(data);  // Initialize empty array
                    // dataset = yxify(data);  // Initialize empty array
                    // dataset = data;

                  

                    // Update circles
                    svg.selectAll("circle")
                        // .data(dataset)  // Update with new data
                        .transition()  // Transition from old to new
                        .duration(500)  // Length of animatin
                        // .each("start", function() {  // Start animation
                        //     d3.select(this)  // 'this' means the current element
                        //         .attr("fill", "red")  // Change color
                        //         .attr("r", 5);  // Change size
                        // })   
                        .delay(function(d, i) {
                            // return i / dataset.length * 300;  // Dynamic delay (i.e. each item delays a little longer)
                            return ((d.x-5.0)/0.8)*4000;  // Dynamic delay (i.e. each item delays a little longer)
                        })
                        .ease("linear")  // Transition easing - default 'variable' (i.e. has acceleration), also: 'circle', 'elastic', 'bounce', 'linear'
                        .attr("cx", function(d) {
                            return xScale(d.x);  // Circle's X
                        })
                        .attr("cy", function(d) {
                            return yScale(d.x);  // Circle's Y
                        })
                        // .attr("opacity", "1")
                        // .each("end", function() {  // End animation
                        //     d3.select(this)  // 'this' means the current element
                        //         .transition()
                        //         .duration(500)
                        //         .attr("fill", "black")  // Change color
                        //         .attr("r", 2);  // Change radius
                        // });
                        // .call(endall, up_skill)
                    
                };


var t0;


function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
    if (Math.abs(a[i]) < a[lowest]) lowest = i;
    }
    sign = a[lowest]/Math.abs(a[lowest]);

    return [lowest, sign];
}

function col_delay(d){

    var xcols = [5.2, 5.3, 5.4, 5.5, 5.6];
    var ymin = 4.5;
    var ymax = 7;

    var delays = [1000, 2000, 3000, 4000, 5000, 6000];
    diffs = xcols;
    diffs.forEach(function (ele, i, arr){
        arr[i] =  d.x - ele;
    })
    // console.log(xcols);
    // console.log(diffs);
    // Now we need to see which index had the min-most differece.
    // The smallest ele in diff
    temp = indexOfSmallest(diffs);
    // console.log(temp);
    lowest_idx = temp[0];
    sign = temp[1];

    if (sign == 1){
        base_delay = delays[lowest_idx + 1];
    }
    if (sign == -1){
        base_delay = delays[lowest_idx];
    }

    //approx one
    
    // Slant effect
    // ydelay = (1-(d.y-ymin)/(ymax - ymin))*10000;
    
    // Inverse Slant effect
    // ydelay = (d.y-ymin)/(ymax - ymin)*10000;

    //
    // ydelay = 0;

    // ydelay = (1-(d.y-ymin)/(ymax - ymin))*1000; 
    // ydelay = (d.y-ymin)/(ymax - ymin)*1000; 


    ydelay  = Math.abs(d.y - d.x)/((ymax-ymin)/1)*1000;

    return base_delay + ydelay;
}

function col_delay_y(d){

    var ycols = [4.7232, 5.000121, 5.200001, 5.300001, 5.500001, 5.700001, 6.0000001];
    var xmin = 4.8;
    var xmax = 6;

    var delays = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
    diffs = ycols;
    diffs.forEach(function (ele, i, arr){
        arr[i] =  d.y - ele;
    })
    // console.log(xcols);
    // console.log(diffs);
    // Now we need to see which index had the min-most differece.
    // The smallest ele in diff
    temp = indexOfSmallest(diffs);
    // console.log(temp);
    lowest_idx = temp[0];
    sign = temp[1];

    if (sign == 1){
        base_delay = delays[lowest_idx + 1];
    }
    if (sign == -1){
        base_delay = delays[lowest_idx];
    }

    //approx one

    // Slant effect
    // ydelay = (1-(d.y-ymin)/(ymax - ymin))*10000;
    
    // Inverse Slant effect
    // ydelay = (d.y-ymin)/(ymax - ymin)*10000;

    //
    ydelay = 0;

    ydelay = (1-(d.x-xmin)/(xmax - xmin))*1500; 
    // ydelay = (d.y-ymin)/(ymax - ymin)*1000; 


    // ydelay  = Math.abs(d.y - d.x)/((xmax-xmin)/1)*1000;

    return base_delay + ydelay;
}




function sorter(a, b){
  return a.x - b.x; 
}

function sorter_y(a, b){
  return a.y - b.y; 
}


//Up
function up_skill() {
                    // dataset = data;  // Initialize empty array
                    // dataset.sort(sorter);

                  

                    // Update circles
                    svg.selectAll("circle")
                        // .data(dataset)  // Update with new data
                        // .sort(sorter)
                        .transition()  // Transition from old to new
                        .duration(800)  // Length of animatin
                        // .each("start", function() {  // Start animation
                        //     d3.select(this)  // 'this' means the current element
                        //         .attr("fill", "red")  // Change color
                        //         .attr("r", 5);  // Change size
                        // })
                        .delay(function(d, i) {
                            // return i*8000 / dataset.length;  // Dynamic delay (i.e. each item delays a little longer)
                            // return ((d.x-5.0)/0.8)*1000;  // Dynamic delay (i.e. each item delays a little longer)
                            return col_delay(d);
                        })
                        // .ease("linear")  // Transition easing - default 'variable' (i.e. has acceleration), also: 'circle', 'elastic', 'bounce', 'linear'
                        .attr("cx", function(d) {
                            return xScale(d.x);  // Circle's X
                        })
                        .attr("cy", function(d) {
                            return yScale(d.y);  // Circle's Y
                        })
                        // .attr("opacity","1")
                        // .each("end", function() {  // End animation
                        //     d3.select(this)  // 'this' means the current element
                        //         .transition()
                        //         .duration(500)
                        //         .attr("fill", "black")  // Change color
                        //         .attr("r", 2);  // Change radius
                        // });

                    
                };

 
// employer perspective
function side_emp() {
                    dataset = data;  // Initialize empty array
                    
                    // dataset.sort(sorter_y);

                  

                    // Update circles
                    svg.selectAll("circle")
                        // .data(dataset)  // Update with new data
                        .transition()  // Transition from old to new
                        .duration(500)  // Length of animatin
                        // .each("start", function() {  // Start animation
                        //     d3.select(this)  // 'this' means the current element
                        //         .attr("fill", "red")  // Change color
                        //         .attr("r", 5);  // Change size
                        // })
                        .delay(function(d, i) {
                            // return i*8000 / dataset.length;  // Dynamic delay (i.e. each item delays a little longer)
                            // return ((d.x-5.0)/0.8)*1000;  // Dynamic delay (i.e. each item delays a little longer)
                            return col_delay_y(d);
                        })
                        .ease("linear")  // Transition easing - default 'variable' (i.e. has acceleration), also: 'circle', 'elastic', 'bounce', 'linear'
                        .attr("cx", function(d) {
                            return xScale(d.x);  // Circle's X
                        })
                        .attr("cy", function(d) {
                            return yScale(d.y);  // Circle's Y
                        })
                        // .attr("opacity","1")
                        // .each("end", function() {  // End animation
                        //     d3.select(this)  // 'this' means the current element
                        //         .transition()
                        //         .duration(500)
                        //         .attr("fill", "black")  // Change color
                        //         .attr("r", 2);  // Change radius
                        // });
                        
                    
                };



  function endall(transition, callback) { 
    if (transition.size() === 0) { callback() }
    var n = 0; 
    transition 
        .each(function() { ++n; }) 
        .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
  } 


// Side Y
function side_to_y () {
                    var numValues = data.length;  // Get original dataset's length
                    var maxRange = Math.random() * 5000;  // Get max range of new values
                    dataset = data;  // Initialize empty array
                    
                    // dataset.sort(sorter_y);

                  

                    // Update circles
                    svg.selectAll("circle")
                        // .data(dataset)  // Update with new data
                        .transition()  // Transition from old to new
                        .duration(500)  // Length of animatin
                        // .each("start", function() {  // Start animation
                        //     d3.select(this)  // 'this' means the current element
                        //         .attr("fill", "red")  // Change color
                        //         .attr("r", 5);  // Change size
                        // })
                        .delay(function(d, i) {
                            return i*1000 / dataset.length;  // Dynamic delay (i.e. each item delays a little longer)
                            // return ((d.x-5.0)/0.8)*1000;  // Dynamic delay (i.e. each item delays a little longer)
                            // return col_delay_y(d);
                            // return ;
                        })
                        .ease("linear")  // Transition easing - default 'variable' (i.e. has acceleration), also: 'circle', 'elastic', 'bounce', 'linear'
                        .attr("cx", function(d) {
                            return xScale(4.9);  // Circle's X
                        })
                        .attr("cy", function(d) {
                            return yScale(d.y);  // Circle's Y
                        })
                        // .attr("opacity","1")
                        // .each("end", function() {  // End animation
                        //     d3.select(this)  // 'this' means the current element
                        //         .transition()
                        //         .duration(500)
                        //         .attr("fill", "black")  // Change color
                        //         .attr("r", 2);  // Change radius
                        // });
                        // .call(endall, side_emp)
                    
                };



d3.select("#salary_view")
                .on("click", function(){

                    side_to_y();
                    // time.sleep(12)
                    setTimeout(side_emp, 3000);

                });

d3.select("#skill_view")
                .on("click", function(){

                    downyx();
                    // ;

                    setTimeout(up_skill, 3000);
                });




} //end of scatter method

// filter selection to get points in the middle.
// on them put mouseover call method emboss.

// emboss method, again does the filter. and sets attribute emboss.
// mouseout should clean it up.



