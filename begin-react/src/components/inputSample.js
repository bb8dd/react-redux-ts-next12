import React, { useState } from 'react';

export default function InputSample() {
  const [text, setText] = useState('');

  const onReset = () => {
    setText('');
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button type="button" onClick={onReset}>
        초기화
      </button>
      <div>
        <b>
          값 :
          {' '}
          {text}
          {' '}
        </b>
      </div>
    </div>
  );
}
