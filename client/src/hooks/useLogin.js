import { useState } from "react"; 
import { toast } from "sonner"; 
import { useAuthContext } from "../context/AuthContext"; 
import axios from "axios"; 
import { setCookie } from "../utils/cookies";
import { loginCheck } from "../utils/loginCheck";

const useLogin = () => { 
    const [loading, setLoading] = useState(false); 
    const { setAuthUser } = useAuthContext(); 

    const login = async (username, password) => { 
        const success = handleInputErrors(username, password); 
        if (!success) return; 

        setLoading(true); 
        try { 
            const res = await axios.post("http://localhost:8000/api/auth/login", { 
                username, 
                password 
            }); 
            
            const data = res.data;
            console.log(data);

            if (data.error) { 
                throw new Error(data.error); 
            }
            setCookie("username", data.username, 365);
            setCookie("jwt", data.token, 365);
            setAuthUser(loginCheck()); 
        } catch (error) { 
            const errorMessage = error.response?.data?.error || error.message; 
            toast.error(errorMessage); 
        } finally { 
            setLoading(false); 
        } 
    }; 

    return { loading, login }; 
}; 

export default useLogin; 

function handleInputErrors(username, password) { 
    if (!username || !password) { 
        toast.error("Please fill in all fields"); 
        return false; 
    } 

    return true; 
}
