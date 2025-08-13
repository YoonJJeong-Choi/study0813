import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import NaxItem from './NaxItem';
import {
  selectBoard,
  selectGallery,
  selectMember,
  selectNotice,
} from '../../redux/navSlice';
import { useDispatch, useSelector } from 'react-redux';

const LayoutNav = styled('nav')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => {
    return props.theme.palette.primary.main;
  }};
  color: ${(props) => {
    return props.theme.palette.primary.contrastText;
  }};
`;

const Nav = () => {
  const dispatch = useDispatch();

  const { itemName } = useSelector((state) => {
    return state.nav;
  });

  return (
    <LayoutNav>
      <NaxItem isSelected={itemName === 'board'}>
        <Link
          to={'/board/list'}
          onClick={() => {
            dispatch(selectBoard());
          }}
        >
          BOARD
        </Link>
      </NaxItem>
      <NaxItem isSelected={itemName === 'notice'}>
        <Link
          to={'/notice/list'}
          onClick={() => {
            dispatch(selectNotice());
          }}
        >
          NOTICE
        </Link>
      </NaxItem>
      <NaxItem isSelected={itemName === 'gallery'}>
        <Link
          to={'/gallery/list'}
          onClick={() => {
            dispatch(selectGallery());
          }}
        >
          GALLERY
        </Link>
      </NaxItem>
      <NaxItem isSelected={itemName === 'member'}>
        <Link
          to={'/member/mypage'}
          onClick={() => {
            dispatch(selectMember());
          }}
        >
          MEMBER
        </Link>
      </NaxItem>
    </LayoutNav>
  );
};

export default Nav;
