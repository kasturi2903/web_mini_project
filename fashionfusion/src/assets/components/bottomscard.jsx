import Card from "./card";
import "./metrocard.css"

const BottomsCards=()=>{
    const cardData = [
        {
          id: 1,
          image:"https://img101.urbanic.com/v1/goods-pic/8d856060f6e34b6aa653afe84e27c096UR_w750_q90.webp",
          title: 'Pocket Straight Leg Jeans',
          price: '1,790'
        },
        {
            id: 2,
            image:"https://img101.urbanic.com/v1/goods-pic/41f6e2d04b1c49eab1cadeb6586a25dbUR_w1440_q90.webp",
            title: 'Wide Leg Jeans',
            price: '1,990'
          },
          {
            id: 3,
            image:"https://img101.urbanic.com/v1/goods-pic/f6ab045bb58240a6bd67d4bc79b4abb4UR_w750_q90.webp",
            title: 'Patchwork Wide Leg Jeans',
            price: '2,000'
          },
          {
            id: 4,
            image:"https://img101.urbanic.com/v1/goods-pic/0f8d36f2fdb4435eba5fa1a4e81a888dUR_w1440_q90.webp",
            title: 'Flared Leg Jeans',
            price: '1,790'
          },
          {
            id: 5,
            image:"https://img101.urbanic.com/v1/goods-pic/64240d2e6c374788b42c08ad31425d39UR_w1440_q90.webp",
            title: 'Wide Leg Jeans',
            price: '1,500'
          },
          {
            id: 6,
            image:"https://img101.urbanic.com/v1/goods-pic/bfcd1fe842604e47a11637d4166ae692UR_w750_q90.webp",
            title: 'Straight Leg Jeans',
            price: '1,250'
          },
          {
              id: 7,
              image:"https://img101.urbanic.com/v1/goods-pic/89b9dd55f28f429caeddb9db80da0f39UR_w1440_q90.webp",
              title: 'Slit Flare Leg Jeans',
              price: '1,990'
            },
            {
              id: 8,
              image:"https://img101.urbanic.com/v1/goods-pic/359e674d58ba4891b7716471fc6a2a46UR_w750_q90.webp",
              title: 'Straight Leg Jeans',
              price: '2,000'
            },
            {
              id: 9,
              image:"https://img101.urbanic.com/v1/goods-pic/6d6d4f307dcf4f2ea6aa58ca21c3fce3UR_w1440_q90.webp",
              title: 'Straight Leg Jeans',
              price: '1,790'
            },
            {
              id: 10,
              image:"https://img101.urbanic.com/v1/goods-pic/a1d6e197bec34bada48842e66e9766c2UR_w1440_q90.webp",
              title: 'Ripped Straight Leg Jeans',
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

export default BottomsCards;