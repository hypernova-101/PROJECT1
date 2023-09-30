import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SavedSnackbar from './SavedSnackbar';
import { getAudio } from '../api';

function titleSlice(title) {
  if(title.length > 45) {
    return `${title.slice(0, 45)}...`;
  } else {
    return title;
  }
}

export default function Video({video, urlSetter}) {

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");

  const onSavedButtonClick = () => {
    setIsOpen(true);
  }

  const onListenButtonClick = async () => {
    setData('getting data...');

    const res = await getAudio(video.id);
    if(res !== null) {
      const size = Math.floor(res.contentLength / (1024 * 1024));
      
      setData(`Size : ${size} MB`);
      urlSetter(res.url);
    } else {
      setData('Sorry, Unable to fetch its audio');
    }
  } 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setIsOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, minWidth: 345, marginTop: 4 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={video.thumbnailUrl}
          title="thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { titleSlice(video.title) }
          </Typography>
          <Typography variant='body1'>
            { data }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" variant='outlined' onClick={onListenButtonClick}>Listen</Button>
          <Button size="medium" variant='outlined'>
            <a href={`https://youtu.be/${video.id}`} style={{textDecoration: 'none'}}>Watch</a>
          </Button>
          <Button size="medium" variant='outlined' onClick={onSavedButtonClick}>Save</Button>
        </CardActions>
      </Card>
      <SavedSnackbar isOpen={isOpen} handleClose={handleClose}/>
    </>
  );
}