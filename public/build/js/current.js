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

  const Year = ['2006','2007','2008','2009','2010','2011','2012','2013','2014']

  const JunctionType = () => {
    return [
        "1",
    ]

}

  const Gender =['Male','Female']

  const dateOfTheWeek = ()=>{
    return[
      '2434',
      '2784',
      '2916',
      '2857',
      '2711',
      '2572',
      '2504',
      '2437',
      '2377' 
    ]
  }

  const DaysOfTheWeeks =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const TotalsCruhesData = ()=>{
  return[
    '17035',
    '19487',
    '20415',
    '20000',
    '18978',
    '18001',
    '170527',
    '17062',
    '1664'

  ]
  
}

const SeriousInjuryData = ()=>{
  return[
    '5286',
    '5648',
    '6183',
    '5955',
    '4781',
    '4714',
    '4346',
    '4438',
    '4454'
  ]
}
const  MinorData = ()=>{
  return[
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

const FatalData = ()=>{
  return[
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
  const barChart = new Chart(document.getElementById('barChart'), {
    type: 'line',
    data: {
      labels: Year,
      datasets: [
        {
          data: TotalsCruhesData(),
          backgroundColor:"#b207eb",
        borderColor: "#b207eb",
        borderWidth: 2,
        fill: false,
        lineTension: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 0,
        pointHoverBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        },
        {
          data: FatalData(),
          backgroundColor:"#ff0000",
        borderColor: "#ff0000",
        borderWidth: 2,
        fill: false,
        lineTension: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        pointHoverBorderWidth: 0,
        pointHoverBorderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        },
        {
          data: SeriousInjuryData(),
          label: 'Fatalities',
          backgroundColor: "#2c0d3d",
          borderColor: "#2c0d3d",
          borderWidth: 2,
          fill: false,
          lineTension: 0,
          pointRadius: 0,
          pointHitRadius: 0,
          pointHoverRadius: 0,
          pointHoverBorderWidth: 0,
          pointHoverBorderColor: 'transparent',
          pointBackgroundColor: 'transparent',
        },
        {
          data: MinorData(),
          label: 'Fatalities',
          backgroundColor: "#b893c4",
          borderColor: "#b893c4",
          borderWidth: 2,
          fill: false,
          lineTension: 0,
          pointRadius: 0,
          pointHitRadius: 0,
          pointHoverRadius: 0,
          pointHoverBorderWidth: 0,
          pointHoverBorderColor: 'transparent',
          pointBackgroundColor: 'transparent',
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
              fontSize: 10,
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
              fontSize: 10,
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
        display: true
      },
    },
  })
  
  
  const doughnutChart = new Chart(document.getElementById('doughnutChart'), {
    type: 'doughnut',
    data: {
      labels: ['Non Junction', 'Stop sign', 'Signals working', 'uncontrolled stop', 'Yield sign', 'Signals not working'],
      datasets: [
        {
          data: [87, 6, 4,2,13,0],
          label: 'Casualties',
          backgroundColor: ["#b207eb", "#b893c4", "#4u1d5c", "#f7b731", "#4c1d5c", "#473d20"],
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
        labels: {
            boxWidth: 10,
            fontSize: 10,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 5,
        },    
      },
  
      title: {
        display: true,
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  })
  
  
  
  // multi line chart
  const multiLineChart = new Chart(document.getElementById('multiLineChart'), {
    type: 'bar',
    data: {
      labels: DaysOfTheWeeks,
      datasets: [
        {
          data: byMonth2018(),
          backgroundColor:"#4c1d5c",
          borderColor: "#4c1d5c",
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

  const districts =['Gaborone West','Gaborone','Serowe','Francistown','Kanye','Kutlwano','Molepolole','Maun','Mochudi','Selebi-Phikwe','Letlhakane','Lobatse','Tsabong','Ghanzi','Kasane']
  const  PoliceDistricts = ()=>{
    return[
      "4578",
      "4325",
      "1789",
      "1012",
      "932",
      "925",
      '896',
      '761',
      '726',
      '513',
      '486',
      '295',
      '222',
      '196',
      '192',
    ]
  }
   const multiLineChart2 = new Chart(document.getElementById('multiLineChart2'), {
    type: 'bar',
    data: {
      labels: districts,
      datasets: [
        {
          data: PoliceDistricts(),
          
          backgroundColor:"#4c1d5c",
          borderColor: "#4c1d5c",
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
  
  
  
  
  
  
  
  // Fatalities by Month
  
  const barChartMonth = new Chart(document.getElementById('barChartMonth'), {
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


  const byGender = new Chart(document.getElementById('byGender'), {
    type: 'bar',
    data: {
      labels: DaysOfTheWeeks,
      datasets: [
        {
          data: dateOfTheWeek(),
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
   
  });
  
   
  
    
  
  
  
  
  
  
  
  
  

