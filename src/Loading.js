import { CircularProgress } from '@mui/material';
import { Progress } from 'flowbite-react';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Loading = () => {
    const value = 'Loading';

    return (
        <div className='justify-center flex'>
            <CircularProgress className='text-3xl text-center font-bold' color="secondary" />

        </div>
    );
};

export default Loading;