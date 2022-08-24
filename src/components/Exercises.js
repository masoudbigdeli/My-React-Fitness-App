import React, {useEffect, useState} from 'react';
import { Pagination } from '@mui/material/Pagination';
import { Box, Button, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({ exercises, setExercises, setBodyPart }) => {
    console.log(exercises)
    return (
        <Box id='exercises'
        sx={{ mt:{lg: '110px'}}}
        mt='50px'
        p='20px'
        >
            <Typography variant='h3' mb='45px'>
                <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}}
                flexWrap='wrap' justifyContent='center'>
                    {exercises.map((exercise, index) => (
                        <p>{exercise.name}</p>
                    ))}
                </Stack>
            </Typography>
        </Box>
    )
}

export default Exercises;
