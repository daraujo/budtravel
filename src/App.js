import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import { FaPaperPlane, FaMapO, FaBan, FaFrownO, FaExclamationTriangle, FaHeartO, FaWhatsapp } from 'react-icons/lib/fa';

import { ReactTypeformEmbed } from 'react-typeform-embed';

import './App.css';

const FirstViewportComponent = styled.section`
  text-align: center;
  height: 100vh;

  .ReactTypeformEmbed {
    display: none;
  }
`

const SecondViewportComponent = styled.section`
  text-align: center;
  height: 100vh;
`

const LogoComponent = styled.div`
  color: #7154FF;
  font-size: 5vh;
  font-family: 'Cabin', sans-serif;
  padding-top: 6vh;
  text-align: center;

  @media screen and (max-width: 320px) {
    height: 8vh;
  }
  @media screen and (min-width: 321px) {
    height: 20vh;
  }
  @media screen and (min-width: 1001px) {
    height: 20vh;
  }
`

const JumbotronComponent = styled(Jumbotron)`
  background: none;
  height: 70vh;

  h1 {
    @media screen and (max-width: 320px) {
      margin: 3vh auto;
    }
    @media screen and (min-width: 321px) {
      margin: 4vh auto;
    }
    @media screen and (min-width: 1001px) {
      margin: 5vh auto;
    }
  }

  p.lead {
    @media screen and (max-width: 480px) {
      margin: 0 auto 5vh;
    }
    @media screen and (min-width: 481px) {
      margin: 0 auto 9vh;
    }
    @media screen and (min-width: 1001px) {
      margin: 0 auto 10vh;
    }
  }
`

const Messagetypes = styled.div`
  h2 {
    padding: 7vh 0 0;
  }
`

const ListGroupComponent = styled(ListGroup)`
  box-shadow: none;

  @media screen and (min-width: 1001px) {
    padding-top: 10vh!important;
  }

  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 2vh;
  }
`

const ListGroupItemComponent = styled(ListGroupItem)`
  text-align: left;
  border: none;
  padding: 20px;
  border-radius: 2px;
  transition: background 0.3s ease;

  :hover {
    background: #7154FF;

    h5, p {
      color: #fff!important;
    }
  }
`

const ListGroupItemHeadingComponent = styled(ListGroupItemHeading)`
  font-size: 24px;
  margin-bottom: 2vh;
`

const ListGroupItemTextComponent = styled(ListGroupItemText)`
  font-size: 16px;
`

const LastCallComponent = styled.section`
  padding: 5vh 0;

  h2 {
    margin-top: 10px;
  }
`

