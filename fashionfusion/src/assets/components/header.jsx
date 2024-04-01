import "./header.css"

const Header=()=>{



    return(
        <div className="header">
           <div className="row">
           <div class="left">
               <h1>Metro Mode</h1>
                <ul>
               <li><a href="./metromode">Discover ALL</a></li>
               </ul>
           </div>

            <div className="right">
                <img src="https://img101.urbanic.com/v1/9d631fb0dc7e4628aa1f414c85b97d69.webp" alt=""   />
                <img src="https://img101.urbanic.com/v1/goods-pic/bf4b4430574c4b3795f6b40a2b99e9f6UR_w750_q90.webp" alt="uy" />
                <img src="" alt="" />
            </div>
           </div>
           <div className="row">
           <div className="left" style={{ backgroundColor: "#FBAB7E", backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)" }}>
    <h1>TOPS</h1>
    <ul>
        <li><a href="./tops">Discover ALL</a></li>
    </ul>
</div>


            <div className="right">
                <img src="https://img101.urbanic.com/v1/goods-pic/5181793600084b3f96a1e6162ae9d508UR_w750_q90.webp" alt=""   />
                <img src="https://img101.urbanic.com/v1/goods-pic/a3d5ad765af34c5d8c7e0a7459fe9ac4UR_w750_q90.webp" alt="uy" />
                <img src="" alt="" />
            </div>
           </div>
           <div className="row">
           <div class="left"  style={{ backgroundColor: "#4171d0", backgroundImage: "linear-gradient(43deg, #4171d0 0%, #8450c8 46%, #FFCC70 100%)" }}>
               <h1>DRESSES</h1>
                <ul>
               <li><a href="./dresses">Discover ALL</a></li>
               </ul>
           </div>

            <div className="right">
                <img src="https://img101.urbanic.com/v1/goods-pic/1d1069de3c6e431f8c68011ea333d11fUR_w750_q90.webp" alt=""   />
                <img src="https://img101.urbanic.com/v1/goods-pic/24359a714e0840d7a272701a368b686fUR_w1440_q90.webp" alt="" />
                <img src="" alt="" />
            </div>
           </div>
           <div className="row">
           <div class="left" style={{ backgroundColor: "#D9AFD9", backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)" }}>
               <h1>BOTTOMS</h1>
                <ul>
               <li><a href="./bottoms">Discover ALL</a></li>
               </ul>
           </div>

            <div className="right">
                <img src="https://img101.urbanic.com/v1/goods-pic/2fd8f611022d4ff8bac9769e296af06fUR_w750_q90.webp" alt=""   />
                <img src="https://img101.urbanic.com/v1/goods-pic/09cca21af33540d5b3496734fab9182bUR_w750_q90.webp" alt="uy" />
                <img src="" alt="" />
            </div>
           </div>
           

        </div>

    );
}

export default Header;