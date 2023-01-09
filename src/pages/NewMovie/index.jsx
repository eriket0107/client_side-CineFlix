import { Container, Content, Form } from "./style"

import {FiArrowLeft, FiUpload, FiFilm} from "react-icons/fi"

import { useState } from "react"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { TextArea } from "../../components/TextArea"
import { ButtonText } from "../../components/ButtonText"
import { MovieNewTag } from "../../components/MovieNewTag"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function NewMovie(){

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')


  const [title, setTitle] = useState('')
  const [stars, setStars] = useState('')
  const [description, setDescription] = useState('')

  const [cover, setCover] = useState('')
  const navigation = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }
  function handleRemoveTag(toDelete){
    setTags(prevState => prevState.filter(tag => tag !== toDelete))

  }
  
  function handleBackPage(){
    navigation(-1)
  }

  async function handleNewMovie(){
    if(stars < 0 || stars > 5 )
     return alert('Apenas números entre 0 e 5.')
  
    if(!title){
      return alert('Preencha o título para cadastrar')
    }

    if(newTag){
      return alert('Existem informações para serem salvas na tag.')
    }

    await api.post('/movies', {
      title, 
      stars, 
      description, 
      tags
    })

    navigation('/')
  }
  return(
    <Container>
      <Header />
      <main>
        <ButtonText title={'Voltar'} icon={FiArrowLeft} onClick={handleBackPage} />
        <h1>Novo Filme</h1>
      <Form>

        <div className={'sectionInput'}>
          <Input placeholder={'Título'} onChange={e => setTitle(e.target.value)}/>
          <Input placeholder={'Sua nota (de 0 a 5)'} onChange={e => setStars(e.target.value)}/>
        </div>   
        
        <Content>
        <TextArea placeholder={'Descrição'} onChange={e => setDescription(e.target.value)}/> 
        
        <Section title={'Marcadores'}>
          <div className="tagsWrapper">
            {
              tags.map((tag, index) => 
                (<div key={String(index)} id={index} className={'tags'}> 
                  <MovieNewTag 
                  value={tag}
                  onClick={()=> handleRemoveTag(tag)}

                  />
                </div>))
            }
            <MovieNewTag  
              isNew 
              value={newTag}
              onClick={handleAddTag}
              placeholder={'Novo marcador'} 
              onChange={e => setNewTag(e.target.value)}
              />   
          </div>

        </Section>

        </Content>
      </Form>

      </main>
      <footer>
        <Button title={'Exluir'}/>
        <Button title={'Salvar Alterações'} type={'button'} onClick={handleNewMovie}/>
      </footer>
    </Container>
  )
}