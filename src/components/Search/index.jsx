import { Input, Button } from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDigimonsThunk } from '../../store/modules/digimons/thunks';

const Search = () => {
    const [ input, setInput ] = useState('');
    const [ error, setError ] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = () => {
        setError(false);
        dispatch(addDigimonsThunk(input))
        setInput('');
    }

    return(
        <div>
            <h3>Search for your digimon</h3>
            <div>
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Search for the digimon'
                ></Input>
                <Button onClick={() => handleSearch()}>Search</Button>
            </div>
        </div>
    )
}

export default Search;