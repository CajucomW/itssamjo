import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.message.title) 
            // the code below system error message
            // use 'join' to turn array into string
                alert.error(
                    `Title: ${error.message.title.join()}`
                );
                
            // the code below will show errors for
            // 'Incorrect Credentials' during login
            if (error.message.non_field_errors)
                alert.error(
                    error.message.non_field_errors.join()
                );
        }
        // CRUD Alerts/pop-ups
        if (message !== prevProps.message) {
            // 'blogAdded' is from blogaction.js
            if (message.blogAdded) 
            alert.success(message.blogAdded);
            if (message.blogDeleted) 
            alert.success(message.blogDeleted);
        }
    }

    render() {
        console.log('===Alerts===');
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(
    mapStateToProps
    )(
        withAlert()
        (Alerts)
    );