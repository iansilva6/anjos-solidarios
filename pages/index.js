import Head from "next/head";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import logo from "../assets/img/1.jpg";
import pix from "../assets/img/pix.jpg";
import bb from "../assets/img/bb.png";
import zap from "../assets/img/zap.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anjos Solidários - Araci/Bahia</title>
        <meta name="description" content="Somos uma ONG sem fins lucrativos com o objetivo de ajudar pessoas doentes e acamadas na cidade de Araci Bahia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Container className="mb-5">
          <Row>
            <Col xs={12}>
              <h2>Colabore</h2>
              <p>
                Ajude dezenas de famílias doando qualquer quantia através dos links abaixo:
              </p>
            </Col>
            <Col xs={12} md={4} className='mb-4'>
              <div className={styles.donate}>
                <Image
                  src={pix}
                  alt="Chave Pix dos Anjos Solidários"
                  width={150}
                  height={150}
                />
                <div>
                  <h2>Chave Pix</h2>
                  <p>48.796.055/0001-86</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className='mb-4'>
              <div className={styles.donate}>
                <Image
                  src={bb}
                  alt="Banco do Brasil"
                  width={120}
                  height={120}
                />
                <div>
                  <h3>Banco do Brasil</h3>
                  <p>
                    Ag: 1456-7
                    <br />
                    CC: 36.893-8
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className={styles.article}>
              <Link
                href="https://wa.me/5575991920840"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className={styles.donate}>
                  <Image
                    src={zap}
                    alt="Anjos Solidários Whatsapp"
                    width={120}
                    height={120}
                  />
                  <div>
                    <h2>WhatsApp</h2>
                    <p>(75) 9 9192 0840</p>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <div className={styles.image__container}>
                <Image
                  src={logo}
                  alt="Anjos Solidários Araci Bahia"
                  layout="fill"
                  className={styles.image}
                />
              </div>
            </Col>
            <Col xs={12} md={7} className={styles.about}>
              <h2>Quem somos</h2>
              <p>
                Somos uma ONG formada por mulheres da cidade de Araci/Bahia que
                tem o objetivo de ajudar pessoas doentes e acamadas. Através de
                doações e colaborações conseguimos fornecer fraldas geriátricas,
                materiais de higiene, pomadas e remédios para diversas famílias
                carentes da nossa cidade.
              </p>
              <h2>Como ajudar?</h2>
              <p>
                Aceitamos doações em dinheiro através da nossa chave pix
                (48.796.055/0001-86) e doações de fraldas geriátricas em nossos
                pontos de coleta abaixo: <br />
                <br />
                • Av. Edvaldo Paraíso, 347 (sede provisória) - <Link href='https://goo.gl/maps/f3HnBeUNqQyi3ed5A' rel="noopener noreferrer" target="_blank">Ver no mapa</Link>
                <br />
                • Farma Center - <Link href='https://goo.gl/maps/Q1gm8t1KwsnZ6GWf8' rel="noopener noreferrer" target="_blank">Ver no mapa</Link>
                <br />
                • Farmácia Aras (Sta. Luz) - <Link href='https://goo.gl/maps/kCDwe3vvTJB65Scn6' rel="noopener noreferrer" target="_blank">Ver no mapa</Link> <br />
                • Farmácia Popular - <Link href='https://www.google.com/search?q=farmacia%20popular%20araci&oq=farmacia+po&aqs=chrome.0.69i59j69i57j0i13i131i433i512j0i13i512l7.1575j0j9&client=ubuntu&sourceid=chrome&ie=UTF-8&hs=D1t&tbs=lf:1,lf_ui:3&tbm=lcl&sxsrf=AJOqlzVJsil_4_6TWLU08nib6lDfqAlRXQ:1677790186518&rflfq=1&num=10&rldimm=5066972791820764303&lqi=ChZmYXJtYWNpYSBwb3B1bGFyIGFyYWNpSPa_gaebroCACFoiEAAQARgAGAEYAiIWZmFybWFjaWEgcG9wdWxhciBhcmFjaZIBCWRydWdzdG9yZaoBRAoJL20vMDFyZnBzEAEaHxABIhuArGIbSWEROy6Ia0dAinknWSM9iuSg5oY1qFUqFCIQZmFybWFjaWEgcG9wdWxhcigM&ved=2ahUKEwins8zAj779AhVXmZUCHUXcCE8QvS56BAgQEAE&sa=X&rlst=f#rlfi=hd:;si:5066972791820764303,l,ChZmYXJtYWNpYSBwb3B1bGFyIGFyYWNpSPa_gaebroCACFoiEAAQARgAGAEYAiIWZmFybWFjaWEgcG9wdWxhciBhcmFjaZIBCWRydWdzdG9yZaoBRAoJL20vMDFyZnBzEAEaHxABIhuArGIbSWEROy6Ia0dAinknWSM9iuSg5oY1qFUqFCIQZmFybWFjaWEgcG9wdWxhcigM;mv:[[-11.3250517,-38.958396],[-11.3381332,-38.9647992]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:3' rel="noopener noreferrer" target="_blank">Ver no mapa</Link> <br />
                • Farmácia Mercês - <Link href='https://goo.gl/maps/Nm9uxg9Qw7RCwN2D7' rel="noopener noreferrer" target="_blank">Ver no mapa</Link> <br />
                • Farmácia do Paulo - <Link href='https://goo.gl/maps/H8zzbZfuka7bji4w9' rel="noopener noreferrer" target="_blank">Ver no mapa</Link> <br />
                • Farmácia Santana (Sta. Luz) - <Link href='https://goo.gl/maps/tU9EXAzwQWtpgq158' rel="noopener noreferrer" target="_blank">Ver no mapa</Link> <br />
                • Supermercado Compre Fácil - <Link href='https://goo.gl/maps/THKPosndmxt1KWg28' rel="noopener noreferrer" target="_blank">Ver no mapa</Link> <br />
                • Supermercado Santiago (Maria de Zé Valdo) - <Link href='https://goo.gl/maps/WKz3hzmfJPJ1LAGy6' rel="noopener noreferrer" target="_blank">Ver no mapa</Link>
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col xs={12}>
              <h2>Anjos Solidários na Mídia</h2>
              <p>Algumas matérias em que fomos destaques</p>
            </Col>
            <Col xs={12} md={4} className={styles.article}>
              <Link
                href="https://avozdocampo.com/araci-grupo-anjos-solidarios-recebe-doacoes-de-fraldas-geriatricas-para-ajudar-necessitados/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className={styles.text}>
                  <h3>
                    Araci: Grupo Anjos Solidários recebe doações de fraldas
                    geriátricas para ajudar necessitados
                  </h3>
                  <h4>Site: A Voz do Campo</h4>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={4} className={styles.article}>
              <Link
                href="https://avozdocampo.com/anjos-solidarios-drive-thru-arrecada-fraldas-geriatricas-nesta-quinta-feira06-no-centro-de-araci/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className={styles.text}>
                  <h3>
                    Anjos Solidários: Drive thru arrecada fraldas geriátricas
                    nesta quinta-feira (06) no centro de Araci
                  </h3>
                  <h4>Site: A Voz do Campo</h4>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={4} className={styles.article}>
              <Link
                href="https://avozdocampo.com/solidariedade-voluntarias-se-unem-e-criam-grupo-de-ajuda-social-em-araci-para-arrecadar-fraldas-geriatricas/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className={styles.text}>
                  <h3>
                    Solidariedade: Voluntárias se unem e criam grupo de ajuda
                    social em Araci para arrecadar fraldas geriátricas
                  </h3>
                  <h4>Site: A Voz do Campo</h4>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer/>
    </>
  );
}
