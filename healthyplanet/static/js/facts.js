$(document).ready(function () {
    // register the chartjs deferred plugin
    Chart.register(ChartDeferred);

    // locate the chart contexts
    const productionCtx = document.getElementById('plastic-production').getContext('2d');
    const decompositionCtx = document.getElementById('plastic-decomposition').getContext('2d');
    const wasteCtx = document.getElementById('plastic-waste').getContext('2d');

    // initialise the plasticp-production chart
    const productionChart = new Chart(productionCtx, {
        // set chart type
        type: 'bar',
        // set chart data
        data: {
            labels: ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
            datasets: [{
                label: 'Millions of Tonnes of Plastics Produced',
                data: [2, 8, 35, 70, 120, 213, 313, 367],
                backgroundColor: [
                    '#18B7BE',
                ],
                borderColor: [
                    '#072A40'
                ],
                borderWidth: 2
            }]
        },
        // set chart options
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: true,
                        borderColor: "#072A40",
                        borderWidth: 2,
                    }
                },
                x: {
                    grid: {
                        drawBorder: true,
                        borderColor: "#072A40",
                        borderWidth: 2,
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                // set deferred chart animation options
                deferred: {
                    xOffset: 150,
                    yOffset: '100%',
                    delay: 250
                }
            }
        }
    });

    // initialise the plastic-decomposition chart
    const decompositionChart = new Chart(decompositionCtx, {
        // set chart type
        type: 'pie',
        // set chart data
        data: {
            labels: ['% Still In Use', '% Landfil or Discarded', '% Incinerated', '% Recycled'],
            datasets: [{
                data: [30, 55, 8, 6],
                backgroundColor: [
                    '#18B7BE',
                    '#FF595E',
                    '#FF9B42',
                    '#717EC3',
                ],
                borderWidth: 1
            }]
        },
        // set chart options
        options: {
            scales: {},
            plugins: {
                legend: {
                    position: "bottom"
                },
                // set deferred chart animation options
                deferred: {
                    xOffset: 150,
                    yOffset: '100%',
                    delay: 250
                }
            }
        }
    });

    // initialise the plastic-waste chart
    const wasteChart = new Chart(wasteCtx, {
        // set chart type
        type: 'bar',
        // set chart data
        data: {
            labels: ["Packaging", "Textiles", "Other", "Consumer Products", "Transportation", "Construction", "Electricals", "Industrial Machinery"],
            datasets: [{
                label: "Millions of tonnes of waste",
                data: [141, 42, 38, 37, 17, 13, 13, 1],
                backgroundColor: [
                    '#18B7BE',
                    '#FF595E',
                    '#FF9B42',
                    '#717EC3',
                ],
                borderWidth: 1
            }]
        },
        // set chart options
        options: {
            scales: {},
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: ["Annual plastic waste by sector in millions of tonnes"]
                },
                // set deferred chart animation options
                deferred: {
                    xOffset: 150,
                    yOffset: '100%',
                    delay: 250
                }
            }
        }
    });
})