class ExamplePopup extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <Container>
        <FirstViewportComponent>
          <Row>
          <Col>
            <LogoComponent>Carson</LogoComponent>
          </Col>
          </Row>
          <Row>
            <Col>
              <JumbotronComponent>
                <h1 className="display-3">Tenha um assistente pessoal 24/7 durante sua próxima viagem.</h1>
                <p className="lead">Peça qualquer ajuda* durante sua viagem e seja respondido imediatamente por assistentes reais, via Whatsapp <FaWhatsapp/>, 24 horas por dia.</p>
                <p className="lead">
                  <span className="ExamplePopup">
                    <ReactTypeformEmbed
                      popup={true}
                      autoOpen={false}
                      url={'https://experiments.typeform.com/to/MJSjtC'}
                      hideHeaders={true}
                      hideFooter={true}
                      buttonText="Go!"
                      style={{top: 100}}
                      ref={(tf => this.typeformEmbed = tf) }/>
                    <Button className="btn" onClick={this.openForm} style={{cursor: 'pointer'}}>Contrate agora!</Button>
                  </span>
                </p>
                <p className="lead">
                  <a className="text-primary" href="">Saiba mais</a>
                </p>
              </JumbotronComponent>
            </Col>
          </Row>
          </FirstViewportComponent>
          <SecondViewportComponent>
            <Messagetypes>
              <Row>
                <Col className="col-xs-12">
                  <h2 className="display-3">Que tipo de ajuda posso pedir?</h2>
                </Col>
                <Col className="col-xs-12 col-md-4">
                  <ListGroupComponent>
                    <ListGroupItemComponent>
                      <FaPaperPlane/>
                      <ListGroupItemHeadingComponent>Como faço para sair do aeroporto?</ListGroupItemHeadingComponent>
                      <ListGroupItemTextComponent>A gente te ajuda a como pegar transporte no aeroporto, quais as formas mais baratas, em conta e seguras de sair e chegar da cidade e inclusive com o melhor trânsito</ListGroupItemTextComponent>
                    </ListGroupItemComponent>
                    <ListGroupItemComponent>
                      <FaFrownO/>
                      <ListGroupItemHeadingComponent>Onde encontro uma farmácia aberta por aqui?</ListGroupItemHeadingComponent>
                      <ListGroupItemTextComponent>Se precisar de um remédio e não souber como pedir, a gente indica a farmácia mais próxima ou ajuda a pedir determinado medicamento.</ListGroupItemTextComponent>
                    </ListGroupItemComponent>
                  </ListGroupComponent>
                </Col>
                <Col className="col-xs-12 col-md-4">
                  <ListGroupComponent>
                    <ListGroupItemComponent>
                      <FaMapO/>
                      <ListGroupItemHeadingComponent>Como eu chego em determinado ponto turístico?</ListGroupItemHeadingComponent>
                      <ListGroupItemTextComponent>Não sabe chegar em determinado lugar? Nossos assistentes vão te ajudar com o melhor caminho e melhores horários pra ir aos lugares.</ListGroupItemTextComponent>
                    </ListGroupItemComponent>
                    <ListGroupItemComponent>
                      <FaExclamationTriangle/>
                      <ListGroupItemHeadingComponent>Perdi meus documentos. O que devo fazer agora?</ListGroupItemHeadingComponent>
                      <ListGroupItemTextComponent>Se você perder seu passaporte ou outra identificação, a gente ajuda você a recuperar para que sua viagem seja tranquila e sua volta, segura.</ListGroupItemTextComponent>
                    </ListGroupItemComponent>
                  </ListGroupComponent>
                </Col>
                <Col className="col-xs-12 col-md-4">
                  <ListGroupComponent>
                    <ListGroupItemComponent>
                      <FaBan/>
                      <ListGroupItemHeadingComponent>O restaurante está fechado, para onde podemos ir?</ListGroupItemHeadingComponent>
                      <ListGroupItemTextComponent>Programa furou? Relaxa! A gente conhece a cidade com a palma da mão e, entendendo seu perfil, vamos indicar um lugar certeiro pra você curtir sua viagem.</ListGroupItemTextComponent>
                    </ListGroupItemComponent>
                    <ListGroupItemComponent>
                    <FaHeartO/>
                      <ListGroupItemHeadingComponent>A gente te ajuda em quase tudo!</ListGroupItemHeadingComponent>
                      <ListGroupItemTextComponent>Nossos assistentes são preparados pra resolver qualquer situação. <b>* Só não agimos no que for considerado ilegal ou em questões de saúde.</b></ListGroupItemTextComponent>
                    </ListGroupItemComponent>
                  </ListGroupComponent>
                </Col>
              </Row>
            </Messagetypes>
          </SecondViewportComponent>
          <LastCallComponent>
            <Row>
              <Col className="col-xs-12 col-md-9">
                <h2>Preparado para ter um assistente de viagem?</h2>
              </Col>
              <Col className="col-xs-12 col-md-3">
                <Button className="btn" onClick={this.openForm} style={{cursor: 'pointer'}}>Contrate agora!</Button>
              </Col>
            </Row>
          </LastCallComponent>
        </Container>
    );
  }
}

export default ExamplePopup;
