import { Typography } from "@mui/material";
import { titleSlice } from '../utils/utils';
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useEffect, useState } from "react";
import { getAudio } from "../api";

export default function SavedVideo({ video }) {

    const [removedText, setRemovedText] = useState("Remove");
    const [url, setUrl] = useState("");

    const onRemoveButtonClick = () => {
        if(removedText !== "Removed") {
            localStorage.removeItem(video.id);
            setRemovedText("Removed");
        }
    }

    useEffect(() => {
        getAudio(video.id)
        .then((res) => {
            setUrl(res.url);
        })
    }, [video.id]);

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
                        {titleSlice(video.title)}
                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <audio src={url} controls loop></audio>
                </div>
                <CardActions sx={{ marginLeft: 2}}>
                    <Button size="medium" variant='outlined'>
                        <a href={`https://youtu.be/${video.id}`} style={{ textDecoration: 'none' }}>Watch</a>
                    </Button>
                    <Button size="medium" variant='outlined' onClick={onRemoveButtonClick}>{removedText}</Button>
                </CardActions>
            </Card>
        </>
    );
}
