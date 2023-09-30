import { Typography, Button, AppBar, IconButton, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

export default function Saved() {
    return (
        <>
            <AppBar className='navbar'>
                <Toolbar style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ marginRight: 2 }}>
                        <Link to='/'>
                            <ArrowBack sx={{ color: 'white', fontSize: '1.5rem' }} />
                        </Link>
                    </IconButton>
                    <Typography variant="h5" className='title'>
                        Saved
                    </Typography>
                    <Button color="inherit">
                        <Link to='/about' className='link'>
                            About
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}