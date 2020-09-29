import React from 'react';
import { Layout, Menu, Breadcrumb, Rate, Divider, Row, Col, Image, Avatar, Tag, Button, Space, Pagination, Card, List, Typography } from 'antd';
import { HomeOutlined, UserOutlined, CoffeeOutlined, FireOutlined, YoutubeOutlined, FolderOutlined, SearchOutlined, CalendarOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';


function Post(props){
    return (
        <div>
            <Divider orientation="left" size='2'><b>{props.post.tituloPrincipal}</b></Divider>
            <CalendarOutlined /> {props.post.fechaPublicación}
            <div>
                <br></br>
                <Row>
                    <Col span={14}>
                        <Image
                            src={props.post.linkImagen}
                            alt={props.post.nombreImagen}
                        />
                        <div><br></br><Tag color="salmon"><FolderOutlined />{props.post.categoria}</Tag></div>
                    </Col>
                    <Col span={10}>
                        <ul>
                            <li><b>{props.post.listaTitulo}</b> {props.post.listaCuerpo}</li>
                            <li><b>{props.post.listaTitulo2}</b> {props.post.listaCuerpo2} </li>
                            <li><b>{props.post.listaTitulo3}</b> {props.post.listaCuerpo3}  </li>
                            <li><b>{props.post.listaTitulo4}</b> {props.post.listaCuerpo4} </li>
                            <li><b>{props.post.listaTitulo5}</b> {props.post.listaCuerpo5} </li></ul>
                        <p></p>
                    </Col>
                </Row>
            </div><br></br>
            <p>
                {props.post.descripcion}
            </p>
            <a href={props.post.linkRedireccion} >Leer la receta...</a>
        </div>

    )
}

export default Post;