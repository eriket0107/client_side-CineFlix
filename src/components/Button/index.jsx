import { Container } from "./style";

export function Button({isLoading=false, title,icon: Icon, ...rest}){

  return(
    <Container
      disabled={isLoading}
      isLoading
      {...rest}>
      {Icon && <Icon size={20} />}
      {isLoading ? "Carregando" :title}
    </Container>
  )
}