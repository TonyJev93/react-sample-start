import React, { Component } from 'react';

class PhoneForm extends Component {
    // input = null
    input = React.createRef(); // ref 사용법 2 - createRef 사용

    state = {
        userName: '',
        phone: '',
    }
    // e = event 객체
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({
            userName: '',
            phone: '',
        })
        this.input.current.focus(); // ref 사용법 2 - createRef 사용
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="userName"
                    placeholder="이름"
                    onChange={this.handleChange} 
                    value={this.state.userName} 
                    // ref={ref => this.input = ref} // ref 사용법 1 - 함수 사용
                    ref={this.input} // ref 사용법 2 - createRef 사용
                />
                <input 
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange} 
                    value={this.state.phone} 
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;