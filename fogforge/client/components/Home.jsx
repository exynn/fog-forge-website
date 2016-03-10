var homeStyle={
    position: 'relative',
    top: '25%',
    left: '25%'
};

var welcomeStyle={
    fontStyle: 'normal',
    color: 'white',
    fontSize: '3em',
    whiteSpace: 'pre-wrap',
    padding: 0,
    margin: 0,
    left: '50%'
};

var paragraphStyle = {
    fontStyle: 'normal',
    color: 'white',
    fontSize: '2em',
    whiteSpace: 'pre-wrap',
    padding: 0,
    margin: 0
};

Home = React.createClass({
    render(){
        return(
          <div style={homeStyle}>
            <p style={welcomeStyle}><b>Welcome to fogForge.</b></p>
            <p style={paragraphStyle}>
            This is fogForge , a local seller of all things DIY e-juice.<br></br>
            Please take a look through our site and place an order in the Shop.<br></br>
            We hope to cater to your every vape juice making needs.<br></br>
            Cheers from the team.<br></br>
            </p>
          </div>  
        );
    }
});