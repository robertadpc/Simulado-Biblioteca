import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./component/Login";
import PerfilBibli from './component/PefilBibli';
import PerfilAluno from './component/PerfilAluno';
import AlunoConsultaEmp from './component/AlunoConsultaEmp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path="/bibliotecaria" component={PerfilBibli} />
          <Route exact path="/aluno" component={PerfilAluno} />
          <Route exact path="/alunoconsultaemp" component={AlunoConsultaEmp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;