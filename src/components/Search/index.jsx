import { Input, Button } from './styles';
import { useState } from 'react';

const Search = () => {
    const [ input, setInput ] = useState('');
    const [ error, setError ] = useState(false);

    return(
        <div>
            <h3>Search for your digimon</h3>
            <div>
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Search for the digimon'
                ></Input>
                <Button>Search</Button>
            </div>
        </div>
    )
}

export default Search;