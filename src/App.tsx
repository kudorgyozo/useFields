import { useState } from 'react';
import './App.css';
import { SuperInput } from './SuperInput';

function App() {
    const [value, setValue] = useState('');

    return (
        <div className="App">
            App
            <SuperInput value={value} onChange={setValue} id='id' label='label' />
        </div>
    );
}

export default App;
