var headerStyle ={
    width: '100%',
    height: '500px',
    top: 0,
    left: 0  
};

Header = React.createClass({
   render(){
       return(
           <div style = {headerStyle}>
                <Banner imageSrc="images/Banner.jpg"/>
                <NavBar/>                            
           </div>
       );
   } 
});