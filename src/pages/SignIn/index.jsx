import { Container,  Background, Form } from "./style"

import{ Input } from "../../components/Input"
import{ Button } from "../../components/Button"
import{ ButtonText } from "../../components/ButtonText"



import { Link } from "react-router-dom"

import {FiUserPlus, FiMail, FiLock} from 'react-icons/fi'
import { useAuth } from "../../hooks/auth"
import { useState } from "react"


export function SignIn(){

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
  const { signIn } = useAuth()
  
  function handleSign(){
    signIn({email, password})
  }

  return(
    <Container>
      <Form>
        <h1>CineFlix</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div>
          <Input 
            icon={FiMail} 
            placeholder={'Email'}
            onChange={e => setEmail(e.target.value)}
            />

          <Input 
            icon={FiLock} 
            placeholder={'Password'} 
            type={'password'}
            onChange={e => setPassword(e.target.value)}
            />

          <Button title={'Entrar'} onClick={handleSign} type={'button'}/>
          <Link to="/register">
            <ButtonText title={'Criar conta'} icon={FiUserPlus} /> 
          </Link>
        </div>
      </Form> 
      <Background/>
    </Container>
  )
}