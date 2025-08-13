import React from 'react';
import useFormData from '../../hooks/useFormData';

const MemberJoin = () => {
  const { formData, handleChange, setFormData } = useFormData({});

  function handleSubmit() {
    const url = `http://127.0.0.1:8080/api/member/join`;
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    fetch(url, option).then((resp) => {
      if (resp.status === 200) {
        alert('회원가입 성공!');
        setFormData({
          userId: '',
          userPwd: '',
          userNick: '',
        });
      }
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
      <div>닉네임</div>
      <div>
        <input
          type='text'
          name='userNick'
          onChange={handleChange}
          value={formData.userNick}
        />
      </div>
      <div></div>
      <div>
        <input type='submit' value={'회원가입'} onClick={handleSubmit} />
      </div>
    </>
  );
};

export default MemberJoin;
