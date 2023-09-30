import { Typography, Button, AppBar, IconButton, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { Stack } from '@mui/material';
import SavedVideo from "../components/SavedVideo";

export default function Saved() {
    
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        const vals = Object.values(localStorage);
        const values = [];
        for(let i = 0; i < vals.length; i++) {
            values.push(JSON.parse(vals[i]));
        }
        setVideos(values);
    }, []);

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

            <Stack marginTop={10} marginBottom={1} alignItems="center" justifyContent="center">
                { videos.map((vid, ind, arr) => <SavedVideo key={ind} video={vid}/>) }
            </Stack>
        </>
    );
}
