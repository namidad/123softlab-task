import Button from '@material-ui/core/Button';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
import { deleteSkywalker, fetchSkywalkers } from 'features/skywalkers/actions';
import { getList } from 'features/skywalkers/selectors';
import { RootState } from 'features/redux/root-reducer';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import PropTypes from 'prop-types';






const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});


interface StateProps {
  list: string[];
}

interface DispatchProps {
  onDelete: (index) => void;
}


type Props = StateProps & DispatchProps;


class Skywalkers extends PureComponent<Props> {

  componentWillMount(){
    this.props.onFetch();
  }

  handleDelete = (name) => {
    console.log(name);
    this.props.onDelete(name);
  }


  render() {
    const { classes } = this.props;
    let family;
    if(this.props.list.length>0){
      family = this.props.list.map((el,index)=>{
        return <Grid key={index} item xs>
          <Paper className={classes.paper}>
            {el.name}
            <IconButton onClick={this.handleDelete.bind(this, el.name)} value={index} aria-label="Delete" className={classes.margin}>
              <DeleteIcon />
            </IconButton>
          </Paper>

        </Grid>
      })
    }
    return (
      <>

     <div className={classes.root}>
     <Grid container spacing={24}>
      {family}
     </Grid>
   </div>





      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  const list = getList(state);
  return {
    list,
  };
};


const mapDispatchToProps = {
  onDelete: deleteSkywalker,
  onFetch: fetchSkywalkers,
};


Skywalkers.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps,mapDispatchToProps) (withStyles(styles)(Skywalkers));
