import axios from "axios";
const API_BASE_URL = " https://love-lyrics-backend.vercel.app/api/v1";


//Get Otp For Login
async function getOtp(e_mail) {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/otp`, { e_mail });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//Login  User
async function LoginUser(Data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { Data});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Exports
module.exports = {
    getOtp,
    LoginUser
};