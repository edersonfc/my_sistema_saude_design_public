function index() {
	'use strict'


	/*LIne-Chart */
	var ctx = document.getElementById("project").getContext('2d');
	var myChart = new Chart(ctx, {

		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Aug', 'Sep', 'Oct'],
			datasets: [{
				label: '2023',
				data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410],
				borderWidth: 3,
				backgroundColor: 'transparent',
				borderColor: myVarVal,
				pointBackgroundColor: '#ffffff',
				pointRadius: 0,
				type: 'line',
			},
			{

				label: '2022',
				data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454, 230,],
				borderWidth: 3,
				backgroundColor: 'transparent',
				borderColor: 'rgb(183, 179, 220,0.5)',
				pointBackgroundColor: '#ffffff',
				pointRadius: 0,
				type: 'line',
				borderDash: [7, 3],

			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				enabled: true,
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#c8ccdb",
					},
					barPercentage: 0.7,
					display: true,
					gridLines: {
						color: 'rgba(119, 119, 142, 0.2)',
						zeroLineColor: 'rgba(119, 119, 142, 0.2)',
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#77778e",
					},
					display: true,
					gridLines: {
						color: 'rgba(119, 119, 142, 0.2)',
						zeroLineColor: 'rgba(119, 119, 142, 0.2)',
					},
					ticks: {
						min: 0,
						max: 1050,
						stepSize: 150
					},
					scaleLabel: {
						display: true,
						labelString: 'Thousands',
						fontColor: 'transparent'
					}
				}]
			},
			legend: {
				display: true,
				width: 30,
				height: 30,
				borderRadius: 50,
				labels: {
					fontColor: "#77778e"
				},
			},
		}
	});
}

// GRAFICO ABAIXO 2
function index_2() {
	'use strict'

	var ctx = document.getElementById('project2').getContext('2d');

	/*
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			datasets: [{
				label: 'Total Project',
				backgroundColor: myVarVal,
				borderColor: myVarVal,
				data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56,],
			}, {
				label: 'On Going',
				backgroundColor: "rgba(204, 204, 204,0.2)",
				borderColor: "rgba(204, 204, 204,0.2)",
				data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32, 59, 76, 56,],
			}
			],
		},
		options: {
			tooltips: {
				displayColors: true,
			},
			barValueSpacing: 3,        // doesn't work; find another way
			barDatasetSpacing: 3,
			scales: {
				xAxes: [{
					barThickness: 3,
					categoryPercentage: 4,
					barPercentage: 4,
					stacked: true,
					display: false,
					gridLines: {
						display: false,
					}
				}],
				yAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: false,
					},
					display: false,
					gridLines: {
						display: false,
					},
					type: 'linear',
					display: false,
				}]
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: { position: 'bottom', display: false, },
		}
	});
	*/

	// ************************

	// Função para criar um conjunto de dados com base no gênero
	function createDataset(gender, backgroundColor, borderColor) {
		return {
			label: `Gênero - ${gender}`,
			backgroundColor: backgroundColor,
			borderColor: borderColor,
			data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56],
		};
	}

	// Cores para gênero masculino e feminino
	var maleColor = myVarVal;
	var femaleColor = "rgba(204, 204, 204,0.2)";

	// Dados para gênero masculino
	var maleDataset = createDataset("Masculino", maleColor, maleColor);

	// Dados para gênero feminino
	var femaleDataset = createDataset("Feminino", femaleColor, femaleColor);

	// Configuração do gráfico
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			datasets: [maleDataset, femaleDataset],
		},
		options: {
			tooltips: {
				displayColors: true,
			},
			barValueSpacing: 3,
			barDatasetSpacing: 3,
			scales: {
				xAxes: [{
					barThickness: 3,
					categoryPercentage: 4,
					barPercentage: 4,
					stacked: true,
					display: false,
					gridLines: {
						display: false,
					}
				}],
				yAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: false,
					},
					display: false,
					gridLines: {
						display: false,
					},
					type: 'linear',
					display: false,
				}]
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: { position: 'top', display: true },
		}
	});
	/**/
	// ************************


}

// GRAFICO ACIMA 2



/* Peity charts */

$('.peity-donut').peity('donut');


/*Bar-Chart */

/*
Chart.elements.Rectangle.prototype.draw = function () {
	var ctx = this._chart.ctx;
	var vm = this._view;
	var left, right, top, bottom, signX, signY, borderSkipped, radius;
	var borderWidth = vm.borderWidth;
	var cornerRadius = 4;

	if (!vm.horizontal) {
		// bar
		left = vm.x - vm.width / 1;
		right = vm.x + vm.width / 1;
		top = vm.y;
		bottom = vm.base;
		signX = 1;
		signY = bottom > top ? 1 : -1;
		borderSkipped = vm.borderSkipped || 'bottom';
	} else {
		// horizontal bar
		left = vm.base;
		right = vm.x;
		top = vm.y - vm.height / 1;
		bottom = vm.y + vm.height / 1;
		signX = right > left ? 1 : -1;
		signY = 1;
		borderSkipped = vm.borderSkipped || 'left';
	}
	ctx.beginPath();
	ctx.fillStyle = vm.backgroundColor;
	ctx.strokeStyle = vm.borderColor;
	ctx.lineWidth = borderWidth;

	// Corner points, from bottom-left to bottom-right clockwise
	// | 1 2 |
	// | 0 3 |
	var corners = [
		[left, bottom],
		[left, top],
		[right, top],
		[right, bottom]
	];

	// Find first (starting) corner with fallback to 'bottom'
	var borders = ['bottom', 'left', 'top', 'right'];
	var startCorner = borders.indexOf(borderSkipped, 0);
	if (startCorner === -1) {
		startCorner = 0;
	}

	function cornerAt(index) {
		return corners[(startCorner + index) % 2];
	}

	// Draw rectangle from 'startCorner'
	var corner = cornerAt(0);
	ctx.moveTo(corner[0], corner[1]);

	for (var i = 1; i < 2; i++) {
		corner = cornerAt(i);
		nextCornerId = i + 1;
		if (nextCornerId == 2) {
			nextCornerId = 0
		}

		nextCorner = cornerAt(nextCornerId);

		width = corners[2][0] - corners[1][0];
		height = corners[0][1] - corners[1][1];
		x = corners[1][0];
		y = corners[1][1];

		var radius = cornerRadius;

		// Fix radius being too large
		if (radius > height / 2) {
			radius = height / 2;
		} if (radius > width / 2) {
			radius = width / 2;
		}

		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);

	}

	ctx.fill();
	if (borderWidth) {
		ctx.stroke();
	}
};
*/

