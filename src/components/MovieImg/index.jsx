import { Container, Cover } from "./style";
import { RiMovie2Line } from "react-icons/ri"


export function MovieImg({movieImg, haveImg , ...rest}){

   haveImg = movieImg ? <img src={movieImg} alt=""/> : <label><input type="file" accept="image/*" /><RiMovie2Line/></label>
  
  return(
    <Container {...rest}>
      <Cover>
       {haveImg}
      </Cover>
    </Container>
  )
}