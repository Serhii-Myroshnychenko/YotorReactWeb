import React, {useEffect, useState} from "react";
import {Card,CardBody,CardHeader, Col, Row, Table} from 'reactstrap';
import {NavLink, useHistory} from "react-router-dom";

function OrganizationList(){
    
   const history = useHistory();
   async function deleteOrganization(id){

    let res = await fetch("https://localhost:8972/api/Organization/" + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
   }

   const editOrganization = (id)=>{
       localStorage.setItem("id",id);
       
       history.push({
           pathname : './EditOrganization'
       })   

   }
    function callTwoFunctions(id){
         deleteOrganization(id);
         getOrganizations();
    }
    async function getOrganizations(){
       
        let res = await fetch("https://localhost:8972/api/Organization/Get", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
        console.log(res);
        console.log(res.status);
        res = await res.json();
        localStorage.setItem("org", JSON.stringify(res));
        
    }
    getOrganizations();
    return (
        
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Organization List
                        </CardHeader>
                        <CardBody>
                            <Table  striped size ="sm">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Code</th>
                                        <th>Taxes</th>
                                        <th>Address</th>
                                        <th>Founder</th>
                                        <th>Account</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        JSON.parse(localStorage.getItem("org")).map((item,idx)=>{
                                            return <tr key={idx}>
                                                <td>{item.organization_id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.code}</td>
                                                <td>{item.taxes}</td>
                                                <td>{item.address}</td>
                                                <td>{item.founder}</td>
                                                <td>{item.account}</td>
                                                <td>
                                                    <row>
                                                    <button className="btn btn-warning" onClick={()=>editOrganization(item.organization_id)}>Edit</button>
                                                    </row>
                                                    <row>
                                                        -
                                                    </row>
                                                    <row>
                                                    <button className="btn btn-warning" onClick={()=>callTwoFunctions(item.organization_id)}>Delete</button>
                                                    </row>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default OrganizationList;


