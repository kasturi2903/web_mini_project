import { asyncHandler } from "../utils/asyncHandler.js";

import { User } from "../models/user.model.js";


const registerUser= asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;
    console.log(req.body)
    console.log(name,email,password);  

   const user = await User.create(req.body)

    res.status(200).json({
        message:"true"
    })
}) 

// const loginUser= asyncHandler(async(req,res)=>{

//   const {email,password}= req.body;
//   console.log(req.body)

//   const user=await User.findOne({email: email});

//   if(!user){
//     res.status(401).send('User not exist')
//   }
//   if(user.password===password){
//     res.json("success")
// }else{
//     res.json("The password is incorrect")
// }

  
//   res.status(200).json({
//     message:"ok"
// })
// })
const loginUser = asyncHandler(async (req, res) => {
  try {
      const { email, password } = req.body;
      console.log(req.body);

      const user = await User.findOne({ email: email });

      if (!user) {
          return res.status(401).send('User not exist');
      }

      if (user.password === password) {
          return res.json("success");
      } else {
          return res.json("The password is incorrect");
      }
  } catch (err) {
      // Handle any errors that occur during the async operation
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
  }
});
export { 
   registerUser,
   loginUser
}