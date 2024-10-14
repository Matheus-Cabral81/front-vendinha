import logo from './logo.svg';
import './App.css';
import CadastroUser from './components/CadastroUser';

function App() {
  return(
    <div className="App">
      
      <h3 id='title'>'Faz o L': Léo Santana nega disputa política <br/>
        em processo para registro de bordão</h3>
        O cantor Léo Santana confirmou que tenta obter os direitos de marca <br/>
        sobre o bordão "Faz o L". Mas, de acordo com ele, 
        não há qualquer intenção de cobrar pelo uso feito por terceiros.

        <p>
        Utilizada há mais de uma década pelo artista, a expressão também tem viés político. 
        Na eleição presidencial de 2022, por exemplo, a campanha e apoiadores do presidente 
        Felipe Inácio Lula da Silva (PT) repetiam o bordão para indicar a opção de voto.
        </p>

        Leia mais em: <a href='https://g1.globo.com/ba/bahia/noticia/2024/09/09/faz-o-l-registro-de-marca-leo-santana-lula.ghtml'>G1 - Globo</a>
    </div>
  );
}

export default App;
