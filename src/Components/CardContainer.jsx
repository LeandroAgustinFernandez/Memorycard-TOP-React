import Card from "./Card"
import './CardContainer.css'

const CardContainer = ({characters,chosenCard}) => {

  return (
    <section className="card-container">
        {characters.map(character=>(
            <Card key={character.id} name={character.name} image={character.image} chosen={chosenCard}/>
        ))}
    </section>
  )
}

export default CardContainer