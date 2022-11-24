import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Header from "./Header"

const Register = () => {
    return (
        <>
        <Header />
        <main className="form-container">
            <Form className="form-box w-100 m-auto">
                <h1 className="h3 mb-3 fw-normal">Register</h1>
                <FloatingLabel label="Nama" controlId="formNama">
                    <Form.Control className="atas" placeholder="NoeBee"></Form.Control>
                </FloatingLabel>
                <FloatingLabel label="User ID" controlId="formUserID">
                    <Form.Control className="tengah" placeholder="NoeBee"></Form.Control>
                </FloatingLabel>
                <FloatingLabel label="Password" controlId="formPassword">
                    <Form.Control className="tengah" placeholder="password"></Form.Control>
                </FloatingLabel>
                <FloatingLabel label="Verif Password" controlId="formRepeetpassword">
                    <Form.Control className="Bawah" placeholder="password"></Form.Control>
                </FloatingLabel>
                <p>Sudah Punya Akun? <Link to="/login">Login</Link></p>

                <Button className="w-100 mt-3">Registration</Button>
            </Form>
        </main>
    </>
    )

}
export default Register