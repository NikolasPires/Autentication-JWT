import Container from "../../components/Container"
import { useState } from 'react'

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    return (
        <Container>
            <form className="login-form">
              <span className="login-form-title">Criar Conta</span>
              <span className="login-form-title">
                <img src={birdImg} alt="" />
              </span>
              <div className="wrap-input">
                <input type="email" className={name !== "" ? 'input has-value' : 'input'} value={name} 
                onChange={e => setName(e.target.value)}/>
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>
             <div className="wrap-input">
                <input type="email" className={email !== "" ? 'input has-value' : 'input'} value={email} 
                onChange={e => setEmail(e.target.value)}/>
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
              <div className="wrap-input">
                <input type="password" className={password !== "" ? 'input has-value' : 'input'} value={password} 
                onChange={e => setPassword(e.target.value)}/>
                <span className="focus-input" data-placeholder="Password"></span>
              </div> 
              <div className="container-login-form-btn">
                <button className="login-form-btn">
                  Login
                </button>
              </div>
                <div className="text-center">
                  <span className="text1">Não possui conta?</span>
                  <Link to="/register" className="text2">Criar Conta</Link>
                </div>
            </form>
        </Container>
   
    )
}