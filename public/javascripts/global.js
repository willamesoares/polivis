$(document).ready(() => {
  const svg = d3.select("svg"),
      angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

  const path = svg.append("g")
      .attr("transform", "translate(480, 250)")
      .attr("fill", "none")
      .attr("stroke-width", 10)
      .attr("stroke-linejoin", "round")
      .selectAll("path")
      .data(["cyan", "magenta", "yellow"])
      .enter().append("path")
      .attr("stroke", function(d) { return d; })
      .style("mix-blend-mode", "darken")
      .datum(function(d, i) {
        return d3.radialLine()
            .curve(d3.curveLinearClosed)
            .angle(function(a) { return a; })
            .radius(function(a) {
              var t = d3.now() / 1000;
              return 200 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 3) * 32;
            });
      });

  d3.timer(function() {
    path.attr("d", function(d) {
      return d(angles);
    });
  });
})
