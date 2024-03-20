var myChart;

window.addEventListener('load', function() {
	const valoresFrio  = [0, -5, -10, -12];
	const valoresCalor = [36, 38, 39, 42];

	const objeto = {
		frio: valoresFrio,
		calor: valoresCalor
	};

	carregarGrafico(objeto);
});

function carregarGrafico(objeto) {
	var xValues = ["2021", "2022", "2023", "2024"];
	var barColors = ["red", "#00afef", 'green', 'purple'];

	myChart = new Chart("myChart", {
		type: "bar",
		data: {
			labels: xValues,
			datasets: [
				{
					label: ['Frio Extremo'],
					backgroundColor: barColors[1],
					data: objeto.frio
				},
				{
					label: ['Calor Extremo'],
					backgroundColor: barColors[0],
					data: objeto.calor
				}
			]
		}
	});

	ocultar_bloco();
}

function ocultar_bloco() {
	myChart.chart.controller.legend.legendItems[0].hidden = true;
	myChart.chart.config.data.datasets[0]._meta[0].data[0]._chart.config.data.datasets[0]._meta[0].hidden = true;
	myChart.render().update();
}


