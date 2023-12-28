import React from "react";
import Sidebar from './Sidebar';
import Content from './Content';
import '../../admin.css';
const Index = () => {
    return(
        <>
        <div class="wrapper">
            <Sidebar/>

            <Content />

        </div>
        </>
    )
}

export default Index;