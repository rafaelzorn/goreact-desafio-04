import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

import { Container } from './styles';

const Error = ({ error: { type, message, visible }, hideError }) => visible && (
    <Container>
        <div className="box-error">
            <p>{message}</p>

            <button type="button" onClick={hideError}>
                    X
            </button>
        </div>
    </Container>
);

const mapStateToProps = state => ({
    error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Error);
