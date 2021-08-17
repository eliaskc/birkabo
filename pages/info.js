import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import styles from "../styles/modules/Info.module.sass"
import Image from 'next/image'

import headerImg from "./../public/img/headers/info.jpg"

export default function Info() {
    let title1 = "Ansökan"
    let title2 = "Blanketter"
    let title3 = "Vanliga frågor"

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
                        </ListGroup>
                    </div>

                    <div className={styles.contentPane}>
                        <Tab.Content className={styles.tabContent}>
                            <Tab.Pane eventKey="#link1">
                                <h1 className="xlarge">{title1}</h1>
                                <p>Om ni önskar ansöka om lägenhet kan ni kontakta oss på <a href="mailto:info@birkabo.se">info@birkabo.se</a>. </p>
                                <p>Vänligen inkludera följande information:</p>
                                <ul>
                                    <li>Personlig introduktion</li>
                                    <li>Önskad storlek på lägenhet</li>
                                    <li>Intervall för möjlig månatlig hyra</li>
                                    <li>Sysselsättning</li>
                                    <li>Era kontaktuppgifter</li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <h1 className="xlarge">{title2}</h1>
                                <p>Nedan hittar ni de blanketter ni använder er av vid bland annat ansökan av autogiro, lägenhetsbyte och andrahandsuthyrning.</p>
                                <p>Ni kan antingen skriva ut och posta ifylld blankett till: </p>
                                <p>Birkabo Förvaltning, <br />
                                    Birkagatan 55A, <br />
                                    416 56 Göteborg</p>
                                <p>Alternativt kan ni fylla i blanketten digitalt och skicka via mejl till <a href="mailto:info@birkabo.se">info@birkabo.se</a></p>

                                <h3 className={styles.formItem}>Autogiro <span className="material-icons md-36">save_alt</span></h3>
                                <h3 className={styles.formItem}>Lägenhetsbyte <span className="material-icons md-36">save_alt</span></h3>
                                <h3 className={styles.formItem}>Andrahandsuthyrning <span className="material-icons md-36">save_alt</span></h3>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <h1 className="xlarge">{title3}</h1>
                                <div>
                                    <h3>Störningar</h3>
                                    <p>Vid fall av störningar i er fastighet ......</p>
                                </div>
                                <div>
                                    <h3>När kan jag hyra ut i andra hand?</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div>
                                    <h3>Hur ansöker jag för byte av lägenhet?</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div>
                                    <h3>Erbjuder ni autogiro?</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div>
                                    <h3>Erbjuder ni epost-aviseringar?</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        </div>
    )
}