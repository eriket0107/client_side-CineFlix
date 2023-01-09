import { Container, Content, Wrapper } from "./style";

import { Movie } from '../../components/Movie'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

import { FiPlus } from "react-icons/fi";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/search";
import { Link, useNavigate } from "react-router-dom";

export function Home(){
  const { search } = useSearch()

  const navigate = useNavigate() 

  const[movies, setMovies] = useState([])
  const[tags, setTags] = useState([])

  function handleDetails(id){
    navigate(`/details/${id}`)
  }
  useEffect(()=>{
    async function fetchMovies(){
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  },[search])

  useEffect(()=>{
    async function fetchTags(){
      const response = await api.get(`/tags`)
      setTags(response.data)
    }
    fetchTags()
  },[])
  return(
    <Container>
      <Header />
      <Wrapper>
          <h1>Meus filmes</h1>
          <Link to={'/newMovie'}>
            <Button title={'Adicionar filme'} icon={FiPlus}/>
          </Link>
         </Wrapper>
      <main>
        <Content>
          <Section>
            {
              movies.map(movie => (
              <Movie 
                key={String(movie.id)} 
                data={movie} 
                onClick={() => handleDetails(movie.id)} 
              />))
            }
            
          </Section>
        </Content>
      </main>
    </Container>
  )
}