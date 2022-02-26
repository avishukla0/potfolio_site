import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, my name is Avi <br />
          And welcome to my personal portfolio
        </SectionTitle>
        <SectionText>
        I am currently aiming to be an expert web developer(Full stack).
        </SectionText>
        <Button onClick={() => window.location = 'mailto:anupmashukla1535@email.com'}>Get in touch</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;