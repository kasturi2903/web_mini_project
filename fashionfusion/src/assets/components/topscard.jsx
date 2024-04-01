import Card from "./card";
import "./metrocard.css"

const TopCards=()=>{
    const cardData = [
        {
          id: 1,
          image:"https://img101.urbanic.com/v1/goods-pic/28f5f8eceb3648cca2df451f6b65c481UR_w750_q90.webp",
          title: 'Placket Blouse',
          price: '1,790'
        },
        {
            id: 2,
            image:"https://img101.urbanic.com/v1/goods-pic/40e663849c4340b18ebe12d6dfb3f6aeUR_w750_q90.webp",
            title: 'Color Block Placket Blouse',
            price: '1,990'
          },
          {
            id: 3,
            image:"https://img101.urbanic.com/v1/goods-pic/b68c1f927d6c406c936d2e01c68d3f98UR_w750_q90.webp",
            title: 'Printed Placket Blouse',
            price: '2,000'
          },
          {
            id: 4,
            image:"https://img101.urbanic.com/v1/goods-pic/ed8ca5a834f14ec4958046d0f0b89d4aUR_w750_q90.webp",
            title: 'Gathered Fitted Top',
            price: '1,790'
          },
          {
            id: 5,
            image:"https://img101.urbanic.com/v1/goods-pic/d24c0a06804b415cba0577b5ffbd5fa7UR_w750_q90.webp",
            title: 'Printed Placket Blouse',
            price: '1,500'
          },
          {
            id: 6,
            image:"https://img101.urbanic.com/v1/goods-pic/d5094a66e0aa4304909be2bb0962aa7eUR_w750_q90.webp",
            title: 'Beaded Semi Formal Shirt',
            price: '1,250'
          },
          {
              id: 7,
              image:"https://img101.urbanic.com/v1/goods-pic/0d7b527fd8ee4b29816cd5a54d069c80UR_w750_q90.webp",
              title: 'Single-Breasted Blazer',
              price: '1,990'
            },
            {
              id: 8,
              image:"https://img101.urbanic.com/v1/goods-pic/de4d8091492f429f8196ac90f371848fUR_w750_q90.webp",
              title: 'Cropped Blazer',
              price: '2,000'
            },
            {
              id: 9,
              image:"https://img101.urbanic.com/v1/goods-pic/cf2ef911140a440b89554adde9da26ecUR_w750_q90.webp",
              title: 'Cable Knit Fitted Top',
              price: '1,790'
            },
            {
              id: 10,
              image:"https://img101.urbanic.com/v1/goods-pic/17e9d2ac767a46898cc8e19a18a9c3c6UR_w750_q90.webp",
              title: 'Gathered Placket Shirt',
              price: '1,500'
            },
           
      ];
    

    return(
        <>
        <div className="container">
        {cardData.map(card => (
            
        <Card key={card.id} title={card.title} image={card.image} price={card.price} />
      ))}
      </div>
        </>
    )
}

export default TopCards;