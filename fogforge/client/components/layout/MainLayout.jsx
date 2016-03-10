var mainLayoutStyle = {
    margin: '-8px',
    width: '100vw',
    height: '100vh'
};

var headerStyle = {
    width: '100%',
    height: '20%'
};

var contentStyle = {
    width: '100%',
    height: '70%'
};

var footerStyle = {
    width: '100%',
    height: '10%'
};

MainLayout = React.createClass(
    {
        render(){
            return(
                <div style={mainLayoutStyle}>
                    <div style={headerStyle}>{this.props.header}</div>
                    <div style={contentStyle}>{this.props.content}</div>
                    <div style={footerStyle}>{this.props.footer}</div>
                </div>
            )
        }
    }
)