import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';
import HomeIcon from '@mui/icons-material/Home';
import FinanceIcon from '@mui/icons-material/CurrencyExchange';
import AccountIcon from '@mui/icons-material/AccountBoxOutlined';
import ProfileIcon from '@mui/icons-material/AccountCircleRounded';
import TruckIcon from '@mui/icons-material/Train';
import TicketIcon from '@mui/icons-material/AirplaneTicket';
import TickIcon from '@mui/icons-material/CheckBoxRounded';
import Toolbar from '@mui/material/Toolbar';
import { AppBar, IconButton, Typography } from '@mui/material';
const drawerWidth = 240;

interface Props {
  window?: () => Window;
}
  

export default function ResponsiveDrawer(props: any) {
  const { window } = props;
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: 'rgb(10, 0, 24)', color: 'white', width: '100%', height: '100%'}}>
      <List>
        {['Dashboard', 'Administration', 'Management', 'Fleet Management', 'Ticketing', 'Tasking', 'Finance', 'Profiles', 'My Account'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{color: 'white'}}>
                {index === 0 ? <DashboardIcon/>:<></>}
                {index === 1 ? <SecurityIcon/>:<></>}
                {index === 2 ? <HomeIcon/>:<></>}
                {index === 3 ? <TruckIcon/>:<></>}
                {index === 4 ? <TicketIcon/>:<></>}
                {index === 5 ? <TickIcon/>:<></>}
                {index === 6 ? <FinanceIcon/>:<></>}
                {index === 7 ? <AccountIcon/>:<></>}
                {index === 8 ? <ProfileIcon/>:<></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          mb: '50px',
         boxShadow: 'none',
          height: '50px',
          fontSize: '14px',
          backgroundColor: 'rgb(15, 5, 37)'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
             <MenuIcon />
          </IconButton>
          <Typography variant="subtitle2" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ pt:3 ,width:'100%'}}
      >
         {children}
      </Box>
    
    </Box>
    
  );
}
