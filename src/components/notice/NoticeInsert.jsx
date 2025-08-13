import React, { useState } from 'react';
import useFormData from '../../hooks/useFormData';
import useFetchPost from '../../hooks/useFetchPost';

const NoticeInsert = () => {
  const initState = { title: '', content: '' };
  const { formData, handleChange } = useFormData(initState);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const url = `http://127.0.0.1:8080/api/notice`;
    const resp = await useFetchPost(url, formData);
    const statusCode = resp.status;
    if (statusCode == 200) {
      alert('공지사항 등록 성공 !');
    }
  }

  return (
    <>
      <div>
        <h1>공지사항 작성</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='title'
            placeholder='title~~~'
            onChange={handleChange}
            value={formData.title}
          />
          <br />
          <input
            type='text'
            name='content'
            placeholder='content~~~'
            onChange={handleChange}
            value={formData.content}
          />
          <br />
          <input type='submit' value={'공지사항 등록'} />
        </form>
      </div>
    </>
  );
};

export default NoticeInsert;
