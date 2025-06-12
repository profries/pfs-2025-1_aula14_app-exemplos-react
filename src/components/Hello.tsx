function Hello({nome}) {
    return (
        (nome)
            ? (<h3> Ola {nome}! </h3>)
            : (<h3> Ola Visitante!</h3>)
    )
}
  
export default Hello