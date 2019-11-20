import React ,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
export default class UserInput extends Component {
    render() {
      return (
        <TextField
            {...this.props}
            contentEditable={this.props.check}
            id="outlined-basic"
            style={{
                marginLeft: 50,
                marginRight: 50,
                width: 300,
            }}
            //className={this.useStyles.textField}
            label={this.props.placeholder}
            margin="normal"
            variant="outlined"
            type={this.props.secureTextEntry}
            value={this.props.value}
            onChange={this.props.onTextChange}
          />
      );
    }
  }
  
  UserInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.string,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
    onTextChange: PropTypes.string,
    value: PropTypes.string,
    //check: PropTypes.check,
    error: PropTypes.string,
  };