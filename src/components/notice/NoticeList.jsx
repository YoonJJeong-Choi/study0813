import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import MyModal from '../util/MyModal';
import useModal from '../../hooks/useModal';

const StyledDiv = styled('div')`
  width: 60%;
  height: 60%;
  border: 3px solid black;
  background-color: white;
  color: inherit;
  overflow-y: scroll;
  table {
    width: 100%;
  }
`;

const ModalLayout = styled('div')`
  display: grid;
  width: 80%;
  height: 80%;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: lightgreen;
  grid-template-rows: 100px 1fr;
  grid-template-columns: repeat(3, 1fr);
  place-items: center center;
  & > h1:nth-child(4) {
    grid-column: span 3;
    place-self: start start;
  }
`;

const NoticeList = () => {
  const url = 'http://127.0.0.1:8080/api/notice';
  const option = {};
  const initState = [];
  const { data: voList, isLoading } = useFetch(url, option, initState);
  const { isOpen, closeModal, openModal } = useModal();
  const [modalVo, setModalVo] = useState({});

  function getNoticeByNo(vo) {
    const url = `http://127.0.0.1:8080/api/notice/${vo.no}`;
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        //open modal
        openModal();
        //set data
        setModalVo(vo);
      });
  }

  return (
    <>
      <StyledDiv>
        <h1 align='center'>공지사항</h1>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <table border={1}>
            <thead>
              <tr>
                <th>NO</th>
                <th>TITLE</th>
                <th>HIT</th>
              </tr>
            </thead>
            <tbody>
              {voList.map((vo, idx) => {
                return (
                  <tr
                    onClick={() => {
                      getNoticeByNo(vo);
                    }}
                  >
                    <td>{vo.no}</td>
                    <td>{vo.title}</td>
                    <td>{vo.hit}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <Link to={'/notice/insert'}>공지사항 등록</Link>
      </StyledDiv>
      <MyModal isOpen={isOpen} closeModal={closeModal}>
        <ModalLayout>
          <h1>번호 : {modalVo.no}</h1>
          <h1>제목 : {modalVo.title}</h1>
          <h1>조회수 : {modalVo.hit}</h1>
          <h1>{modalVo.content}</h1>
        </ModalLayout>
      </MyModal>
    </>
  );
};

export default NoticeList;
