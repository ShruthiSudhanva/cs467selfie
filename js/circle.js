var bottomCircles = [
  { "x_axis": 200, "y_axis": 70, "radius": 60, "color" : "green" },
  { "x_axis": 550, "y_axis": 70, "radius": 60, "color" : "purple"},
  ];

var topCircles = [
  { "x_axis": 375, "y_axis": 70, "radius": 60, "color" : "green" }
];

var leftCircle =  [
  { "x_axis": 60, "y_axis": 60, "radius": 60, "color" : "green" }];

var rightCircle = [
  { "x_axis": 60, "y_axis": 60, "radius": 60, "color" : "green" }];

var bottomSvgContainer = d3.select("#bottomcircle").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 150);

var bottomCircles = bottomSvgContainer.selectAll("circle")
                          .data(bottomCircles)
                          .enter()
                          .append("circle");

var bottomCircleAttributes = bottomCircles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });

var topSvgContainer = d3.select("#topcircle").append("svg")
                                    .attr("width", 800)
                                    .attr("height", 150);

var topCircles = topSvgContainer.selectAll("circle")
                          .data(topCircles)
                          .enter()
                          .append("circle");

var topCircleAttributes = topCircles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });

var leftSvgContainer = d3.select("#leftcircle").append("svg")
                                               .attr("width",120)
                                               .attr("height",300);

var leftCircles = leftSvgContainer.selectAll("circle")
                                  .data(leftCircle)
                                  .enter()
                                  .append("circle");

var leftCircleAttributes = leftCircles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });

var rightSvgContainer = d3.select("#rightcircle").append("svg")
                                               .attr("width",120)
                                               .attr("height",300);

var rightCircles = rightSvgContainer.selectAll("circle")
                                  .data(rightCircle)
                                  .enter()
                                  .append("circle");

var rightCircleAttributes = rightCircles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });

