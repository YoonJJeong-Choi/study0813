import { useSelector } from 'react-redux';

const Home = () => {
  const { loginMember } = useSelector((state) => {
    return state.member;
  });
  return (
    <>
      <h1>HOME</h1>
      <h2>WELCOME {loginMember.userNick} ~~~ </h2>
    </>
  );
};

export default Home;
