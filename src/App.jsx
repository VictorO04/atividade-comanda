import styles from './App.module.css';
import Comanda from './components/Comanda';

function App() {
  const itensPedidos = [
    { id: 1, nome: "Hambúrguer Clássico", precoUnitario: 25.50, quantidade: 2 },
    { id: 2, nome: "Batata Frita (Média)", precoUnitario: 12.00, quantidade: 1 },
    { id: 3, nome: "Refrigerante em Lata", precoUnitario: 6.00, quantidade: 2 },
    { id: 4, nome: "Pudim de Leite", precoUnitario: 8.50, quantidade: 1 }
  ];

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.tituloPrincipal}>Lanchonete React</h1>
      <Comanda pedidos={itensPedidos} />
      </div>
    </>
  )
}

export default App
