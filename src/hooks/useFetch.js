import { useEffect, useState } from 'react';

function useFetch(url, option = {}, initState = null) {
  const [data, setData] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetch(url, option)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading };
}

export default useFetch;
