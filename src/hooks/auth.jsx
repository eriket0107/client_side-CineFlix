import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})

  async function signIn({email, password}) {

   try { 
      const response = await api.post('/session', {email, password})
      const {user, token} = response.data 

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      localStorage.setItem('@CineFlix: user', JSON.stringify(user))
      localStorage.setItem('@CineFlix: token', token)
      

      setData({
        token,
        user
      })

  } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível efetuar login')
      }
    }
  }


  async function updateProfile({user, avatarFile}){

    try {
      if(avatarFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)
        const response = await api.patch("/users/avatar", fileUploadForm)

        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@CineFlix: user', JSON.stringify(user))
      
      setData({user, token: data.token})

      alert('Perfil atualizado com sucesso!')

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível fazer o atualizar o perfil.')
      }
    }  
  }


  function signOut(){

    localStorage.removeItem('@CineFlix: user')
    localStorage.removeItem('@CineFlix: token')

    setData({})
  }
  useEffect(()=>{
   const user = localStorage.getItem('@CineFlix: user')
   const token =  localStorage.getItem('@CineFlix: token')

    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[])

  return(
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}
export {AuthProvider, useAuth}