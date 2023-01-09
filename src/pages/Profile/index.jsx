import { Container, Form, Avatar } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from "react-icons/fi"; 

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { UserPlaceHolder } from "../../components/UserPlaceHolder";

export function Profile(){
  const { user, updateProfile } = useAuth()
  
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  
  const [newPassword, setNewPassword] = useState()
  const [oldPassword, setOldPassword] = useState()
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar} ` : null
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateProfile(){
    const updated = {
      email,
      name,
      password: newPassword,
      old_password: oldPassword,
    }
    
    const updatedUser = Object.assign(user,  updated)
    await updateProfile({user: updatedUser, avatarFile})
  }

  function handleAvatar (event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imgPreview = URL.createObjectURL(file)
    setAvatar(imgPreview)
  }

  return(
    <Container>
      <header>
        <Link to={-1}>
          <ButtonText title={'Voltar'} icon={FiArrowLeft} />
        </Link>
      </header>
      <Form>
        <Avatar>
        {avatar ? <img src={avatar} alt={`Foto de ${user.name}`} /> : <UserPlaceHolder isHeader={false}/>}
          <label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleAvatar}/>
              <FiCamera/>
          </label>
        </Avatar>
        <Input placeholder={"email"} icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder={"User"} icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
        <Input placeholder={"Senha nova"} type={'password'} icon={FiLock}  onChange={e => setNewPassword(e.target.value)} />
        <Input placeholder={"Senha antiga"} type={'password'} icon={FiLock} onChange={e => setOldPassword(e.target.value)}/>
        <Button title={'Salvar'} onClick={handleUpdateProfile} type={'button'}/>
      </Form>
    </Container>
  )
}