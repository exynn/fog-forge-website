var headerStyle ={
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundImage: 'url(images/Banner.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
};

Header = React.createClass({
   render(){
       return(
           <div style = {headerStyle}>
                <NavBar/> 
           </div>
       );
   } 
});