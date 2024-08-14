function regulacao_grafico_f() {

    try {

        $(document).ready(function () {

            function graf_1() {
                
                var ctx = $('#regulacao_grafico');
                ctx.height(110);
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['7 horas ', '8 horas', '9 horas', '10 horas', '11 horas', '13 horas', '14 horas', '15 horas', '16 horas', '17 horas', '18 horas',],
                        type: 'line',
                        datasets: [{
                            data: [45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 96, 36, 32, 48, 54, 87, 88, 96, 53],
                            label: 'Fluxo por Hora',
                            backgroundColor: 'rgba(98, 89, 202, 0.2)',
                            borderColor: '#6259ca',
                            borderWidth: '2',
                            pointBorderColor: 'transparent',
                            pointBackgroundColor: 'transparent',
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        responsive: true,
                        tooltips: {
                            mode: 'index',
                            titleFontSize: 12,
                            titleFontColor: '#7886a0',
                            bodyFontColor: '#7886a0',
                            backgroundColor: '#fff',
                            titleFontFamily: 'Montserrat',
                            bodyFontFamily: 'Montserrat',
                            cornerRadius: 3,
                            intersect: false,
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    color: 'transparent',
                                    zeroLineColor: 'transparent'
                                },
                                ticks: {
                                    fontSize: 2,
                                    fontColor: 'transparent'
                                }
                            }],
                            yAxes: [{
                                display: false,
                                ticks: {
                                    display: false,
                                }
                            }]
                        },
                        title: {
                            display: false,
                        },
                        elements: {
                            line: {
                                borderWidth: 1
                            },
                            point: {
                                radius: 4,
                                hitRadius: 10,
                                hoverRadius: 4
                            }
                        }
                    }
                });
                
            }graf_1();


            function graf_2() {
                
                var ctx = $('#regulacao_grafico_inconsistentes');
                ctx.height(110);
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['7 horas ', '8 horas', '9 horas', '10 horas', '11 horas', '13 horas', '14 horas', '15 horas', '16 horas', '17 horas', '18 horas',],
                        type: 'line',
                        datasets: [{
                            data: [45, 31, 32, 67, 95, 72, 17, 55, 46, 54, 32, 74, 24, 96, 36, 32, 48, 54, 87, 88, 96, 53],
                            label: 'Fluxo por Hora',
                            backgroundColor: 'rgba(98, 89, 202, 0.2)',
                            borderColor: '#6259ca',
                            borderWidth: '2',
                            pointBorderColor: 'transparent',
                            pointBackgroundColor: 'transparent',
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        responsive: true,
                        tooltips: {
                            mode: 'index',
                            titleFontSize: 12,
                            titleFontColor: '#7886a0',
                            bodyFontColor: '#7886a0',
                            backgroundColor: '#fff',
                            titleFontFamily: 'Montserrat',
                            bodyFontFamily: 'Montserrat',
                            cornerRadius: 3,
                            intersect: false,
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    color: 'transparent',
                                    zeroLineColor: 'transparent'
                                },
                                ticks: {
                                    fontSize: 2,
                                    fontColor: 'transparent'
                                }
                            }],
                            yAxes: [{
                                display: false,
                                ticks: {
                                    display: false,
                                }
                            }]
                        },
                        title: {
                            display: false,
                        },
                        elements: {
                            line: {
                                borderWidth: 1
                            },
                            point: {
                                radius: 4,
                                hitRadius: 10,
                                hoverRadius: 4
                            }
                        }
                    }
                });
                
            }graf_2();

     
            
            function graf_3() {
                
                var ctx = $('#regulacao_grafico_consistentes');
                ctx.height(110);
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['7 horas ', '8 horas', '9 horas', '10 horas', '11 horas', '13 horas', '14 horas', '15 horas', '16 horas', '17 horas', '18 horas',],
                        type: 'line',
                        datasets: [{
                            data: [12, 68, 24, 53, 77, 29, 63, 91, 18, 42, 55, 37, 89, 44, 61, 28, 50, 76, 22, 93, 17, 60],
                            label: 'Fluxo por Hora',
                            backgroundColor: 'rgba(98, 89, 202, 0.2)',
                            borderColor: '#6259ca',
                            borderWidth: '2',
                            pointBorderColor: 'transparent',
                            pointBackgroundColor: 'transparent',
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        responsive: true,
                        tooltips: {
                            mode: 'index',
                            titleFontSize: 12,
                            titleFontColor: '#7886a0',
                            bodyFontColor: '#7886a0',
                            backgroundColor: '#fff',
                            titleFontFamily: 'Montserrat',
                            bodyFontFamily: 'Montserrat',
                            cornerRadius: 3,
                            intersect: false,
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    color: 'transparent',
                                    zeroLineColor: 'transparent'
                                },
                                ticks: {
                                    fontSize: 2,
                                    fontColor: 'transparent'
                                }
                            }],
                            yAxes: [{
                                display: false,
                                ticks: {
                                    display: false,
                                }
                            }]
                        },
                        title: {
                            display: false,
                        },
                        elements: {
                            line: {
                                borderWidth: 1
                            },
                            point: {
                                radius: 4,
                                hitRadius: 10,
                                hoverRadius: 4
                            }
                        }
                    }
                });
                
            }graf_3();

           
            function graf_4() {
                
                var ctx = $('#regulacao_grafico_inseridas');
                ctx.height(110);
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['7 horas ', '8 horas', '9 horas', '10 horas', '11 horas', '13 horas', '14 horas', '15 horas', '16 horas', '17 horas', '18 horas',],
                        type: 'line',
                        datasets: [{
                            data: [64, 39, 21, 75, 47, 58, 33, 91, 70, 26, 84, 19, 43, 57, 68, 29, 52, 37, 88, 50, 12, 95],
                            label: 'Fluxo por Hora',
                            backgroundColor: 'rgba(98, 89, 202, 0.2)',
                            borderColor: '#6259ca',
                            borderWidth: '2',
                            pointBorderColor: 'transparent',
                            pointBackgroundColor: 'transparent',
                        }]
                    },
                    options: {
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        responsive: true,
                        tooltips: {
                            mode: 'index',
                            titleFontSize: 12,
                            titleFontColor: '#7886a0',
                            bodyFontColor: '#7886a0',
                            backgroundColor: '#fff',
                            titleFontFamily: 'Montserrat',
                            bodyFontFamily: 'Montserrat',
                            cornerRadius: 3,
                            intersect: false,
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    color: 'transparent',
                                    zeroLineColor: 'transparent'
                                },
                                ticks: {
                                    fontSize: 2,
                                    fontColor: 'transparent'
                                }
                            }],
                            yAxes: [{
                                display: false,
                                ticks: {
                                    display: false,
                                }
                            }]
                        },
                        title: {
                            display: false,
                        },
                        elements: {
                            line: {
                                borderWidth: 1
                            },
                            point: {
                                radius: 4,
                                hitRadius: 10,
                                hoverRadius: 4
                            }
                        }
                    }
                });
                
            }graf_4();

        });



      
        



    } catch (erro) { alert(erro) }
}