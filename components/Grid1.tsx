import { Chart, CategoryScale, Tooltip, LinearScale, LineElement,PointElement, Title, Filler, Legend, ArcElement} from 'chart.js';
import { Doughnut, } from 'react-chartjs-2';
import { Button, Grid } from '@mui/material';
import BellIcon from '@mui/icons-material/NotificationAddOutlined'

Chart.register(
    CategoryScale, Tooltip, LinearScale, LineElement,PointElement, Title, Filler, Legend, ArcElement
)
const data = {
    backgroundColor:[
        'yellow',
        'green'
    ],
datasets:[{
data : [500, 900],
backgroundColor:[
    'green',
    'red'
],
hoverOffset: 4
}
]
}
 
const options ={
elements: {
    arc:{
        weight: 0.1,
        borderWidth: 1
    }
},
cutout: 80,
}

const data2 = {
    backgroundColor:[
        'yellow',
        'green'
    ],
datasets:[{
data : [100, 100],
backgroundColor:[
    'green',
    'red'
],
hoverOffset: 4
}
]
}
 
const options2 ={
elements: {
    arc:{
        weight: 0.1,
        borderWidth: 5
    }
},
cutout: 50,
}

const Grid1= () => {
    return <div>
        <div className='collections'>
    <h4 className='coll'>COLLECTIONS</h4>
    </div>
    <div className='chart coll'>
    <Doughnut data={data} width='20px' height='20px' options={options} />
    </div>
    <div className='chart' style={{paddingBottom:'1px'}}>
        <p>Profitability <br/> <br/>Total Earnings Profits
        <br/> <span style={{fontWeight: 'bolder', fontSize: 'large'}}>R.809K</span> <br/>Margin +80%</p>
       
    </div>
    <div className='chart'>
        <p style={{marginBottom: '0'}}>Maker Checkers</p>
        <Grid container>
        <Grid xs={6} className="coll">
        <Doughnut data={data2} width='20px' height='20px' options={options2} /> 
        </Grid>
        <Grid xs={6} className="coll">
       <BellIcon style={{fontSize: '80px', color: 'yellow'}}/>
        </Grid>
        </Grid>
        <Button variant='contained' color='warning' sx={{width: '80%', padding: '0', marginBottom:'5%'}}>View</Button>
    </div>
    <div className='collections'>
        <p>Payment History</p>
    <Button variant='contained' color='warning' sx={{width: '80%', padding: '0', marginBottom:'5%'}}>View all</Button>
    </div>
    </div>
}

export default Grid1