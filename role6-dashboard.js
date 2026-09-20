// 1. CHART VARIABLE DECLARATION
let summaryPieChart = null;

// 2.DISPLAY FUNCTION
function renderSummaryChart(totalRevenue, totalCapital) {
    const ctx = document.getElementById('SummaryChart').getContext('2d');
if (summaryPieChart) {
    summaryPieChart.data.datasets[0].data= [totalRevenue,totalCapital];
    summaryPieChart.update();
}
return;

   summaryPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Revenue', 'Total Capital'],
            datasets: [{
                data: [totalRevenue, totalCapital],
                backgroundColor: ['#2ec4b6', '#e71d36']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Overall Summary (Revenue vs Capital)'
                }
            }
        }
    });
}

// 3. INITIAL LOAD / EVENT TRIGGER
document.addEventListener('DOMContentLoaded', () => {
    const testRevenue = 4500
    const testCapital = 12000

    renderSummaryChart(testRevenue,testCapital);
    });
