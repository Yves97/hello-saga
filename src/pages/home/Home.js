import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setUsers} from '../../store/actions/auth'
import {setPost} from '../../store/actions/post'

class Home extends Component {


    componentDidMount(){
        console.log('users=',this.props.auth.users)
    }


    // componentDidUpdate(){
    //     console.log('users=',this.props.auth.users)
    // }
    

    handleUser = (e) => {
        e.preventDefault();
        this.props.getUser()
    }

    handlePost = (e) => {
        e.preventDefault();
        this.props.getPost()
    }
    render() {
        return (
            <div>
                <button onClick={this.handleUser}>Get user</button>
                <button onClick={this.handlePost}>Get Post</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ auth : state.auth })
const mapDispatchToProps = dispatch => ({
    getUser : () => dispatch(setUsers()),
    getPost : () => dispatch(setPost())
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);