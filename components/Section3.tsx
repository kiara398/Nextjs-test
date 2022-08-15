import {Table, TableBody, TableContainer, TableRow, TableHead, TableCell, Paper} from '@mui/material'
import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, Tooltip, LinearScale, LineElement,PointElement, Title, Filler, Legend, ArcElement, BarElement} from 'chart.js';

Chart.register(
    CategoryScale, Tooltip, LinearScale, LineElement,PointElement, Title, Filler, Legend, ArcElement, BarElement
)
const data = {
    labels:[
       "BAKKIE",
       "TRUCK",
       "TRAILER" 
    ],
datasets:[{
data : [78, 95, 89],
label: "Vehicle Types",
borderRadius: 0,
barThickness: 50,
backgroundColor: "powderblue",

}
]
}
 
const options ={
elements: {
  bar:{
    barPercentage: 0.3,
    categoryPercentage: 1
  }
},
cutout: 80,
}

const Section3= () => {
    return <div>
<TableContainer
  component={Paper}
>
  <Table aria-label="demo table" sx={{width:'100%',border:'none'}}>
    <TableHead sx={{backgroundColor: 'rgb(10, 0, 24)'}}>
      <TableRow >
        <TableCell className='tableCell'>Country</TableCell>
        <TableCell className='tableCell'>City</TableCell>
        <TableCell className='tableCell'>Km</TableCell>
        <TableCell className='tableCell'>%</TableCell>
        <TableCell className='tableCell'>Tax</TableCell>
      </TableRow>
    </TableHead>
    <TableBody sx={{backgroundColor: 'rgb(19, 12, 46)', color:'white'}}>
      <TableRow>
        <TableCell className='tableCell'>Uganda</TableCell>
        <TableCell className='tableCell'>Kampala</TableCell>
        <TableCell className='tableCell'>1000</TableCell>
        <TableCell className='tableCell'>30</TableCell>
        <TableCell className='tableCell'>-4</TableCell>
      </TableRow>
      <TableRow>
      <TableCell className='tableCell'>Uganda</TableCell>
        <TableCell className='tableCell'>Kampala</TableCell>
        <TableCell className='tableCell'>1000</TableCell>
        <TableCell className='tableCell'>30</TableCell>
        <TableCell className='tableCell'>-4</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

<div className='chart coll' style={{marginTop: '5%'}}>
    <Bar data={data}  />
</div>
<TableContainer
  component={Paper}
sx={{marginTop: '5%'}}>
  <Table aria-label="demo table" sx={{width:'100%',border:'none'}}>
    <TableHead sx={{backgroundColor: 'rgb(10, 0, 24)'}}>
      <TableRow >
      <TableCell className='tableCell'>Driver</TableCell>
        <TableCell className='tableCell'>Country</TableCell>
        <TableCell className='tableCell'>City</TableCell>
        <TableCell className='tableCell'>Earnings</TableCell>
        <TableCell className='tableCell'>Deductions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody sx={{backgroundColor: 'rgb(19, 12, 46)', color:'white'}}>
      <TableRow>
        <TableCell className='tableCell'>Uganda</TableCell>
        <TableCell className='tableCell'>Kampala</TableCell>
        <TableCell className='tableCell'>1000</TableCell>
        <TableCell className='tableCell'>30</TableCell>
        <TableCell className='tableCell'>-4</TableCell>
      </TableRow>
      <TableRow>
      <TableCell className='tableCell'>Uganda</TableCell>
        <TableCell className='tableCell'>Kampala</TableCell>
        <TableCell className='tableCell'>1000</TableCell>
        <TableCell className='tableCell'>30</TableCell>
        <TableCell className='tableCell'>-4</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
</div>
}

export default Section3