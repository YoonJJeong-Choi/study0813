import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/memberSlice';

const LayoutDiv = styled('div')``;

const MemberMypage = () => {
  const { loginMember } = useSelector((state) => {
    return state.member;
  });

  const dispatch = useDispatch();

  if (!loginMember?.userId) {
    return (
      <>
        <h1>로그인 후 마이페이지 접속이 가능합니다.</h1>
        <div></div>
        <h1>
          <Link to='/member/join'>회원가입</Link>
        </h1>
        <div></div>
        <h1>
          <Link to='/member/login'>로그인</Link>
        </h1>
      </>
    );
  }
  return (
    <LayoutDiv>
      <h3>USER_NO</h3>
      <h3>{loginMember.no}</h3>
      <h3>USER_ID</h3>
      <h3>{loginMember.userId}</h3>
      <h3>USER_PWD</h3>
      <h3>{loginMember.userPwd}</h3>
      <h3>USER_NICK</h3>
      <h3>{loginMember.userNick}</h3>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </LayoutDiv>
  );
};

export default MemberMypage;
