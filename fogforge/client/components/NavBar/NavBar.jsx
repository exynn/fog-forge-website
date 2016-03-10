var navBarStyle = {
  color: 'white',
  backgroundColor: 'black',
  opacity: 0.6,
  height: '50px',
  width: '100%',
  position: 'relative',
  top: 0,
  left: 0,
  listStyleType: 'none',
};

var logoInlineStyle = {
        float: 'left',
        width: '200px',
        height: '100%'  
};

var buttonInlineStyle = {
        float: 'left',
        position: 'relative',
        left: '35%',
        height: '100%',
        background: 'rgba(0,0,0,1)',
        padding: 0,
        margin: 0
};

NavBar = React.createClass({
    render(){
        return(
            <div style={navBarStyle}>
                <div style={logoInlineStyle}><Logo link="/"/></div>
                <div style={buttonInlineStyle}><NavButton text="Shop" link="/Shop"/></div>
            </div>
        );
    }
});