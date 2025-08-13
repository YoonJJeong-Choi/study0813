import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const StyledDiv = styled('div')`
  width: 80%;
  height: 80%;
  background-color: aqua;
  border: 3px solid black;
  border-radius: 20px;
  padding: 20px 50px;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 200px 1fr;
  & > *:nth-child(odd) {
    place-self: center center;
    font-size: 24px;
    font-weight: bold;
  }
  & > *:nth-child(even) {
    place-self: center start;
  }
  & input {
    width: 300px;
    height: 30px;
    font-size: 18px;
    border-radius: 10px;
  }
`;

const MemberLayout = () => {
  return (
    <StyledDiv>
      <Outlet />
    </StyledDiv>
  );
};

export default MemberLayout;
