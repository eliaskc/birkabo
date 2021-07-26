import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import styles from "../styles/modules/Info.module.sass"

export default function Info() {
    let title1 = "Vanliga frågor"
    let title2 = "Störningar"
    let title3 = "...etc"
    return (
        <div className={styles.container}>
            <Tab.Container defaultActiveKey="#link1">
                <Row /* style={{ margin: 0 }} */>
                    <Col sm={2} /* style={{ padding: 0 }} */>
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
                    </Col>
                    <Col sm={8}>
                        <Tab.Content className={styles.tabContent}>
                            <Tab.Pane eventKey="#link1">
                                <h1>{title1}</h1>
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
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}