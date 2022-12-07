import { useState } from "react"
import SignIn from "../sign in"
import "./login.css"
const Login = () => {
  const [signIn, setSignIn]= useState(false)
  return (
    <div className="login_screen">
        <div className="login_screen_background">
            <img 
            className="login_screen_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="login_image" />
            <button className="login_screen_button" onClick={()=> setSignIn(true)}>Sign in</button>
        </div>
        <div className="background_gradient"></div>
        <div className="login_screen_body">
          {
            signIn ? (
              <SignIn/>
            ) :
            <>
            <h1>Unlimited films , TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="email_input_container">
              <form>
                <input type="text" className="email_input" placeholder="Email Address"/>
                <button
                onClick={() => setSignIn(true)}
                 className="log_screen_button">Get Started</button>
              </form>
            </div>
            </>
          }
            
        </div>
    </div>
  )
}
export default Login