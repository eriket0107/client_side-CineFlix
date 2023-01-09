import { Container,  Background, Form } from "./style"
import { Link, useNavigate } from "react-router-dom"

import{ Input } from "../../components/Input"
import{ Button } from "../../components/Button"
import{ ButtonText } from "../../components/ButtonText"

import {FiArrowLeft, FiUser, FiMail, FiLock} from 'react-icons/fi'
import { api } from "../../services/api"
import { useState } from "react"

export function SignUp(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSignUp(){
    if(!name || !email || !password ) return alert('Preencha todos os campos!')

    try {
      await api.post('/users', {name, email, password})
      alert('Usuário cadastrado com sucesso!')
      navigate(-1)

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível efetuar o cadastro!')
      }
    }
  }

  return(
    <Container>
      <Form>
        <h1>CineFlix</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input icon={FiUser} placeholder={'Username'} onChange={e => setName(e.target.value)}/>
          <Input icon={FiMail} placeholder={'Email'} onChange={e => setEmail(e.target.value)}/>
          <Input icon={FiLock} placeholder={'Password'} type={'password'} onChange={e => setPassword(e.target.value)}/>
          <Button title={'Cadastrar'} type={'button'} onClick={handleSignUp}/>
          <Link to="/">
            <ButtonText title={'Voltar para o login'} icon={FiArrowLeft}/> 
          </Link>
        </div>
      </Form> 
      <Background/>
    </Container>
  )
}