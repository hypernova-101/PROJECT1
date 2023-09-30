import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { Button, Typography, Toolbar, AppBar, Paper, TextField, Fab, Stack, CircularProgress } from '@mui/material';
import './Home.css';
import { getVideos } from '../api';
import Video from '../components/Video';
import { Link } from 'react-router-dom';

function Home() {

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [url, setUrl] = useState("");

    const onSearchButtonClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const videos = await getVideos(query);

        setVideos(videos);
        setQuery('');
        setIsLoading(false);
    }

    return (
        <>
            <AppBar className='navbar'>
                <Toolbar>
                    <Typography variant="h5" className='title'>
                        MusicYT
                    </Typography>
                    <Button color="inherit">
                        <Link to='/saved' className='link'>Saved</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/about' className='link'>About</Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Stack marginTop={10} marginBottom={18} alignItems="center" justifyContent="center">
                {isLoading ? <CircularProgress thickness={5} /> : videos.map((video, index) => <Video key={index} video={video} urlSetter={setUrl} />)}
            </Stack>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={6}>
                <audio src={url} className='audioPlayer' controls />
                <div className='inputGroup'>
                    <TextField variant='filled' label='enter your query' value={query} onChange={(e) => setQuery(e.target.value)} fullWidth />
                    <Fab color='primary' onClick={onSearchButtonClick}>
                        <Search />
                    </Fab>
                </div>
            </Paper>
        </>
    );
}

export default Home;
