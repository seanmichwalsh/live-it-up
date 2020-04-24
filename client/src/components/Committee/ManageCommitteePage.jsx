import React, { Component } from "react";
import "./Committee/AddCommittee.css";
import { connect } from "react-redux";
import * as committeeActions from "./../redux/actions/committeeActions";
import PropTypes from "prop-types";

class ManageCommitteePage extends Component {
  componentDidMount() {
    const { committees, loadCommittees } = this.props;
  }
  state = {
    committee: {
      name: "",
      type: "",
    },
  };

  render() {
    return <h2>Manage Committee</h2>;
  }
}

ManageCommitteePage.propTypes = {
  committees: PropTypes.array.isRequired,
  loadCommittees: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    committees: state.committees,
  };
}

const mapDispatchToProps = {
  loadCommittees: committeeActions.loadCommittees,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCommitteePage);
