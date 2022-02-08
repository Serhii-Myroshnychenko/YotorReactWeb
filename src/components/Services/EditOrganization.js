import React,{useState} from "react";
import { Button,Card, CardBody, CardFooter, Col,Container, Form,Input,InputGroup,Row } from "reactstrap";
import {NavLink, useHistory} from "react-router-dom";

function EditOrganization(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [taxes, setTaxes] = useState("");
    const [address, setAddress] = useState("");
    const [founder, setFounder] = useState("");
    const [account, setAccount] = useState("");
    
    const history = useHistory();
    
    

    async function editOrganization(e){
        e.preventDefault();
        let res = await fetch("https://localhost:8972/api/Organization/" + localStorage.getItem("id"), {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
            body: JSON.stringify({Name:name,Email:email, Phone:phone, Code:code,Taxes:taxes, Address:address, Founder:founder,Account:account}),
        });
        console.log(res);
        console.log(res.status);
        //debugger;
        if(res.status==200){
           // history.push('/.OrganizationList');
        }
        else{
            alert("Что-то пошло не так");
        }



    }






    
    let result = [];
    for(let i = 0; i < JSON.parse(localStorage.getItem("org")).length; i++ ){
        if(JSON.parse(localStorage.getItem("org"))[i].organization_id == localStorage.getItem("id")){
            result.push(JSON.parse(localStorage.getItem("org"))[i]);
            console.log("dsasdadsad")
        }
        console.log(JSON.parse(localStorage.getItem("org"))[i].organization_id);
    }
    
    console.log(result);
    console.log(result[0].id);
    //setName(result[0].name);

    

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={editOrganization}>
                                    <h1>Update Organization</h1>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="name" placeholder={result[0].name}  onChange={(e)=>setName(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="email" placeholder={result[0].email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="phone" placeholder={result[0].phone} onChange={(e)=>setPhone(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="code" placeholder={result[0].code} onChange={(e)=>setCode(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="taxes" placeholder={result[0].taxes} onChange={(e)=>setTaxes(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="address" placeholder={result[0].address} onChange={(e)=>setAddress(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="founder" placeholder={result[0].founder} onChange={(e)=>setFounder(e.target.value)}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="text" name="account" placeholder={result[0].account} onChange={(e)=>setAccount(e.target.value)}/>
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
export default EditOrganization;
