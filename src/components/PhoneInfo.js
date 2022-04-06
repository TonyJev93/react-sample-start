import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
    state = {
        editing: false,
        userName: '',
        phone: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const {info, onUpdate } = this.props;
        
        // True -> False
            // onUpdate
        // False -> True
            // state 에 info 값들 넣어주기
        if(this.state.editing) {
            onUpdate(info.id, {
                userName: this.state.userName,
                phone: this.state.phone
            })
        } else {
            this.setState({
                userName: info.userName,
                phone: info.phone,
            })
        }
        
        this.setState({
            editing: !this.state.editing,
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {userName, phone, id} = this.props.info;
        const {editing} = this.state;
        
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }
        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div><input name="userName" onChange={this.handleChange} value={this.state.userName} /></div>
                            <div><input name="phone" onChange={this.handleChange} value={this.state.phone} /></div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{userName}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;