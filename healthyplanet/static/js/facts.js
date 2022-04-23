const productionCtx = document.getElementById('plastic-production').getContext('2d');
const decompositionCtx = document.getElementById('plastic-decomposition').getContext('2d');
const wasteCtx = document.getElementById('plastic-waste').getContext('2d');
const productionChart = new Chart(productionCtx, {
    type: 'bar',
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
            }
        }
    }
});

const decompositionChart = new Chart(decompositionCtx, {
    type: 'pie',
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
    options: {
        scales: {
        },
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});

const wasteChart = new Chart(wasteCtx, {
    type: 'bar',
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
    options: {
        scales: {
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: ["Annual plastic waste by sector in millions of tonnes"]
            }
        }
    }
});