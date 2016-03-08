var navButtonStyle = {
        color: 'white',
        backgroundColor: 'black',
        opacity: 0.6,
        position: 'relative',
        left: '50%',
        width: '50px',
        height: '100%',
        textAlign: 'center'
};

NavButton = React.createClass({
    render(){
        return(
          <a style={navButtonStyle} href={this.props.link}>{this.props.text}</a>  
        );
    }
});