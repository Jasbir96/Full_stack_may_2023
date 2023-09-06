// useEffect(function () {
//     (async function () {
//         try {
//             setLoading(true);
//             const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
//             const user = await resp.json();
//             console.log("user", user);
//             setLoading(false);
//             setUser(user);
//         } catch (err) {
//             setError(true);
//             setLoading(false);
//         }
//     })()
// }, []);


// dispatch is provided to this middleware
import userslice from "../UserSlice";
const action =userslice.actions;
export const fetchUserMiddleWare =  (param) => {
    return async (dispatch) => {
        // input state
        try {
            dispatch(action.userLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const user = await resp.json();
            console.log("user", user);
            dispatch(action.userData(user));
        } catch (err) {
            dispatch(action.userError());
        }
    }
}
