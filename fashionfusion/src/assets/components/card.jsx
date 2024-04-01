import './card.css'

const Card=({image,title,price})=>{
    const userID = 'user123'; // Example userID
    const handleAddToCart = () => {

        // Send data to the backend here
        // You can use fetch or axios to make an HTTP request to your backend endpoint
        // For demonstration purposes, let's log the data to the console
        console.log("Adding to cart:", { image, title, price });
        console.log("userid",userID)
    }


    return (
        <>
        <div className="card">
           <div className="row1">
            <img src={image} alt="" />
           </div>
           <div className="row2">

            <h5>{title}</h5>
            <p>Price:  ${price}</p>
            <button className="buy-button" onClick={handleAddToCart}>Add to Cart</button>
            
            
           </div>
        </div>

        </>
    )
}
export default Card;