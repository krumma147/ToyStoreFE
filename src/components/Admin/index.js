import React from "react";
import Sidebar from './Sidebar';
import Content from './Content';
import {AdminStyle} from './admin.styles';
const Index = () => {
    return(
        <>
        <div class="wrapper">
            <Sidebar/>

            <Content />

        </div>
        <AdminStyle/>
        </>
    )
}

export default Index;