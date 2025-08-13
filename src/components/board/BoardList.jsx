import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
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

const BoardList = () => {
  const url = 'http://127.0.0.1:8080/api/board';
  const option = {};
  const initState = [];
  const { data: voList, isLoading } = useFetch(url, option, initState);
  const [modalVo, setModalVo] = useState({});

  //Modal
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <StyledDiv>
        <h1 align='center'>게시글</h1>
        {isLoading ? (
          <h1>로딩중</h1>
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
                      setModalVo(vo);
                      openModal();
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
        <Link to={'/board/insert'}>게시판 등록</Link>
      </StyledDiv>
      {isOpen ? (
        <MyModal isOpen={isOpen} closeModal={closeModal}>
          <ModalLayout>
            <h1>번호 : {modalVo.no}</h1>
            <h1>제목 : {modalVo.title}</h1>
            <h1>조회수 : {modalVo.hit}</h1>
            <h1>내용 : {modalVo.content}</h1>
          </ModalLayout>
        </MyModal>
      ) : null}
    </>
  );
};

export default BoardList;
