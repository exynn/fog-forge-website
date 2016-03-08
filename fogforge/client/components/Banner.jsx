var bannerStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
}

Banner = React.createClass({
    render(){
        return(
          <img style = {bannerStyle} src={this.props.imageSrc}></img>  
        );
    }
});