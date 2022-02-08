import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useHistory} from "react-router-dom";

function EditRestriction(){

    const [restriction_id, setRestId] = useState("");
    const [landlord_id, setLandId] = useState("");
    const [car_name, setCarName] = useState("");
    const [description, setDesciption] = useState("");

    const history = useHistory();
    async function editRestriction(e){
        e.preventDefault();
        let res = await fetch("https://localhost:8972/api/Restiction/" + localStorage.getItem("idRest"), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
            body: JSON.stringify({Restriction_id:restriction_id,Landlord_id:landlord_id,Car_name:car_name,Description:description}),
        });
        if(res.status==200){
           
        }
        else{
            alert("Что-то пошло не так");
        }
    }
    let result = [];
    for(let i = 0; i < JSON.parse(localStorage.getItem("res")).length; i++ ){
        if(JSON.parse(localStorage.getItem("res"))[i].restriction_id == localStorage.getItem("idRest")){
            result.push(JSON.parse(localStorage.getItem("res"))[i]);
            
        }
    }
    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={editRestriction}>
                                    <h1>Update Organization</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="restriction_id" placeholder={result[0].restriction_id}  onChange={(e)=>setRestId(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="landlord_id" placeholder={result[0].landlord_id} onChange={(e)=>setLandId(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="car_name" placeholder={result[0].car_name} onChange={(e)=>setCarName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="description" placeholder={result[0].description} onChange={(e)=>setDesciption(e.target.value)}/>
                                    </InputGroup>
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button type="reset" className="btn btn-info mb-1" block><span>Cancel</span></Button>
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
export default EditRestriction;
