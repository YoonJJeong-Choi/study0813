import { useState } from 'react';

function useFormData(initState) {
  //inp
  const [formData, setFormData] = useState(initState);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  return { formData, handleChange, setFormData };
}

export default useFormData;
