import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import Grid1 from '../components/Grid1';
import type { NextPageWithLayout } from './_app'
import { Grid } from '@mui/material';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

const Page: NextPageWithLayout = () => {
  return <div style={{color:'white', padding: '20px', height: '560px', maxWidth: '100%'}}>
<Grid container spacing={2} sx={{maxWidth:'100%'}}>
  <Grid xs={3} sx={{backgroundColor: 'rgb(19, 12, 46)', height: 'auto', textAlign: 'center', padding: '20px'}}>
    <Grid1 />
  </Grid>
  <Grid xs={4} sx={{backgroundColor: 'rgb(19, 12, 46)', height: '570px', ml: '20px', padding: '20px'}}>
 <Section2 />
  </Grid>
  <Grid xs={4.5} sx={{height: 'auto', ml: '20px',paddingTop: '20px'}}>
  <Section3 />
  </Grid>
 
</Grid>
  </div>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Page