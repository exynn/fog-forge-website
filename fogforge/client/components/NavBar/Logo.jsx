var logoStyle = {
    normal:{
        width: '100%',
        height: '100%',
        opacity: 0.5
    },
    hover:{
        width: '100%',
        height: '100%',
        opacity: 1
    }
};

Logo = React.createClass({
    mixins: [HoverMixin],
    
    style: function() {
      if (this.state.hovered) {
        return logoStyle.hover;
      } else {
        return logoStyle.normal;
      }
    },
    
    render(){
        return(
          <a style={this.style()} href={this.props.link}><img style={logoStyle} src="images/Logo.png"></img></a> 
        );
    }
});