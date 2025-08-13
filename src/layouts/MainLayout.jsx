import { styled } from '@mui/material/styles';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import Aside from '../components/common/Aside';
import Main from '../components/common/Main';
import Footer from '../components/common/Footer';

const LayoutDiv = styled('div')`
  display: grid;
  min-height: 100vh;
  grid-template-rows:
    var(--header-height)
    var(--nav-height)
    1fr
    var(--footer-height);
  grid-template-columns: 1fr;
`;

const MiddleDiv = styled('div')`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: var(--aside-width) 1fr var(--aside-width);
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <Header></Header>
      <Nav></Nav>
      <MiddleDiv>
        <Aside
          adImgUrl={
            'https://i.pinimg.com/736x/8c/89/9b/8c899bd2eb1e95d73ab9133884c0f822.jpg'
          }
        />
        <Main></Main>
        <Aside
          adImgUrl={
            'https://i.pinimg.com/736x/90/53/78/905378c7ad2038592f86de5bd32e505e.jpg'
          }
        />
      </MiddleDiv>
      <Footer></Footer>
    </LayoutDiv>
  );
};

export default MainLayout;
