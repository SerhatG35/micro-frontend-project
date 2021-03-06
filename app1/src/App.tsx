import CharacterCard from './components/CharacterCard'
import { GlobalStyles } from './styles/global'

function App() {
    const character = {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
            name: 'Earth (C-137)',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    }

    return (
        <>
            <GlobalStyles />
            <CharacterCard character={character} />
        </>
    )
}

export default App
