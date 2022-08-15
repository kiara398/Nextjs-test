import {Table, TableBody, TableContainer, TableRow, TableHead, TableCell, Paper} from '@mui/material'
import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, Tooltip, LinearScale, LineElement,PointElement, Title, Filler, Legend, ArcElement, BarElement} from 'chart.js';

Chart.register(
    CategoryScale, Tooltip, LinearScale, LineElement,PointElement, Title, Filler, Legend, ArcElement, BarElement
)
const data = {
    labels:[
       "JAN",
       "FEB",
       "MAR" ,
       "APR",
       "MAY",
       "JUN",
       "JUL", 
       "AUG",
       "SEP"
    ],
datasets:[{
data : [90,98,80,85,90,70, 94,88,78],
label: "Business",
borderRadius: 0,
barThickness: 7,
backgroundColor: "orange",

},
{
    data : [80,88,90,56,60,70,78,77,80],
    label: "Drivers",
    borderRadius: 0,
    barThickness: 7,
    backgroundColor: "green",
    
    },
    {
        data : [60,70,65,80,90,78,85,67,87],
        label: "Customers",
        borderRadius: 0,
        barThickness: 7,
        backgroundColor: "pink",
        
        }
]
}


const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

const Section2= () => {
    return <div>
        <div className='coll' style={{marginTop: '5%', height:'300px'}}>
    <Bar data={data} options={options} />
</div>
<TableContainer
  component={Paper} 
  variant="outlined"
>
  <Table aria-label="demo table">
    <TableHead>
      <TableRow>
        <TableCell>Dessert</TableCell>
        <TableCell>Calories</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Frozen yoghurt</TableCell>
        <TableCell>109</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cupcake</TableCell>
        <TableCell>305</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
</div>
}

export default Section2