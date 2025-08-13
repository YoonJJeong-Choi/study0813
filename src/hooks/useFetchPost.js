async function useFetchPost(url, jsonObj) {
  // const url = 'http://127.0.0.1:8080/api/board';
  const option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonObj),
  };
  const resp = await fetch(url, option);
  return resp;
}

export default useFetchPost;
