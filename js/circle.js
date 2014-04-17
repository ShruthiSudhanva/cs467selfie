var users = 
{"User1":"Computer Science",
"User2": "Electronics",
"User3": "Computer Science" };


var circles = [];
function drawInitial()
{
circles= allCircles;
}

function drawCircles()
{
d3.select("svg").remove();
d3.select("svg").remove();
d3.select("svg").remove();
d3.select("svg").remove();
d3.select("svg").remove();

var bottomSvgContainer = d3.select("#bottomcircle").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 150);

var bottomCircle = bottomSvgContainer.append("g").selectAll("circle")
    .data(circles[0])
  .enter().append("g");

  bottomCircle.append("circle")
    .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return 60; })
                       .style("fill", function(d) { return d.color; })
                       .on("click", function(d){
                          if(circles!=allCircles)
                          {
                            if(d.college == users[username])
                            {
                               var msg = "You are right! " + username + " is a "+ d.college + " major!" 
                              document.getElementById("msg").innerHTML = msg;
                            }
                            else
                            {
                              var msg = "Sorry! Wrong try!"
                              document.getElementById("msg").innerHTML = msg;
                            }
                          }
                          else
                          {
                          if(d.college=="Engineering")
                            circles = circlesEng;
                          else
                            circles = circlesEdu;
                          drawCircles();
                        }
                       });;

  bottomCircle.append("text")
     .attr("x", function(d){ return d.x_axis;})
     .attr("y", function(d){ return d.y_axis;})
     .attr("text-anchor", "middle")
     .style("fill","white")
     .text(function(d) {
       return d.college;
      });

var topSvgContainer = d3.select("#topcircle").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 150);

var topCircle = topSvgContainer.append("g").selectAll("circle")
    .data(circles[1])
  .enter().append("g");

  topCircle.append("circle")
    .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return 60; })
                       .style("fill", function(d) { return d.color; })
                       .on("click", function(d){
                          if(circles!=allCircles)
                          {
                            if(d.college == users[username])
                            {
                               var msg = "You are right! " + username + " is a "+ d.college + " major!" 
                              document.getElementById("msg").innerHTML = msg;
                            }
                            else
                            {
                              var msg = "Sorry! Wrong try!"
                              document.getElementById("msg").innerHTML = msg;
                            }
                          }
                          else
                          {
                          circles = circlesAvi;
                          drawCircles();
                          }
                       });

  topCircle.append("text")
     .attr("x", function(d){ return d.x_axis;})
     .attr("y", function(d){ return d.y_axis;})
     .attr("text-anchor", "middle")
     .style("fill","white")
     .text(function(d) {
       return d.college;
      });

var leftSvgContainer = d3.select("#leftcircle").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 150);

var leftCircle = leftSvgContainer.append("g").selectAll("circle")
    .data(circles[2])
  .enter().append("g");

  leftCircle.append("circle")
    .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return 60; })
                       .style("fill", function(d) { return d.color; })
                       .on("click", function(d){
                          if(circles!=allCircles)
                          {
                            if(d.college == users[username])
                            {
                               var msg = "You are right! " + username + " is a "+ d.college + " major!" 
                              document.getElementById("msg").innerHTML = msg;
                            }
                            else
                            {
                              var msg = "Sorry! Wrong try!"
                              document.getElementById("msg").innerHTML = msg;
                            }
                          }
                          else
                          {
                            circles = circlesArts;
                            drawCircles();
                          }
                       });

  leftCircle.append("text")
     .attr("x", function(d){ return d.x_axis;})
     .attr("y", function(d){ return d.y_axis;})
     .attr("text-anchor", "middle")
     .style("fill","white")
     .text(function(d) {
       return d.college;
      });


var rightSvgContainer = d3.select("#rightcircle").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 150);

var rightCircle = rightSvgContainer.append("g").selectAll("circle")
    .data(circles[3])
  .enter().append("g");

  rightCircle.append("circle")
    .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return 60; })
                       .style("fill", function(d) { return d.color; })
                       .on("click", function(d){
                          if(circles!=allCircles)
                          {
                            if(d.college == users[username])
                            {
                              var msg = "You are right! " + username + " is a "+ d.college + " major!" 
                              document.getElementById("msg").innerHTML = msg;
                            }
                            else
                            {
                              var msg = "Sorry! Wrong try!"
                              document.getElementById("msg").innerHTML = msg;
                            }
                          }
                          else
                          {
                            circles = circlesBus;
                            drawCircles();
                          }
                       });

  rightCircle.append("text")
     .attr("x", function(d){ return d.x_axis;})
     .attr("y", function(d){ return d.y_axis;})
     .attr("text-anchor", "middle")
     .style("fill","white")
     .text(function(d) {
       return d.college;
      });
}
drawInitial();
drawCircles();