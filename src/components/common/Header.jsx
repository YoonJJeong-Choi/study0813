import React from 'react';
import { styled } from '@mui/material/styles';
import ThemeSwitch from '../util/ThemeSwitch';
import { toggleTheme } from '../../redux/themeSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LayoutDiv = styled('div')`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 150px 1fr 150px;
  place-items: center center;
  background-color: ${(props) => {
    return props.theme.palette.primary.light;
  }};
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <LayoutDiv>
      <div>
        <div className='jelly-box'></div>
        <div className='jelly-box-shadow'></div>
      </div>
      <div
        onClick={() => {
          navigate('/');
        }}
      >
        <h1 className='glow'>WELCOME</h1>
      </div>
      <ThemeSwitch
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
    </LayoutDiv>
  );
};

export default Header;
