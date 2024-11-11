import Card from './Card'


function CardList({data}){
    return(
        <div className="cardcontainer">
       {data.map((cards, index) =>(
        <Card  key={index} 
        image={cards.image} title={cards.title}
        description= {cards.description}/>

       ))}
       </div>
           
         );
    
    
};
export default CardList;