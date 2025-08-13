import { styled } from '@mui/material/styles';
const StyledDiv = styled('div')`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    ${(props) => {
      return props.isSelected ? 'border-bottom: 3px solid gray;' : '';
    }}
    text-decoration: none;
    color: inherit;
    font-size: 2em;
    font-weight: bold;
  }
`;

const NaxItem = ({ children, isSelected }) => {
  return <StyledDiv isSelected={isSelected}>{children}</StyledDiv>;
};
//children (Link태그 전체)
//isSelected (isSelected의 true, false 값)
//둘은 상관없지만 둘 다 전달하기 위해서 이따구임

export default NaxItem;
