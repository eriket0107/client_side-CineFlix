import { Container } from "./style";

import { FiUser } from "react-icons/fi"

export function UserPlaceHolder({isHeader}){
  return(
    <Container isHeader={isHeader}>
     <FiUser />
    </Container>
  )
}