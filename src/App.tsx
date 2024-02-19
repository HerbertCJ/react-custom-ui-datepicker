import './App.css';
import { Datepicker } from '../';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState('');

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        gap: '20px',
      }}
    >
      <Datepicker date={date} onChangeDate={setDate} range />
    </div>
  );
}

export default App;
