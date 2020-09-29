import React from 'react';
import { Layout, Menu, Breadcrumb, Rate, Divider, Row, Col, Image, Avatar, Tag, Button, Space, Pagination, Card, List, Typography } from 'antd';
import { HomeOutlined, UserOutlined, CoffeeOutlined, FireOutlined, YoutubeOutlined, FolderOutlined, SearchOutlined, CalendarOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';


function ComponenteII(props) {
    return (
        <div>
            <Divider size='2'><b>{props.componente.tituloEspecial}</b></Divider>
                <Card
                  hoverable
                  cover={<img alt={props.componente.nombreImagen} src={props.componente.linkImagen}/>}>
                  <Meta description={props.componente.descripcion} />
                  <br></br><a href={props.componente.linkRedireccion}>Leer recetas...</a>
                </Card>
        </div>
    )
}

export default ComponenteII;