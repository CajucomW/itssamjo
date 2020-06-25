import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert } = this.props;
        if (error !== prevProps.error) {
            if (error.message.title) 
            // the code below system error message
            // use 'join' to turn array into string
            alert.error(
                `Title: ${error.message.title.join()}`
            );
        }
    }

    render() {
        console.log('===Alerts?===');
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors
});

export default connect(
    mapStateToProps
    )(
        withAlert()
        (Alerts)
    );