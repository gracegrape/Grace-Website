import "../css/Home.css";
import Zoom from "react-reveal/Zoom";
import { Grid } from "@mui/material";

const Introduction = () => {
  return (
    <div className="homeWrapper">
      <Zoom>
        <h1>Introduction</h1>
      </Zoom>
      <Zoom>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div>ha</div>
          </Grid>
          <Grid item xs={4}>
            <img src="/mypic.jpg" alt="a" className="picWrapper" />
          </Grid>
        </Grid>
      </Zoom>
      <Zoom>
        <div>a</div>
      </Zoom>
    </div>
  );
};

export default Introduction;
