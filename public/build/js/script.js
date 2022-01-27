// All javascript code in this project for now is just for demo DON'T RELY ON IT

const random = (max = 100) => {
  return Math.round(Math.random() * max) + 20
}

const Casualty = ()=>{
  return[
    '940',
    '940',
'1614',
'1251',
'1799',
'2369',
'1448',
'2923',
'4136',
'4845',
'4871',
'4909',
'5136',
'5171',
'5247',
'5457',
'5956',
'6887',
'8049',
'7790',
'7945',
'8014',
'7969',
'7840',
'7069',
'6952',
'7639',
'8160',
'7970',
'6430',
'6436',
'6035',
'6157 ',
'6065',
'6303',
'6687',
  ]
}

const Fatalities = () => {
  return [
    "93",
    '93',
'130',
'176',
'168',
'198',
'182',
'191',
'262',
'295',
'314',
'349',
'368',
'379',
'352',
'410',
'338',
'411',
'453',
'494',
'529',
'526',
'520',
'557',
'532',
'450',
'429',
'497',
'455',
'475',
'397',
'483',
'404',
'411',
'377',
'411',
'450'
  ]
}

const minorinjury = () => {
  return [
    '682',
    '682',
'904',
'778',
'1333',
'954',
'3353',
'2578',
'2556',
'1868',
'2455',
'3161',
'3740',
'3646',
'3897',
'3879',
'4543',
'5515',
'6939',
'8379',
'7994',
'8654',
'10076',
'9803',
'9764',
'10003',
'9654',
'11351',
'11800',
'11555',
'12151',
'11082',
'11088',
'10494',
'10199',
'10940',
'11236'
  ]
}
const months = ['1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992','1993','1994','1994','1995','1996','1997','1998','1999',
'2000',
'2001',
'2002',
'2003',
'2004',
'2005',
'2006',
'2007',
'2008',
'2009',
'2010',
'2011',
'2012',
'2013',
'2014',
'2015',
'2016'
]

const cssColors = (color) => {
  return getComputedStyle(document.documentElement).getPropertyValue(color)
}

const getColor = () => {
  return window.localStorage.getItem('color') ?? 'cyan'
}

const colors = {
  primary: cssColors(`--color-${getColor()}`),
  primaryLight: cssColors(`--color-${getColor()}-light`),
  primaryLighter: cssColors(`--color-${getColor()}-lighter`),
  primaryDark: cssColors(`--color-${getColor()}-dark`),
  primaryDarker: cssColors(`--color-${getColor()}-darker`),
}

const barChart = new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: months,
    datasets: [
      {
        data: Fatalities(),
        label: 'Fatalities',
        backgroundColor: "#b207eb",
        hoverBackgroundColor: colors.primaryDark,
      },
      {
        data: Casualty(),
        label: 'Casualties',
        backgroundColor: "#b893c4",
        hoverBackgroundColor: colors.primaryDark,
      },
      {
        data: minorinjury(),
        label: 'Minor Injuries',
        backgroundColor:  "#4c1d5c",
        hoverBackgroundColor: colors.primaryDark,
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: true,
            stepSize: 90,
            fontSize: 16,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 10,
          },
        },
      ],
      xAxes: [
        {
          gridLines: false,
          ticks: {
            fontSize: 16,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 5,
          },
          categoryPercentage: 0.5,
          maxBarThickness: '20',
        },
      ],
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontSize: 16,
        fontColor: '#97a4af',
        fontFamily: 'Open Sans, sans-serif',
      }

    },
  },
})


const doughnutChart = new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Fatalities', 'Casualty', 'Minor Injuries'],
    datasets: [
      {
        data: [3.4, 43.7, 53],
        backgroundColor: ["#b207eb", "#b893c4", "#4c1d5c"],
        hoverBackgroundColor: colors.primaryDark,
        borderWidth: 0,
        weight: 0.5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },

    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
})



// multi line chart
const multiLineChart = new Chart(document.getElementById('multiLineChart'), {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      {
        data: Fatalities(),
        label: 'Fatalities',
        backgroundColor:"#b207eb",
        borderColor: "#b207eb",
        borderWidth: 2,
        fill: false,
        lineTension: 0,
        pointRadius: 6,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 0,
        pointHoverBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
      },
      {
        data: Casualty(),
        label: "Casualty",
        backgroundColor: "#b893c4",
        borderColor: "#b893c4",
        borderWidth: 2,
        fill: false,
        lineTension: 0,
        pointRadius: 6,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 0,
        pointHoverBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
      },
      {
        data: minorinjury(),
        backgroundColor: "#4c1d5c",
        borderColor: "#4c1d5c",
        borderWidth: 2,
        label: "minor injury",
        fill: false,
        lineTension: 0,
        pointRadius: 6,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 0,
        pointHoverBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 10,
          },


        }
      ]
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: true,
    },
  },
})


  // multi bar chart
  const multiBarChart = new Chart(document.getElementById('multiBarChart'), {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          data: Fatalities(),
          backgroundColor: colors.primary,
          hoverBackgroundColor: colors.primaryDark,
        },
        {
          data: Casualty(),
          backgroundColor: colors.primaryLighter,
          hoverBackgroundColor: colors.primaryLight,
        },
        {
          data: minorinjury(),
          backgroundColor: colors.primaryLighter,
          hoverBackgroundColor: colors.primaryLight,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            gridLines: false,
            ticks: {
              beginAtZero: true,
              stepSize: 50,
              fontSize: 12,
              fontColor: '#97a4af',
              fontFamily: 'Open Sans, sans-serif',
              padding: 10,
            },

          }
        ]

      },
      cornerRadius: 2,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  });





const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const byMonth2018 =() => {
  return [
    "485",
    "589",
    "65",
    "522",
    "48",
    "489",
    "223",
    "456",
    "567",
    "698",
    "321",
    "487",
    "111"
  ]
}

// Fatalities by Month

const byMonth = new Chart(document.getElementById('barChartMonth'), {
  type: 'bar',
  data: {
    labels: months,
    datasets: [
      {
        data: byMonth2018(),
        backgroundColor: colors.primary,
        hoverBackgroundColor: colors.primaryDark,
      }
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          gridLines: false,
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 10,
          },

        }
      ]

    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  },
})

 

  








