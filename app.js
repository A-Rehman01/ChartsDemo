let myCharts = document.getElementById("mychart").getContext('2d')   //getcontext use kre jb bhi convas ki bt hogi


// //Global for charts
Chart.defaults.global.defaultFontFamily = 'lato';
Chart.defaults.global.defaultFontSize = 7;
Chart.defaults.global.defaultFontColor = 'black';

let populationCharts = new Chart(myCharts, {
    type: 'bar',  //hori,pie,line etc
    data: {
        labels: ['Karachi', 'Islamabad', 'Lahore', 'Faislabad', 'Multan'],

        datasets: [{
            label: 'Population',
            data: [206, 400, 490, 100, 84],
            // backgroundColor:'green'  agr sub ko ek  jese wrna ye wala trika
            backgroundColor: [
                backgroundColor = 'green',
                backgroundColor = 'yellow',
                backgroundColor = 'lightblue',
                backgroundColor = 'brown',
                backgroundColor = 'purple'
            ],
            borderWidth: '1',
            borderColor: 'grey',
            hoverBorderWidth: '3',
            hoverBorderColor: 'black'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pakistan Population Graph',
            fontSize: 19,
        },
        legend: {   //jo upr diya he apne title
            display: true,
            position: 'right',
            labels: {
                fontSize: 14,
            }
        }
    }

})


let mychart2 = document.getElementById("mychart2").getContext('2d');

let chart2 = new Chart(mychart2, {
    type: 'pie',
    data: {
        labels: ['pak', 'ind', 'bang', 'Sri', 'Eng'],
        datasets: [{
            label: 'Population',
            data: [234, 43, 123, 65, 875],
            // backgroundColor: 'green'
            backgroundColor: [
                backgroundColor = 'green',
                backgroundColor = 'red',
                backgroundColor = 'yellow',
                backgroundColor = 'blue',
                backgroundColor = "lightblue"
            ],
            borderWidth: '2',
            borderColor: 'black'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Population of World',
            fontSize: 17,
            backgroudColor: 'black'
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontSize: 14
            }
        }
    }
})
