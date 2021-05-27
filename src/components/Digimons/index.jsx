import { Card, List } from '../Card';
import { useSelector } from 'react-redux';

const Digimons = () => {

    const { digimon } = useSelector((state) => state);

    return (
        <List>
            {
                digimon.errormsg !== true
                ?
                    digimon.map((digimon, index) => (
                        <Card key={index}>
                            {digimon.name}
                            <img src={digimon.img} alt={digimon.name}/>
                            <span>{digimon.level}</span>
                        </Card>
                    ))
                :
                    digimon.map((digimon, index) => (
                        <h4 key={index}>{digimon.errormsg}</h4>
                    ))
                
            }
        </List>
    )
}

export default Digimons;