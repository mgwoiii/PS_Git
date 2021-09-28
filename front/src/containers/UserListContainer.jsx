import {connect } from 'react-redux';
import UserListComponent from '../component/user/UserListComponent';


const mapStateToProps = (state) => {
    const storeUsername = state.loginReucer.username
      return { storeUsername };
  };

  export default connect(mapStateToProps)(UserListComponent);