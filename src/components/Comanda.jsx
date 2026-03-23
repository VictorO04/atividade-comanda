import styles from "./Comanda.module.css";

function Comanda({ pedidos }) {
    const valorTotal = pedidos.reduce((acc, item) => {
        return acc + (item.precoUnitario * item.quantidade);
    }, 0);

    const taxaServico = valorTotal * 0.1;
    const totalComTaxa = valorTotal + taxaServico;

    return (
        <div className={styles.recibo}>
            <div className={styles.cabecalho}>
                <h2>🧾 Resumo do Pedido</h2>
                <p>Mesa 04 - Atendente: João</p>
            </div>

            <ul className={styles.lista}>
                {pedidos.map((item) => {
                    const subtotal = item.precoUnitario * item.quantidade;

                    return (
                        <li key={item.id} className={styles.itemLista}>
                            <div className={styles.nomeQuantidade}>
                                <span>{item.quantidade}x</span>
                                <span>{item.nome}</span>
                            </div>
                            <span>R$ {subtotal.toFixed(2)}</span>
                        </li>
                    );
                })}

                <hr className={styles.linhaDivisoria} />

                <div className={styles.taxaServico}>
                    <span>Taxa de Serviço (10%):</span>
                    <span>R$ {taxaServico.toFixed(2)}</span>
                </div>

                <div className={styles.totalDiv}>
                    <span>Total a Pagar:</span>
                    <span className={styles.valorTotal}>
                        R$ {totalComTaxa.toFixed(2)}
                    </span>
                </div>
            </ul>
        </div>
    );
}

export default Comanda;