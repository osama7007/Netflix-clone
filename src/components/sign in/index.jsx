import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./sginIn.css";

const SignIn = () => {
const emailRef = useRef(null);
const passRef = useRef(null);
const navigate = useNavigate()
const register = (e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
        emailRef.current.value ,
        passRef.current.value
    ).then((authUser)=>{
            console.log(authUser.user.email)
    }).catch(err => alert(err.message));
}

const signIn = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value ,
        passRef.current.value
    ).then((authUser)=>{
        navigate('/')

    }).catch(err => alert(err.message));

}

  return (
    <div className="signIn_screen" >
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passRef} type="password" placeholder="Password" />
            <button type="submit" onClick={signIn}>Sign In</button>
            <h4>
                <span className="signIb_screen_grey">New to Netflix?</span>
                <span className="signIn_screen_link" onClick={register}> Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignIn