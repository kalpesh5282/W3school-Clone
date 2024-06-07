
import './Sidebar.css';
import Tab from './Tab';
function Sidebar(props){
    return(
        <div className="saidebar">
            
      <Tab title="HTML Introduction" index="0" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML Basic" index="1" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML Element" index="2" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML Headings" index="3" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML Attributes" index="4" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML Paragraphs" index="5" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML Style" index="6" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML Formating" index="7" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML Comments" index="8" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML  CSS" index="9" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML  Links" index="10" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML  Images" index="11" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML  Favicon" index="12" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML  Page Title" index="13" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML  Tables" index="14" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML  File Paths" index="15" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML - The Head Element" index="16" handleClick ={props.handleClick}></Tab>
      <Tab title="HTML  Layout" index="17" handleClick ={props.handleClick}></Tab>

          
        </div>
    );
}
export default Sidebar;






      {/* <div className='sidebar-item-div' onClick={()=>{ props.handleClick(0)}}>HTML Introduction</div>
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(1)}}>HTML Basic</div>
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(2)}}>HTML Element</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(3)}}>HTML Headings</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(4)}}>HTML Attributes</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(5)}}>HTML Paragraphs</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(6)}}>HTML Style</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(7)}}>HTML Formating</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(8)}}>HTML Comments</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(9)}}>HTML Color</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(10)}}>HTML CSS</div>  
            <div className='sidebar-item-div' onClick={()=>{ props.handleClick(11)}}>HTML Links</div>   */}