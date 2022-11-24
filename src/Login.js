import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Header from "./Header"

const Login = () => {
    return (
        <>
            <Header />
            <main className="form-container">
                <Form className="form-box w-100 m-auto">
                    <h1 className="h3 mb-3 fw-normal">Login</h1>
                    <FloatingLabel label="User ID" controlId="formUserID">
                        <Form.Control className="atas" placeholder="NoeBee"></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel label="Password" controlId="formpassword">
                        <Form.Control className="bawah" placeholder="password"></Form.Control>
                    </FloatingLabel>
                    <p>Belum Register? <Link to="/register">Register</Link></p>

                    <Button className="w-100 mt-3">Submit</Button>
                </Form>
            </main>
        </>
    )

}
export default Login