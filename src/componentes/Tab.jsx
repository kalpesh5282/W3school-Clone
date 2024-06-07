import './Tab.css';



function Tab(props){
    return(
        <div className='tab-item-div'onClick={()=>{props.handleClick(props.index)}}>{props.title}</div>
    );

}

export default Tab;
