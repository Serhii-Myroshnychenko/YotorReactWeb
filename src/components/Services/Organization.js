import React, { useEffect, useState } from "react";
import {  Switch, Link, NavLink } from "react-router-dom";
import AddOrganization from './AddOrganization';
import OrganizationList from './OrganizationList';
import EditOrganization from "./EditOrganization";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

function Organization(props){

    return (
        <BrowserRouter>
            <div >
                <nav>
                    <div >
                        <ul >
                            <li>
                                <Link to={'./AddOrganization'} className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'./OrganizationList'} className="nav-link">List</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br></br>
                <Switch>
                    <Route path="/AddOrganization" render={() => <AddOrganization />} />
                    <Route path="/OrganizationList" render={() => <OrganizationList />} />
                    <Route path="/EditOrganization" render={() => <EditOrganization />} />
                </Switch>
            </div>
        </BrowserRouter>   
    )
}
export default  Organization;