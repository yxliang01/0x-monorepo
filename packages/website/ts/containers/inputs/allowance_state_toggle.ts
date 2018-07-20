import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Blockchain } from 'ts/blockchain';
import { State } from 'ts/redux/reducer';
import { BalanceErrs, Token, TokenState } from 'ts/types';

import { AllowanceStateToggle as AllowanceStateToggleComponent } from 'ts/components/inputs/allowance_state_toggle';
import { Dispatcher } from 'ts/redux/dispatcher';

interface AllowanceStateToggleProps {}

interface ConnectedState {}

interface ConnectedDispatch {
    dispatcher: Dispatcher;
}

const mapStateToProps = (state: State, _ownProps: AllowanceStateToggleProps): ConnectedState => ({});

// const mapDispatchTopProps = (dispatch: Dispatch<State>): ConnectedDispatch => ({});

export const AllowanceStateToggle: React.ComponentClass<AllowanceStateToggleProps> = connect(
    mapStateToProps,
    // mapDispatchTopProps,
)(AllowanceStateToggleComponent);
