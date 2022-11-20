import { HStack, Image } from '@chakra-ui/react';
import React from 'react';
import './Options.css';

const Options = ({ image }) => {
  return (
    <div className="testOptions">
      <Image height={'120px'} src={image} />
    </div>
  );
};

export default Options;
