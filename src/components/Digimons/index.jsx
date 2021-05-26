import { Card, List } from './styles';
import { useSelector } from 'react-redux';

const Digimons = () => {

    const { digimon } = useSelector((state) => state);

    console.log(digimon)

    return (
        <List>
            {
                digimon.map((digimon, index) => (
                    <Card key={index}>
                        {digimon.name}
                        <img src={digimon.img} alt={digimon.name}/>
                        <span>{digimon.level}</span>
                    </Card>
                ))
            }
        </List>
    )
}

export default Digimons;