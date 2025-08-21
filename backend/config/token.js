import jwt from "jsonwebtoken";
import dotenv from "dotenv";

async function getToken(userId){
    try{
        const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h',
        });
        return token;
    }catch(error){
        console.log(error)
    }
}
export default getToken;