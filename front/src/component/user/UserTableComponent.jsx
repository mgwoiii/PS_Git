import { PureComponent } from "react";
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import ApiService from "../../ApiService";
import { withRouter } from "react-router";

class UserTableComponent extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
        users : [],
        message : null,
    }
    
}

  deleteUser = (userID) => {
    alert(userID + "번 삭제");
    ApiService.deleteUser(userID)
    .then((response) => {
      
        this.setState({
            message : 'User Delete Successfully.'
        });

        this.setState({
            users : this.state.users.filter( user => user.id =! userID)
        });
        


        this.reloadUserList();
    })
    .catch(err => {
        console.log('deleteUser() Error!', err);
    })
  }

  reloadUserList = () => {
   
    ApiService.fetchUsers()
    .then((response) => {
          this.setState({
            users: response.data,
          })
    })
    .catch(err => {
        console.log('reloadUserList() Error!', err);
    })
}

editUser = (ID) => {
  window.localStorage.setItem("userID", ID);
  this.props.history.push('/edit-user');
}




    render(){
      
          return(
        <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>FistName</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props && this.props.users && this.props.users.map( user => 
              <TableRow key={user.id}>
                <TableCell component="th" scope="user">{user.id}</TableCell>
                <TableCell align="right">{user.firstName}</TableCell>
                <TableCell align="right">{user.lastName}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.age}</TableCell>
                <TableCell align="right">{user.salary}</TableCell>
                <TableCell align="right" onClick={()=> this.editUser(user.id)}>
                  <CreateIcon />
                </TableCell>
                <TableCell align="right" onClick={()=> this.deleteUser(user.id)}>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

</div>

          )
    }
}

export default  (withRouter(UserTableComponent));
