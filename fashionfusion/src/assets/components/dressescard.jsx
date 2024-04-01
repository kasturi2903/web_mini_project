import Card from "./card";
import "./metrocard.css"

const DressesCards=()=>{
    const cardData = [
        {
          id: 1,
          image:"https://img101.urbanic.com/v1/goods-pic/b93b3cf1484a43ec8f5eb022097079b4UR_w1440_q90.webp",
          title: 'Lace-Trimmed  Dress',
          price: '2,790'
        },
        {
            id: 2,
            image:"https://img101.urbanic.com/v1/goods-pic/192ef35da4724d99ba779f845e003f1cUR_w750_q90.webp",
            title: 'Drawstring A-Line Dress',
            price: '2,990'
          },
          {
            id: 3,
            image:"https://img101.urbanic.com/v1/goods-pic/f9258251833f42afa449d1f1a9d0964aUR_w750_q90.webp",
            title: 'Bodycon Dress',
            price: '2,000'
          },
          {
            id: 4,
            image:"https://img101.urbanic.com/v1/goods-pic/67d185c0906f491f99a749dd27532ec0UR_w1440_q90.webp",
            title: 'Long Gathered Dress',
            price: '1,790'
          },
          {
            id: 5,
            image:"https://img101.urbanic.com/v1/goods-pic/63d7193bef47498d86e3334979b87dc6UR_w750_q90.webp",
            title: 'Ruffle A-Line Dress',
            price: '2,900'
          },
          {
            id: 6,
            image:"https://img101.urbanic.com/v1/goods-pic/27db564d860c4effa803642839fb987cUR_w750_q90.webp",
            title: 'Gathered Tank Dress',
            price: '2,900'
          },
          {
              id: 7,
              image:"https://img101.urbanic.com/v1/goods-pic/69b3f95f642c427bb90f3aedb715c27cUR_w750_q90.webp",
              title: 'Patchwork Tube Dress',
              price: '1,990'
            },
            {
              id: 8,
              image:"https://img101.urbanic.com/v1/goods-pic/8c0c98b08e134350b96fcdb2c2863dc1UR_w1440_q90.webp",
              title: 'Embroidered A-Line Dress',
              price: '2,000'
            },
            {
              id: 9,
              image:"https://img101.urbanic.com/v1/goods-pic/f1a0f4060833435e9ddcadd2ec44458aUR_w750_q90.webp",
              title: 'Smocked Midi Dress ',
              price: '2,790'
            },
            {
              id: 10,
              image:"https://img101.urbanic.com/v1/goods-pic/c75370451b67486db0686ac3fc5621dbUR_w1440_q90.webp",
              title: 'Drawstring Shirt Dress',
              price: '2,500'
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

export default DressesCards;