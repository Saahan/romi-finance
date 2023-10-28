google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Status", "Percentage"],
    ["Liquidity", 94],
    ["Not Staked", 6],
  ]);

  var options = {
    title: "Distribution",
    width: 100,
    height: 100,
    legend: "none",
    backgroundColor: "#151515",
    title: "",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Currency", "Percentage"],
    ["USDC", 49.5],
    ["ETH", 50.49],
  ]);

  var options = {
    title: "Distribution",
    width: 100,
    height: 100,
    legend: "none",
    backgroundColor: "#151515",
    title: "",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart2")
  );

  chart.draw(data, options);
}