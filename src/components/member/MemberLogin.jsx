import React from 'react';
import useFormData from '../../hooks/useFormData';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/memberSlice';

const MemberLogin = () => {
  const { formData, handleChange, setFormData } = useFormData({});
  const dispatch = useDispatch();

  function handleSubmit() {
    const url = `http://127.0.0.1:8080/api/member/login`;
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    fetch(url, option)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
      })
      .then((data) => {
        alert('로그인 성공!');
        dispatch(login(data));
      });
  }
  return (
    <>
      <div>아이디</div>
      <div>
        <input
          type='text'
          name='userId'
          onChange={handleChange}
          value={formData.userId}
        />
      </div>
      <div>패스워드</div>
      <div>
        <input
          type='password'
          name='userPwd'
          onChange={handleChange}
          value={formData.userPwd}
        />
      </div>
      <div></div>
      <div>
        <input type='submit' value={'로그인'} onClick={handleSubmit} />
      </div>
    </>
  );
};

export default MemberLogin;
