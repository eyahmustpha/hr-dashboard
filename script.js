document.addEventListener('DOMContentLoaded', function() {
  // Data for charts
  const rolesData = {
    labels: ["VPs", "Managers", "Other Members"],
    datasets: [{
      data: [7, 25, 58],
      backgroundColor: [
        '#4cc9f0',
        '#f72585',
        '#7209b7'
      ],
      borderWidth: 1
    }]
  };

  const deptData = {
    labels: ["oGV", "iGV", "iGT", "oGT", "TM&IM", "BD&EwA", "MKT", "F&L"],
    datasets: [{
      label: 'Performance Score (/10)',
      data: [8.5, 7.0, 6.5, 6.0, 7.5, 6.8, 7.2, 8.0],
      backgroundColor: [
        '#9b59b6',
        '#3498db',
        '#2ecc71',
        '#e67e22',
        '#1abc9c',
        '#f1c40f',
        '#e74c3c',
        '#95a5a6'
      ],
      borderWidth: 1
    }]
  };

  const budgetData = {
    labels: ["oGV", "iGV", "iGT", "oGT", "TM&IM", "BD&EwA", "MKT", "F&L"],
    datasets: [{
      label: 'Budget Used (€)',
      data: [6500, 4500, 5500, 3500, 5500, 4000, 5000, 6000],
      backgroundColor: [
        '#9b59b6',
        '#3498db',
        '#2ecc71',
        '#e67e22',
        '#1abc9c',
        '#f1c40f',
        '#e74c3c',
        '#95a5a6'
      ],
      borderWidth: 1
    }]
  };

  // Create charts
  const rolesCtx = document.getElementById('rolesChart').getContext('2d');
  new Chart(rolesCtx, {
    type: 'pie',
    data: rolesData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#f1f1f1',
            font: {
              size: 10
            }
          }
        }
      }
    }
  });

  const deptCtx = document.getElementById('deptChart').getContext('2d');
  new Chart(deptCtx, {
    type: 'bar',
    data: deptData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 10,
          ticks: {
            color: '#f1f1f1',
            font: {
              size: 10
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          ticks: {
            color: '#f1f1f1',
            font: {
              size: 10
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#f1f1f1',
            font: {
              size: 10
            }
          }
        }
      }
    }
  });

  const budgetCtx = document.getElementById('budgetChart').getContext('2d');
  new Chart(budgetCtx, {
    type: 'bar',
    data: budgetData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#f1f1f1',
            font: {
              size: 10
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          ticks: {
            color: '#f1f1f1',
            font: {
              size: 10
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#f1f1f1',
            font: {
              size: 10
            }
          }
        }
      }
    }
  });

  // Hide loading overlay
  document.getElementById('loadingOverlay').style.display = 'none';
});