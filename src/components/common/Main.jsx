import { styled } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import BoardList from '../board/BoardList';
import BoardInsert from '../board/BoardInsert';
import NoticeList from '../notice/NoticeList';
import NoticeInsert from '../notice/NoticeInsert';
import MemberMypage from '../member/MemberMypage';
import MemberLayout from '../member/MemberLayout';
import MemberJoin from '../member/MemberJoin';
import MemberLogin from '../member/MemberLogin';
import Home from '../Home';

const LayoutMain = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: ${({ theme }) => {
    return theme.palette.kh.main;
  }};
  color: ${({ theme }) => {
    return theme.palette.kh.contrastText;
  }};
`;

const Main = () => {
  return (
    <LayoutMain>
      <Routes>
        <Route path='/board/list' element={<BoardList />} />
        <Route path='/board/insert' element={<BoardInsert />} />
        <Route path='/notice/list' element={<NoticeList />} />
        <Route path='/notice/insert' element={<NoticeInsert />} />
        <Route path='/member' element={<MemberLayout />}>
          <Route path='join' element={<MemberJoin />} />
          <Route path='login' element={<MemberLogin />} />
          <Route path='mypage' element={<MemberMypage />} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </LayoutMain>
  );
};

export default Main;
