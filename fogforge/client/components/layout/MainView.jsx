var mainViewStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: '#a3a3c2'  
};

MainView = React.createClass({
    render(){
        return(
            <div style={mainViewStyle}>
                {this.props.content}
            </div>
        );
    }
});