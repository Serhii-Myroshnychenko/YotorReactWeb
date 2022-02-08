import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useHistory} from "react-router-dom";


function AddFeedback(){


    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const history = useHistory();
    

    async function createFeedback(e) {
        e.preventDefault();
        let res = await fetch("https://localhost:8972/api/Feedback", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
            body: JSON.stringify({Name:name, Text:text}),
        });
        console.log(res);
        console.log(res.status);
        if(res.status===200){
            history.push('/.FeedbackList');
        }   
    }
    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={createFeedback}>
                                    <h1>Add New</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="name" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="text" placeholder="text" onChange={(e)=>setText(e.target.value)}/>
                                    </InputGroup>
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button  type="reset" className="btn btn-info mb-1" block><span>Cancel</span></Button>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AddFeedback;
