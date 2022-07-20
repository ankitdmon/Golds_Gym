import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, setBodyPart, BodyPart }) => {
  return (
    <Stack
        type= "button"
        alignItems= "center"
        justifycontent= "center"
        className= "bodyPart-card"
        sx={
            BodyPart === item ? { borderTop: '4px solid #FF2625', 
                background: '#fff', 
                borderBottomLeftRadius: '20px', 
                width: '270px', 
                height: '282px', 
                cursor: 'pointer', 
                gap: '47px' } : { background: '#fff', 
                    borderBottomLeftRadius: '20px', 
                    width: '270px', 
                    height: '282px', 
                    cursor: 'pointer', 
                    gap: '47px' 
            }}
        onClick= {() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavoir: 'smooth'});
        }}
    >
        <img src={Icon} alt= "dumbbell" 
            style={{width: '40px', height: '40px'}}
        />

        <Typography fontSize= "24px"
            fontWeight= "bold"
            fontFamily="Alegreya"
            color= "#3A1212"
            textTransform= "capitalize"
        >
            {item}
        </Typography>

    </Stack>
  );
}

export default BodyPart