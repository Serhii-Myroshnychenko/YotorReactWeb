import React, {useEffect, useState} from "react";
import {Card,CardBody,CardHeader, Col, Row, Table} from 'reactstrap';
import {NavLink, useHistory} from "react-router-dom";

function RestrictionList(){
    
    const history = useHistory();
   async function deleteRestriction(id){

    let res = await fetch("https://localhost:8972/api/Restriction/" + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
   }

   const editRestriction = (id)=>{
       localStorage.setItem("idRest",id);
       history.push({
           pathname : './EditRestriction'
       })   

   }
    function callTwoFunctions(id){
         deleteRestriction(id);
         getRestrictions();
    }
    async function getRestrictions(){
       
        let res = await fetch("https://localhost:8972/api/Restriction", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
        res = await res.json();
        localStorage.setItem("res", JSON.stringify(res));
        
    }
    getRestrictions();
    return (
        
        <div className="animated fadeIn">
            
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Restriction List
                        </CardHeader>
                        <CardBody>
                            <Table  striped size ="sm">
                                <thead>
                                    <tr>
                                        <th>restriction_id</th>
                                        <th>landlord_id</th>
                                        <th>car_name</th>
                                        <th>description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        JSON.parse(localStorage.getItem("res")).map((item,idx)=>{
                                            return <tr key={idx}>
                                                <td>{item.restriction_id}</td>
                                                <td>{item.landlord_id}</td>
                                                <td>{item.car_name}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <row>
                                                    <button className="btn btn-warning" onClick={()=>editRestriction(item.restriction_id)}>Edit</button>
                                                    </row>
                                                    <row>
                                                        -
                                                    </row>
                                                    <row>
                                                    <button className="btn btn-warning" onClick={()=>callTwoFunctions(item.restriction_id)}>Delete</button>
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
export default RestrictionList;


