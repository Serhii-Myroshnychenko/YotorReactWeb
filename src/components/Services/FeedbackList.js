import React, {useEffect, useState} from "react";
import {Card,CardBody,CardHeader, Col, Row, Table} from 'reactstrap';
import {NavLink, useHistory} from "react-router-dom";





function FeedbackList(){

   const history = useHistory();
   async function deleteFeedback(id){

    let res = await fetch("https://localhost:8972/api/Feedback/" + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
   }
   const editFeedback = (id)=>{
       localStorage.setItem("idFeed",id);
       
       history.push({
           pathname : './EditFeedback'
       })   

   }
    function callTwoFunctions(id){
         deleteFeedback(id);
         getFeedbacks();
    }
    async function getFeedbacks(){
       
        let res = await fetch("https://localhost:8972/api/Feedback", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+ localStorage.getItem("tok"),
            },
        });
        res = await res.json();
        localStorage.setItem("feed", JSON.stringify(res));
    } 
    getFeedbacks();
    return (
        
        <div className="animated fadeIn">
            
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Feedback List
                        </CardHeader>
                        <CardBody>
                            <Table  striped size ="sm">
                                <thead>
                                    <tr>
                                        <th>feedback_id</th>
                                        <th>user_id</th>
                                        <th>name</th>
                                        <th>date</th>
                                        <th>text</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        JSON.parse(localStorage.getItem("feed")).map((item,idx)=>{
                                            return <tr key={idx}>
                                                <td>{item.feedback_id}</td>
                                                <td>{item.user_id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.date}</td>
                                                <td>{item.text}</td>
                                                
                                                <td>
                                                    <row>
                                                    <button className="btn btn-warning" onClick={()=>editFeedback(item.feedback_id)}>Edit</button>
                                                    </row>
                                                    <row>
                                                        -
                                                    </row>
                                                    <row>
                                                    <button className="btn btn-warning" onClick={()=>callTwoFunctions(item.feedback_id)}>Delete</button>
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
export default FeedbackList;


