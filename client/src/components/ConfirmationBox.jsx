import React from 'react';
import CommitteeAccess from './CommitteeAccess';

const ConfirmationBox = () => (
    <div className="alert alert-success hidden" id="success-alert">
        <button type="button" id="close-button" className="close" onClick={this.exitAlert}>x</button>
        <span className="glyphicon glyphicon-ok"></span> Committee has been added!
    </div>
);

export default CommitteeAccess;