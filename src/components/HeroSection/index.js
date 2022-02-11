import React, {useState} from 'react';
import Video from '../../videos/vinyl.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Two-Piece Alternative Surf Rock Band</HeroH1>
            <HeroP>
                Streaming and merch available now
            </HeroP>
            <HeroBtnWrapper>
                <Button to="stream" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Select your streaming service {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    );
};

export default HeroSection;
