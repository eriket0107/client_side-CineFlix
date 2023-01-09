import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Tag } from "../../components/Tag"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { MovieImg } from "../../components/MovieImg";

import {Container, Content, Title, MovieRating, TimeStap, Tags, Description, Actions } from './style'


import { Rating } from "@mui/material";
import { api } from "../../services/api";
import { ImStarFull, ImStarEmpty } from "react-icons/im"
import { useNavigate, useParams } from "react-router-dom";
import { FiClock, FiArrowLeft, FiTrash2, FiUpload, FiUser} from "react-icons/fi"


export function Details(){
  const { user } = useAuth()

  const navigate = useNavigate()
  const params = useParams()

  const[movie, setMovie] = useState({})
  const[stars, setStars] = useState(Number())
  const[timeStamp, setTimeStamp] = useState('')

  const[cover, setCover] = useState(null)
  const[coverFile, setCoverFile] = useState('')
  const movieURL =  movie.cover ? `${api.defaults.baseURL}/files/${movie.cover} ` : cover

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar} ` : null
  const [avatar, setAvatar] = useState(avatarURL)


  function handleBackNavigation(){
    navigate(-1)
  }

  async function handleDelete(){
    const toDelete = confirm('Deseja excluír o filme?')
    if(toDelete){
      await api.delete(`movies/${params.id}`)
      alert('Filme excluído com sucesso!')
    }
    navigate('/')
  }
  function handleCoverPreview(event){
    const filePath = event.target.files[0]
    setCoverFile(filePath)

    const imgPreview = URL.createObjectURL(filePath)
    setCover(imgPreview)
  }

  async function handleSaveCover(){
    if(!coverFile){
      return alert('Insira uma imagem para poder salvar a capa.')
    }
    const fileUploadForm = new FormData()
    fileUploadForm.append("cover", coverFile)
    await api.patch(`/movies/${params.id}/cover`, fileUploadForm)
    alert('Capa de filme alterada com sucesso!')
  }
  
  useEffect(()=>{
    async function fetchMovies(){
      const response = await api.get(`/movies/${params.id}`)
      setMovie(response.data)
      setStars(response.data.stars)      
      setTimeStamp(response.data.created_at)      
    }
    fetchMovies()
  },[])
  

  const [movieDateRaw, movieHourRaw] = timeStamp.split(' ')
  const movieDate = movieDateRaw.replaceAll("-", "/")
  const movieHour = String(movieHourRaw).slice(0, 5)
  

  return(
    <Container>
      <Header/>

      <main>
        <Content >
        <Actions>
          <ButtonText icon={FiArrowLeft} title={'Voltar'} onClick={handleBackNavigation}/>
          <ButtonText icon={FiTrash2} title={'Excluir'} onClick={handleDelete}/>
        </Actions>
        <Title >
            <div>
              <MovieRating>
                <h1>{movie.title}</h1>
                  <Rating 
                    value={stars}
                    size={"medium"}
                    icon={<ImStarFull/>}
                    emptyIcon={<ImStarEmpty style={{ opacity: 0.55 }} fontSize="inherit" />}
                    readOnly
                  />
                </MovieRating>

                <TimeStap>
                  {avatarURL ? <img src={avatar} alt="" /> : <FiUser/> }
                  Por {user.name}
                  <span><FiClock/></span>
                  <span>{movieDate}</span>
                  às
                  <span>{movieHour}</span>
                </TimeStap>

                <Tags>
                  {
                    movie.tags && movie.tags.map((tag) => (<Tag key={String(tag.id)} title={tag.name}/> ))
                  }
                </Tags>
                <Description>{movie.description}</Description> 
            </div>
            <MovieImg className={'imgMovieComponent'} movieImg={movieURL} onChange={handleCoverPreview}/>
            

          </Title> 
          <ButtonText title={'Salvar capa'} icon={FiUpload} onClick={handleSaveCover}/>

        </Content>
      </main> 
      </Container>
  )
}

