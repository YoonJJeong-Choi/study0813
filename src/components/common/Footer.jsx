import { styled } from '@mui/material/styles';
const StyledDiv = styled('footer')`
  background-color: ${({ theme }) => {
    return theme.palette.primary.main;
  }};
  color: ${({ theme }) => {
    return theme.palette.primary.contrastText;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return (
    <>
      <StyledDiv>
        <h1>FOOTER</h1>
      </StyledDiv>
    </>
  );
};

export default Footer;
