import * as React from "react";
import {Footer} from "./ui/Footer";
import {NavBar} from "./ui/NavBar";
import {SideBar} from "./ui/SideBar";
import {Content} from "./ui/Content";

const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');



interface IProps {
    user: string
}

export class Main extends React.Component<IProps, {}> {
    render() {
        return (
            <Grid>
                <Row>
                    <NavBar />
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <Content />
                    </Col>
                    <Col xs={6} md={4}>
                        <SideBar />
                    </Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Grid>
        )
    }
}