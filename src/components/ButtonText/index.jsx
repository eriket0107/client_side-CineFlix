import { Container } from "./style";

export function ButtonText({title, icon: Icon , isActive, ...rest}){
  return(
    <Container
     type="button"
     isActive={isActive}
     {...rest}
    >
      {Icon && <Icon size={20}/> }
      {title}
    </Container>
  )
}