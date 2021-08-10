import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import styles from "../styles/modules/Info.module.sass"
import Image from 'next/image'

import headerImg from "./../public/img/headers/info.jpg"

export default function Info() {
    let title1 = "Vanliga frågor"
    let title2 = "Störningar"
    let title3 = "...etc"

    return (
        <div className={styles.container}>
            <div className={styles.headerImg}>
                <Image src={headerImg} layout="fill" objectFit="cover"></Image>
            </div>
            <div className={styles.contentContainer}>
                <Tab.Container defaultActiveKey="#link1">

                    <div className={styles.controlPane}>
                        <ListGroup className={styles.listGroup}>
                            <ListGroup.Item action href="#link1">
                                {title1}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                {title2}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                                {title3}
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                {title3}
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className={styles.contentPane}>
                        <Tab.Content className={styles.tabContent}>
                            <Tab.Pane eventKey="#link1">
                                <h1 className="xlarge">{title1}</h1>
                                <p>Innehåll som handlar om det som står ovan, dvs {title1}</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <h1>{title2}</h1>
                                <p>Vid fall av störningar i er fastighet, vänligen kontakta först den som orsakar störningen .....</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <h1>{title3}</h1>
                                <p>Kan ha så många man vill</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <h1>{title3}</h1>
                                <p>Kan ha så många man vill</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        </div>
    )
}