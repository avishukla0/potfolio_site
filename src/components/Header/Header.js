import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <div1>
      <Link href= "/">
        <a style={{display:"flex" , alignItems:"center",color:'white' , marginBottom: "20;"}}>
          <DiCssdeck size = "3rem"/> <span>Avi's Portfolio</span></a> 
           </Link>
    </div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/avishukla0/supreme-lamp">
        <AiFillGithub size = "3rem"></AiFillGithub>
      </SocialIcons>
      
      <SocialIcons href="https://www.instagram.com/avi.shukla_">
        <AiFillInstagram size = "3rem"> </AiFillInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
