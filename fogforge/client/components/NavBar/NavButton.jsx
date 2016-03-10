var navButtonStyle = {
    normal:{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        background: 'rgba(0,0,0,0.5)'
    },
    hover:{
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        background: 'rgba(60,60,60,1)'
    }
};
  
NavButton = React.createClass({
    mixins: [HoverMixin],
    
    style: function() {
      if (this.state.hovered) {
        return navButtonStyle.hover;
      } else {
        return navButtonStyle.normal;
      }
    },
    
    render: function(){
        return(
            <a href={this.props.link} style={this.style()} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                {this.props.text}
            </a>
        );
    }
});