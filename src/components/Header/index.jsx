import { Container, Logo, Search, Profile } from "./style";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


import { UserPlaceHolder } from "../UserPlaceHolder";


import { Input } from "../Input";
import { api } from "../../services/api";
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";


export function Header(){

  const { user, signOut } = useAuth()
  const { searchMovie } = useSearch()

  const navigate = useNavigate()


  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar} ` : null
  const [avatar, setAvatar] = useState(avatarURL)


  function handleSearch(movie){
    searchMovie(movie)
  }
  function handleSignOut(){
    signOut()
    navigate('/')
  }

  return(
    <Container>
      <Logo>
        <Link to={'/'}>
          <h1>CineFlix</h1>
        </Link>
      </Logo>

      <Search>
        <Input 
          placeholder={'Pesquisar pelo título'}
          onChange={e => handleSearch(e.target.value) }
        />
      </Search>
          
      <Profile>
        <div>
          <Link to='/profile'>
            <span className="userName">{user.name}</span>
          </Link>
          <span>
            <ButtonText title={'sair'} onClick={()=>handleSignOut()}/>
          </span>
        </div>
        <div className="avatarProfile">
          {avatar ? <img src={avatar} alt={`Foto de ${user.name}`} /> : <UserPlaceHolder isHeader/>}
        </div>
      
      </Profile>
    </Container>
  )
}

