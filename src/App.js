import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import { Layout, Menu, Breadcrumb, Rate, Divider, Row, Col, Image, Avatar, Tag, Button, Space, Pagination, Card, List, Typography } from 'antd';
import { HomeOutlined, UserOutlined, CoffeeOutlined, FireOutlined, YoutubeOutlined, FolderOutlined, SearchOutlined, CalendarOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const posts = [
  {
    tituloPrincipal: "La Pastafrola",
    fechaPublicación: "19 Octubre, 2019",
    linkImagen: "https://i0.wp.com/empleosdigitales.com/wp-content/uploads/2020/04/tartafrola.jpg?resize=750%2C450&ssl=1",
    nombreImagen: "Pastafrola",
    categoria: "Masa",
    listaTitulo: "Rinde:",
    listaCuerpo: "8 porciones.",
    listaTitulo2: "Tiempo de preparación:",
    listaCuerpo2: "20 min.",
    listaTitulo3: "Tipo:",
    listaCuerpo3: "masa.",
    listaTitulo4: "Dificultad:",
    listaCuerpo4: "fácil.",
    listaTitulo5: "Tiempo de cocción:",
    listaCuerpo5: "20 a 30 minutos",
    descripcion: " La Pastafrola es una masa de repostería aromatizada generalmente con vainilla y ralladura de limón. Además de ser una masa básica que se puede rellenar con una gran variedad de ingredientes, es una tarta artesanal de origen a italiano.",
    linkRedireccion: "https://gastronomiaycia.republica.com/2008/10/17/pasta-frola",
  },
  {
    tituloPrincipal: "El Bizcochuelo de Banana",
    fechaPublicación: "08 Marzo, 2020",
    linkImagen: "https://recetasparacocinar.net/wp-content/uploads/2017/01/Torta-de-banana-humeda.jpg",
    nombreImagen: "Bizcochuelo de banana",
    categoria: "Masa esponjosa",
    listaTitulo: "Rinde:",
    listaCuerpo: "8 a 10 porciones.",
    listaTitulo2: "Tiempo de preparación:",
    listaCuerpo2: "15 min.",
    listaTitulo3: "Tipo:",
    listaCuerpo3: "masa esponjonsa.",
    listaTitulo4: "Dificultad:",
    listaCuerpo4: "fácil.",
    listaTitulo5: "Tiempo de cocción:",
    listaCuerpo5: "50 minutos",
    descripcion: "La banana, conocida también en otros países como plátano o cambur, es una fruta dulce, sabrosa y muy fácil de comer, ya que basta con pelarla para degustarla en su forma más natural. Muchas veces compramos más de lo que vamos a comer, se nos maduran muy rápidamente y terminan en la basura. Pero, ¡No las tires!.",
    linkRedireccion: "https://amantesdelacocina.com/cocina/2015/07/bizcocho-de-banana",
  },
  {
    tituloPrincipal: "El Pavé",
    fechaPublicación: "15 Agosto, 2020",
    linkImagen: "https://www.recetasya.com/wp-content/uploads/2014/10/pave-de-chocolate2.jpg",
    nombreImagen: "Pavé de chocolate",
    categoria: "Postres fríos",
    listaTitulo: "Rinde:",
    listaCuerpo: "8 a 10 porciones.",
    listaTitulo2: "Tiempo de preparación:",
    listaCuerpo2: "15 min.",
    listaTitulo3: "Tipo:",
    listaCuerpo3: "postre frío.",
    listaTitulo4: "Dificultad:",
    listaCuerpo4: "fácil.",
    listaTitulo5: "Tiempo de cocción:",
    listaCuerpo5: "enfriar por 2hs",
    descripcion: "El pavé es un postre frío compuesto por crema o mousse que se elabora en un molde rectangular con otros ingredientes extras como mermelada y decorado con frutas. Hecho con capas de bizcocho genovés (o galletitas María), intercalando con cremas/mousse..",
    linkRedireccion: "https://gastronomiaycia.republica.com/2010/10/21/que-es-un-pave",
  }
]

const componentes = [
  {
    tituloEspecial: "Especial San Valentín",
    nombreImagen: "cenaRomantica",
    linkImagen: "https://recetinas.com/wp-content/uploads/2020/01/recetas-para-la-cena-de-san-valentin.jpg",
    descripcion: "San Valentín es el día especial del amor que se celebra el 14 de febrero de todos los años. Elige un entrante, un plato principal y un postre, así tendrás asegurado un menú especial para ese día.",
    linkRedireccion: "https://recetinas.com/recetas-para-san-valentin/",
  },
  {
    tituloEspecial: "Especial Navidad",
    nombreImagen: "cenaNavideña",
    linkImagen: "https://www.lacavadeelia.com/wp-content/uploads/2014/12/cena-navide%C3%B1a.jpg",
    descripcion: "Para esas fechas importantes en las que toda la familia se reúne alrededor de la mesa para celebrar como cada año, la hermosa Navidad...Aquí una selección de las mejores recetas de navidad para soprender a los tuyos. Podrás encontrar desde aperitivos, hasta recetas más elaboradas. Incluidos los postres navideños tradicionales. Todas estas recetas las podrás preparar de manera fácil.¡Manos a la obra!",
    linkRedireccion: "https://www.cocinacaserayfacil.net/recetas-de-navidad-faciles/",
  },
]

const data = [
  'Pastafrolas',
  'Brownie con dulce leche',
  'Batidos energéticos',
  'Pizza italiana.',
  'Cupcakes',
];

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Row>
          <Col span={16}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">INICIO</Menu.Item>
              <Menu.Item key="2">DULCES</Menu.Item>
              <Menu.Item key="3">SALADOS</Menu.Item>
              <Menu.Item key="4">VIDEORECETAS</Menu.Item>
              <Menu.Item key="5">¿QUIÉN SOY?</Menu.Item>
            </Menu>
          </Col>
          <Col span={8} align='right'>
            <Space>
              <Button icon={<SearchOutlined />} > Buscar...</Button>
              <Button className="boton"> Registrarse</Button>
              <Button className="boton" onClick={() =>alert("Usted ha Iniciado Sesión")} > Iniciar sesión</Button>
            </Space>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <CoffeeOutlined />
            <span>Recetas dulces</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <FireOutlined />
            <span>Recetas saladas</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <YoutubeOutlined />
            <span>Vídeorecetas</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>¿Quién soy?</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 id='h2Especial'>BLOG DE RECETAS DE <h1><b>ZAB</b></h1></h2>
        <div>
          <Row>
            <Col span={16}>
              {posts.map(post => {
                return (
                  <div className="site-layout-content">
                    <Divider orientation="left" size='2'><b>{post.tituloPrincipal}</b></Divider>
                    <CalendarOutlined /> {post.fechaPublicación}
                    <div>
                      <br></br>
                      <Row>
                        <Col span={14}>
                          <Image
                            src={post.linkImagen}
                            alt={post.nombreImagen}
                          />
                          <div><br></br><Tag color="salmon"><FolderOutlined />{post.categoria}</Tag>
                            <Rate />
                          </div>
                        </Col>
                        <Col span={10}>
                          <ul>
                            <li><b>{post.listaTitulo}</b> {post.listaCuerpo}</li>
                            <li><b>{post.listaTitulo2}</b> {post.listaCuerpo2} </li>
                            <li><b>{post.listaTitulo3}</b> {post.listaCuerpo3}</li>
                            <li><b>{post.listaTitulo4}</b> {post.listaCuerpo4}</li>
                            <li><b>{post.listaTitulo5}</b> {post.listaCuerpo5}</li></ul>
                          <p></p>
                        </Col>
                      </Row>
                    </div><br></br>
                    <p>{post.descripcion}</p>
                    <a href={post.linkRedireccion}>Leer la receta...</a>
                  </div>
                )
              })}
            </Col>

            <Col span={1}>
            </Col>

            <Col span={7}>
              <div className="site-layout-content">
                <div align='center'>
                  <Avatar size={64} icon={<UserOutlined />} />
                </div>
                <Divider size='2'><b>ZileidyAB</b></Divider>
                <p>
                  Sí, soy yo. Zileidy, una aficionada a la cocina. Actualmente vivo en Caazapá, Paraguay, donde elaboro y vendo los productos.
                  Este blog va dedicado a todas aquellas personas que se inicien en la cocina.
                </p>
              </div>

              <br></br>

              <div className="site-layout-content">
                <h2 style={{ color: "salmon", fontSize: '30px', textAlign: 'center', fontFamily: 'Monotype Corsiva' }}><b>Especiales</b></h2>
                {componentes.map(componente => {
                  return (
                    <div>
                      <Divider size='2'><b>{componente.tituloEspecial}</b></Divider>
                      <Card
                        hoverable
                        cover={<img alt={componente.nombreImagen} src={componente.linkImagen} />}
                        align='justify'
                        color='black'>
                        <Meta description={componente.descripcion} />
                        <br></br><a href={componente.linkRedireccion}>Leer recetas...</a>
                      </Card>
                    </div>
                  )
                })}
              </div>

              <br></br>
              <div className="site-layout-content">
                <Divider size='2'><b>Seguime en las redes sociales</b></Divider>
                <div className="icons-list" align='center'>
                  <FacebookOutlined /> ZAB Postres <br></br>
                  <InstagramOutlined /> @zabpostres <br></br>
                  <YoutubeOutlined /> ZAB Postres <br></br>
                  <TwitterOutlined /> @zileidyarguello <br></br>
                  <WhatsAppOutlined /> 0982287636 <br></br>
                </div>
              </div>
              <br></br>

              <div className="site-layout-content">
                <Divider size='2'><b>Populares</b></Divider>
                <List
                  bordered
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <Typography.Text mark>[RECETA]</Typography.Text> {item}
                    </List.Item>
                  )}
                />
              </div>
            </Col>
          </Row>

          <br></br>
          <div align="center">
            <Pagination defaultCurrent={1} total={5} /><br></br>
          </div>

          <br></br>
          <div className="site-layout-content" align='center'>
            <h2 style={{ color: "salmon", fontSize: '30px', textAlign: 'center', fontFamily: 'Monotype Corsiva' }}><b>Videorecetas</b></h2>
            <Row>
              <Col span={8}>
                <h3>Preparación de Pastafrolas</h3>
                <iframe title='Preparación de Pastafrolas' width="360" height="215" src="https://www.youtube.com/embed/YTr4ScruQnI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col span={8}>
                <h3>Preparación de Bizcochuelo de Banana</h3>
                <iframe title='Preparación de Bizcochuelo de Banana' width="360" height="215" src="https://www.youtube.com/embed/OeoaC2ccLiY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col span={8}>
                <h3>Preparación de Pavé de Chocolate</h3>
                <iframe title='Preparación de Pavé de Chocolate' width="360" height="215" src="https://www.youtube.com/embed/YTr4ScruQnI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
            </Row>
          </div>
        </div>
      </Content><br></br>

      <Footer className="footer">
        <h3><b>MÁS INFORMACIÓN AQUÍ</b></h3>
        <hr color="" size='1'></hr>
        <table class="claseEstilo">
          <tr>
            <th>DICCIONARIO DE COCINA</th>
            <th>CONTACTOS</th>
            <th>PRIVACIDAD Y COOKIES</th>
          </tr>
          <tr>
            <td>Correcto Tamizado</td>
            <td>(0982)287636</td>
            <td>Politica de privacidad</td>
          </tr>
          <tr>
            <td>Tips para Baño María</td>
            <td>zileidy.arguello@gmail.com</td>
            <td>Aviso legal y terminos de uso</td>
          </tr>
          <tr>
            <td>Preparacion del Ganache</td>
            <td></td>
            <td>Politica de cookies</td>
          </tr>
        </table>
        <br></br>
        El blog de ZAB
        COPYRIGHT © 2020 - Created by Zileidy Milenna María Argüello Barreto
        </Footer>
    </Layout>
  )
}

export default App;
