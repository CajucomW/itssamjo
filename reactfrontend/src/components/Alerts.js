import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

export class Alerts extends Component {
    componentDidMount() {
        this.props.alert.show("ALERT is Working!");
    }

    render() {
        console.log('===Alerts?===');
        return <Fragment />;
    }
}

export default withAlert()(Alerts);