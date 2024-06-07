import './App.css';
import { useState } from "react";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar";
import Contenet from "./componentes/Contenet";
import Footer from "./componentes/Footer";
import { titles } from "./Data";
import { contents } from "./Data";


function App(){

    let [title,setTitle]= useState("HTML Tutorial");
    let[content,setContenet]=useState(<p className='para'>HTML is the standard markup language for Web pages.<br></br>

        With HTML you can create your own Website.<br></br>
        
        HTML is easy to learn - You will enjoy it!<br></br>
        <button className='study-btn'>Study our free HTML Tutorial</button></p>
        )

    let handleClick=(idx)=>{
        setTitle(titles[idx]);
        setContenet(contents[idx]);
    }
    return(
        <div className='main'>
            <Navbar/>
          
                <Sidebar handleClick={handleClick}></Sidebar>
             
                <Contenet title={title} content={content} ></Contenet>
                
                <Footer/>
          
          
            

        </div>
    );
}

export default App;