function barchart() {
	'use strict'
	var ctx = document.getElementById('bar-chart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			datasets: [{
				label: 'Total Project',
				backgroundColor: myVarVal,
				borderColor: myVarVal,
				data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56,],
			}, {
				label: 'On Going',
				backgroundColor: "rgba(204, 204, 204,0.2)",
				borderColor: "rgba(204, 204, 204,0.2)",
				data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32, 59, 76, 56,],
			}
			],
		},
		options: {
			tooltips: {
				displayColors: true,
			},
			barValueSpacing: 3,        // doesn't work; find another way
			barDatasetSpacing: 3,
			scales: {
				xAxes: [{
					barThickness: 3,
					categoryPercentage: 4,
					barPercentage: 4,
					stacked: true,
					display: false,
					gridLines: {
						display: false,
					}
				}],
				yAxes: [{
					stacked: true,
					ticks: {
						beginAtZero: false,
					},
					display: false,
					gridLines: {
						display: false,
					},
					type: 'linear',
					display: false,
				}]
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: { position: 'bottom', display: false, },
		}
	});
};


// #########################
// function cryptodonut() {
// 	/* Chartjs (#donut)  */
// 	if ($('#crypto-donut').length) {
// 	  var ctx = document.getElementById("crypto-donut").getContext("2d");
// 	  new Chart(ctx, {
// 		type: 'doughnut',
// 		data: {
// 		  labels: ["Bitcoin", 'Ethereum', 'Dash'],
// 		  datasets: [{
// 			data: [50, 30, 30],
// 			backgroundColor: [
// 			  myVarVal, hexToRgba(myVarVal, 0.6), hexToRgba(myVarVal, 0.4)
// 			],
// 			borderWidth: 0,
// 		  }]
// 		},
// 		options: {
// 		  responsive: true,
// 		  maintainAspectRatio: false,
// 		  legend: {
// 			display: false
// 		  },
// 		  cutoutPercentage: 73,
// 		},

// 	  });
// 	}

function spark111() {

	try {
		$(document).ready(function () {

			document.querySelector('#sparkline111').innerHTML = '3,4,4,7,5,9,10,6,4,4,7,5,9,10,8,7,5,9,10,6,9,4,7,5'
			$('#sparkline111').sparkline('html', {
				width: 120,
				height: 30,
				lineColor: myVarVal,
				fillColor: hexToRgba(myVarVal, 0.2)
			});



			document.querySelector('#sparkline112').innerHTML = '3,6,6,7,4,8,10,4,6,8,3,5,6,9,2,2,5,8,10,6,8,4,6,4'
			$('#sparkline112').sparkline('html', {
				width: 120,
				height: 30,
				lineColor: myVarVal,
				fillColor: hexToRgba(myVarVal, 0.2)
			});


			document.querySelector('#sparkline113').innerHTML = '3,4,4,7,5,9,10,6,4,4,7,5,9,10,8,7,5,9,10,6,9,4,7,5'
			$('#sparkline113').sparkline('html', {
				width: 120,
				height: 30,
				lineColor: myVarVal,
				fillColor: hexToRgba(myVarVal, 0.2)
			});


			document.querySelector('#sparkline113').innerHTML = '3,4,4,7,5,9,10,6,4,4,7,5,9,10,8,7,5,9,10,6,9,4,7,5'
			$('#sparkline113').sparkline('html', {
				width: 120,
				height: 30,
				lineColor: myVarVal,
				fillColor: hexToRgba(myVarVal, 0.2)
			});


			document.querySelector('#sparkline114').innerHTML = '3,4,4,7,1,9,10,6,4,4,7,5,3,10,8,7,5,9,21,6,9,4,7,5'
			$('#sparkline114').sparkline('html', {
				width: 120,
				height: 30,
				lineColor: myVarVal,
				fillColor: hexToRgba(myVarVal, 0.2)
			});

		});


	} catch (erro) { alert(erro) }
}

//   ############################

//   GRÁFICOS ACIMA

// Fc-datepicker
$('.fc-datepicker').datepicker({
	showOtherMonths: true,
	selectOtherMonths: true
});

// Datepicker no of months
$('#datepickerNoOfMonths').datepicker({
	showOtherMonths: true,
	selectOtherMonths: true,
	numberOfMonths: 2
});

//Date picker
$('#datepicker-date').bootstrapdatepicker({
	format: "dd-mm-yyyy",
	viewMode: "date",
	multidate: true,
	multidateSeparator: "-",
})