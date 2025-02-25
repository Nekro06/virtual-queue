import { Grid } from '@material-ui/core';
import shop from './images/shop.png';
import add from './images/add.png';


const BranchItem = ({prop, func}) => {

  const Continue = e => {
    e.preventDefault();
    func(prop.id, prop.uid);
  }

  if (prop) {
    return (
    <div className='listBranchContainer'>
    <Grid
      container
      spacing={2}
      onClick={ Continue }
    >
      <Grid item xs={9} sm={9}>
        <div className="formField">
          <p className="itemTitle">
            {prop.branch}
          </p>
          <p className="itemSub">
            {prop.address}, {prop.city}
            {prop.country}
          </p>
        </div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className="formCenterLabel">
          <img src={shop} />
          <br />
          <a className="formSub">
            {prop.city}
          </a>
        </div>
      </Grid>
    </Grid>
    </div>
    );
  } else {
    return (
      <div className="listBranchContainer" onClick={ Continue }>
        <div className="formCenterLabel">
          <img src={add} />
        </div>
      </div>
    );

  }

}

export default BranchItem;
