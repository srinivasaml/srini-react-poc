import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col col-xl-10 col-lg-12">
                <h1 style={{'fontSize': '32px'}}>Hi {user.firstName}!</h1>
                
                <h3>All registered users:</h3>
  
                <div class="card-body table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        {users.items &&
                        <tbody>
                       
                        {users.items.map((user, index) =>
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td> 
                                <span> <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>           
                            </td>
                        </tr>
                        )}
                        
                        </tbody>
                        }
                    </table>
                </div>

                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };