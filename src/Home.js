import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"

const Home = () => {
    return (
        <>
        <Header/>
        <Container className="py-5">
            <Row className="py-lg-5">
                <Col >
                    <h2>Home</h2>
                </Col>
            </Row>
        </Container>
        </>
    )

}
export default Home