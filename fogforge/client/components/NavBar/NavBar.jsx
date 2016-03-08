var navBarStyle = {
  color: 'white',
  backgroundColor: 'black',
  opacity: 0.6,
  height: '50px',
  width: '100%',
  position: 'relative',
  top: 0,
  left: 0,
  marginTop: '-500px',
};

NavBar = React.createClass({
    render(){
        return(
            <div style={navBarStyle}>
                <NavButton text="Home" link="/"/>
                <NavButton text="Shop" link="/Shop"/>
            </div>
        );
    }
});