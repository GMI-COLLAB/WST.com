document.getElementById('moreLink').addEventListener('click', function(event) {
    const graph = document.getElementById('pHGraph');
    const isVisible = graph.style.display === 'block';
    graph.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        drawGraph();
    }
});

function drawGraph() {
    const ctx = document.getElementById('pHGraphCanvas').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Replace with actual labels
            datasets: [{
                label: 'pH Level',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: [7.0, 7.4, 7.2, 7.5, 7.3], // Replace with actual data
                fill: false,
                pointRadius: 5,
                pointHoverRadius: 7,
                showLine: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const phValue = context.parsed.y;
                            let status = 'Normal';
                            if (phValue < 7.0) {
                                status = "It's too low";
                            } else if (phValue > 7.4) {
                                status = "It's too high";
                            }
                            return `pH Level: ${phValue} (${status})`;
                        }
                    }
                }
            }
        }
    });
}
