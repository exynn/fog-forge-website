var bannerStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: 'url(images/Banner.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
}

Banner = React.createClass({
    render(){
        bannerStyle.backgroundImage = 'url('+this.props.imageSrc+')';
        return(
          <div style = {bannerStyle}></div>  
        );
    }
});