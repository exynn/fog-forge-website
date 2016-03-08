var mainLayoutStyle = {
    margin: '-8px'  
};

MainLayout = React.createClass(
    {
        render(){
            return(
                <div style={mainLayoutStyle}>
                    {this.props.header}
                    {this.props.content}
                    {this.props.footer}
                </div>
            )
        }
    }
)