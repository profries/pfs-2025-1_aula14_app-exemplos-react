import Card from "./Card";


export default function ListaCards() {
    const lista = [
        { id: 1, nome: "Produto 1", preco: 30.35},
        { id: 2, nome: "Produto 2", preco: 50.32},
        { id: 3, nome: "Produto 3", preco: 70.31}
    ]
    return (
        lista.map( produto => 
            <Card key={produto.id} titulo={produto.nome}>
                <h3>R$ {produto.preco}</h3>
            </Card>
        )
    )
}