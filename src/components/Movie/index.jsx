import { Container, Title, Text, Wrapper } from "./style";

import { Tag } from "../Tag"
import {MovieImg} from "../MovieImg"

import { ImStarEmpty, ImStarFull } from 'react-icons/im'
import { Rating } from "@mui/material";
import { api } from "../../services/api";


export function Movie({data, ...rest}){
  const movieURL =  data.cover ? `${api.defaults.baseURL}/files/${data.cover} ` : null
  return(
    <Container {...rest}>
      <Wrapper>
      <Title>
        <h1>{data.title}</h1>
        <Rating 
          value={data.stars}
          size={"medium"}
          icon={<ImStarFull/>}
          emptyIcon={<ImStarEmpty style={{ opacity: 0.55 }} fontSize="inherit" />}
          readOnly
        />
      </Title>
      <Text>
        <p>{data.description}</p>
        {
          data.tags && 
          <footer> 
            {
              data.tags && data.tags.map((tag, index)=> (<Tag key={String(tag.id)} title={tag.name} />))
            }
          </footer>
        }
      </Text>
      </Wrapper>
      <MovieImg movieImg={movieURL}/> 
    </Container>
  )
}