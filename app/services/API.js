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

async function SignUp(Data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/Signup`, { Data });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//Login  User
async function LoginUser(Data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/Login`, { Data});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//Update User Information
async function UpdateInformation(Data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/updateInformation`, { Data});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Exports
module.exports = {
    getOtp,
    LoginUser,
    SignUp,
    UpdateInformation,
};