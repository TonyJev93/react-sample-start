import React, { Component } from 'react';

class PhoneInfo extends Component {
    render() {
        const {userName, phone, id} = this.props.info;

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }
        return (
            <div style={style}>
                <div><b>{userName}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;