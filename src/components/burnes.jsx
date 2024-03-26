import React, { Component } from "react";

/**
 * Burners class component
 */
class Burners extends Component {
    render() {
      return (
        <div>
          <div className="lighter" style={{ backgroundColor: this.props.color_button.value }}>
              <div className="lighter-inside">
              </div>
          </div>
        </div>
      );
    }
  
  }
  
  export default Burners;