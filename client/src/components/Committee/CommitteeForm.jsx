import React, { Component } from 'react';
import './AddCommittee.css';
import { connect } from 'react-redux';
import * as committeeActions from '../../redux/actions/committeeActions';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class CommitteeForm extends Component {
    state = {
        committee: {
            name: "",
            type: "",

        }
    };

    handleChange = event => {
        const committee = { ...this.state.committee, [event.target.id]: event.target.value };
        this.setState({ committee: committee});
    }

    handleSubmit = event => {
        event.preventDefault();
        const committee = { ...this.state.committee, [event.target.id]: event.target.value };
        this.props.addCommittee(committee);

    }

    render() {
        const { isRedirect } = this.props;
        return (
            <form className="account-details" onSubmit={this.handleSubmit}>
                <span className="ac-header">Committee Details</span>
                <div className="form-row">
                    <div className="form-group col-md-12 text-left">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Committee Name" 
                            onChange={this.handleChange}
                            value={this.state.committee.name}
                            required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6 text-left">
                        <label htmlFor="type">Type of Committee</label>
                        <input type="text" 
                            className="form-control" 
                            id="type" 
                            placeholder="Event Planning"
                            onChange={this.handleChange}
                            value={this.state.committee.type} 
                            required/>
                    </div>
                    <div className="form-group col-md-6 text-left">
                        <label htmlFor="category">Category</label>
                        <select id="category" className="form-control" required>
                            <option value="">Choose...</option>
                            <option value="Primary">Primary</option>
                            <option value="Auxillary">Auxillary</option>
                        </select>
                    </div>
                </div>
                <button type="submit" id="add-button" className="btn btn-secondary">Add Committee</button>  
            </form>

        )
    }
}

function mapStateToProps(state) {
    return {
        committees: state.committees
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(committeeActions, dispatch),
        addCommittee: committee => dispatch(committeeActions.addCommittee(committee))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CommitteeForm);