var jsonCircles = [
  { "x_axis": 100, "y_axis": 70, "radius": 60, "color" : "green" },
  { "x_axis": 450, "y_axis": 70, "radius": 60, "color" : "purple"},
  ];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 600)
                                    .attr("height", 600);

var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });

