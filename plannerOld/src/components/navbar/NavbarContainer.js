import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  border-bottom: 1px solid #0c0a89;
  margin-bottom: 0px;
`

const StyledToolbar = styled(Toolbar)`
  height: 75px;
  
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 1;
  font-family: "basic-sans", sans-serif;

  @media screen and (max-width: 991px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0px 3%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  &.yellow-bg {
    background-color: #ffd343;
  }

  &.white-bg {
    background-color: #fff;
  }

  & > div {
    z-index: 3;
    position: -webkit-sticky;
    position: sticky;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: none;
    min-height: auto;
    margin-right: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0%;
    padding-left: 0%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    
    opacity: 1;
    font-family: "basic-sans", sans-serif;

    @media screen and (max-width: 991px) {
      width: 100%;
      max-height: 65px;
      max-width: 100%;
      min-height: 65px;
      padding-right: 0%;
      padding-left: 0%;
    }

    @media screen and (max-width: 767px) {
      min-height: auto;
    }
  }
`

export default function NavbarContainer({ isSignedIn, ...props }) {  
  return (
    <StyledAppBar
      position="sticky"
      elevation={0}
    >
      <StyledToolbar className='white-bg'>
        <div>{props.children}</div>
      </StyledToolbar>
    </StyledAppBar>
  )
}
