// all the routes over here 
const BASE_URL = import.meta.env.VITE_BASE_URL || "https://ecommerce-backend-test.onrender.com" ||"http://localhost:3001";
const  urlConfig = {
    LOGIN_URL: BASE_URL + "/api/auth/login",
    SIGNUP_URL: BASE_URL + "/api/auth/signup",
    ALL_PRODUCT_URL: BASE_URL +"/api/product",
    LOGOUT_URL:BASE_URL+"/api/auth/logout"
}
export default urlConfig;



