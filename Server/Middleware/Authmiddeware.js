const jwt = require('jsonwebtoken')

//? This middleware cheak if user has a valid token 
const authmiddleware = (req,res,next)=>{
    try{
      //? Get the Authorization Header 
    //?   Format Should Be : Bearer Token
    const authHeader = req.headers.authorization;

    console.log('Authorization header:',authHeader)


    //? Cheak if Authorization header exists
    if(!authHeader){
        console.log('No Token Provided')    
        return res.status(401).json({massage:"Access denied. No token provided"})
    }

    // ? Split the header to get the token
    // ? authHeader is Like "Bearer 4dfkjh44keke243kheur7njkre3246nekf2"
    // ? We Will by space and get the second part 
    const part = authHeader.split(" ")
    console.log(part)
    const token = part[1]
    console.log("Extracted token:", token);



    //? Cheak if token exists (Bearer should have a second part)
    if(!token){
        console.log('Invalid token format')
        return res.status(401).json({massage:"Invaild token format. Use Bearer Token"})
    }

    // ? Verify the token usin JWT_SECRET
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    console.log('Token verified for user:',decode)


    // ? Attach decoded data to req.user
    // ? This makes the user info available to the next rounte handler  
    req.user = decode;


    // ? Continue to the next handler 
    next()

    }catch(error){
        console.log("Token verification failed:", error.message);

        // If token is invalid or expired
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }

    res.status(400).json({massage:"Server error during login"})
    }
}
module.exports = authmiddleware