HoverMixin = {
    // Initial state
    componentWillMount: function() {
      this.state = { hovered: false };
    },
    
    // Attach mouse listeners to the root node of the component
    componentDidMount: function() {
      this.getDOMNode().addEventListener("mouseover", this.onMouseOver);
      this.getDOMNode().addEventListener("mouseout", this.onMouseOut);
    },
    
    // Clean up listeners when the component unmounts
    componentWillUnmount: function() {
      this.getDOMNode().removeEventListener("mouseover", this.onMouseOver);
      this.getDOMNode().removeEventListener("mouseout", this.onMouseOut);
    },
    
    // Mutate state
    onMouseOver: function() {
      this.setState({ hovered: true });
    },
    
    onMouseOut: function() {
      this.setState({ hovered: false });
    }
  };