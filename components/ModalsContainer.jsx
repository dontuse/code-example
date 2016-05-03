import React, { PropTypes } from 'react';
import ModalBuyOneClick from './ModalBuyOneClick.jsx';
import { connect } from 'react-redux';

class ModalsContainer extends React.Component {
  render() {
    return (
      <div>
        <ModalBuyOneClick
          dispatch = {this.props.dispatch}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps
)(ModalsContainer);
