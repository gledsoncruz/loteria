import React, { Component } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Alert
} from "react-bootstrap";
import api from "../../services/api";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //dezenas: ["04", "05", "30", "33", "41", "52"],
      dezenas: ["20", "05", "29", "59", "40", "34"],
      resultado: []
    };
  }

  //componentDidMount() {
  //  this.loadDezenas();
  //}

  onAddItem = event => {
    const num = event.target.value;
    const posicao = event.target.id;
    this.setState(state => {
      var numExistente = this.state.dezenas.some(function(numero) {
        return numero === num;
      });
      if (!numExistente && num !== "" && num <= 60) {
        state.dezenas[posicao] = num;
        const dezenas = state.dezenas;
        console.log(this.state.dezenas);

        return {
          dezenas
        };
      }
    });
  };

  loadDezenas = async () => {
    let intersection = [];
    let concursos = [];
    //const total = await api.get();
    console.log(this.state.dezenas);

    for (var i = 1077; i < /*total.data.numero*/ 1087; i++) {
      console.log(i);
      const response = await api.get(i.toString());
      intersection = response.data.dezenas.filter(x =>
        this.state.dezenas.includes(x)
      );
      if (intersection.length > 3) {
        concursos.push(response.data);
        this.setState({ resultado: concursos });
      }
    }
  };

  render() {
    return (
      <Container>
        <Card body>
          <Form>
            <Row className="justify-content-md-center">
              <Col xs={1}>
                <Form.Control onBlur={this.onAddItem} id="0" type="number" />
              </Col>
              <Col xs={1}>
                <Form.Control onBlur={this.onAddItem} id="1" type="number" />
              </Col>
              <Col xs={1}>
                <Form.Control onBlur={this.onAddItem} id="2" type="number" />
              </Col>
              <Col xs={1}>
                <Form.Control onBlur={this.onAddItem} id="3" type="number" />
              </Col>
              <Col xs={1}>
                <Form.Control onBlur={this.onAddItem} id="4" type="number" />
              </Col>
              <Col xs={1}>
                <Form.Control onBlur={this.onAddItem} id="5" type="number" />
              </Col>
            </Row>
            <Container>
              <Row className="justify-content-md-center">
                <Button variant="primary" onClick={this.loadDezenas}>
                  Conferir meu jogo !
                </Button>
              </Row>
            </Container>
          </Form>
        </Card>
        {this.state.resultado.map(r => {
          let inter = r.dezenas.filter(x => this.state.dezenas.includes(x));
          if (inter.length === 6) {
            return (
              <Container key={r.numero}>
                <Alert variant="success">
                  <Alert.Heading>
                    Seu jogo foi sorteado no dia {r.data}
                  </Alert.Heading>
                  Concurso número: <b>{r.numero}</b>
                  <br />
                  Data: <b>{r.data}</b>
                  <br />
                  Total de ganhadores: <b>{r.premiacao.sena.ganhadores}</b>
                  <br />
                  Valor pago: <br />
                  <h3>R$ {r.premiacao.sena.valorPago}</h3>
                  <br />
                  Valor acumulado para o próximo sorteio: <br />
                  <h3>R$ {r.valorAcumulado}</h3>
                  <hr />
                  <p className="mb-0">
                    Você acertou <b>6</b> números
                  </p>
                </Alert>
              </Container>
            );
          }
          if (inter.length === 5) {
            return (
              <Container key={r.numero}>
                <Alert variant="primary">
                  <Alert.Heading>
                    Seu jogo foi sorteado no dia {r.data}
                  </Alert.Heading>
                  Concurso número: <b>{r.numero}</b>
                  <br />
                  Data: <b>{r.data}</b>
                  <br />
                  Total de ganhadores: <b>{r.premiacao.quina.ganhadores}</b>
                  <br />
                  Valor pago: <br />
                  <h3>R$ {r.premiacao.quina.valorPago}</h3>
                  <br />
                  Valor acumulado para o próximo sorteio: <br />
                  <h3>R$ {r.valorAcumulado}</h3>
                  <hr />
                  <p className="mb-0">
                    Você acertou <b>5</b> números
                  </p>
                </Alert>
              </Container>
            );
          }
          if (inter.length === 4) {
            return (
              <Container key={r.numero}>
                <Alert variant="warning">
                  <Alert.Heading>
                    Seu jogo foi sorteado no dia {r.data}
                  </Alert.Heading>
                  Concurso número: <b>{r.numero}</b>
                  <br />
                  Data: <b>{r.data}</b>
                  <br />
                  Total de ganhadores: <b>{r.premiacao.quadra.ganhadores}</b>
                  <br />
                  Valor pago: <br />
                  <h3>R$ {r.premiacao.quadra.valorPago}</h3>
                  <br />
                  Valor acumulado para o próximo sorteio: <br />
                  <h3>R$ {r.valorAcumulado}</h3>
                  <hr />
                  <p className="mb-0">
                    Você acertou <b>4</b> números
                  </p>
                </Alert>
              </Container>
            );
          }
          if (this.state.resultado.length === 0) {
            return (
              <Container key={r.numero}>
                <Alert variant="danger">
                  <Alert.Heading>
                    Infelizmente seu jogo não foi sorteado em nenhum concurso :(
                  </Alert.Heading>
                </Alert>
              </Container>
            );
          }
          return <h1>Nada</h1>;
        })}
      </Container>
    );
  }
}
