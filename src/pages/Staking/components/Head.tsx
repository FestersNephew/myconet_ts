import { FunctionComponent } from "react"
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core"
import { NodeConnected } from "."

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(7),
    },
  },
  mycoNetTypography: {
    fontFamily: "Bungee Inline",
    fontSize: "32px",
    // Add more custom styles as needed
  },
}))

const Head: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item xs={6}>
        <Box paddingX={2}>
          <Typography variant="h1" color="secondary" className={classes.mycoNetTypography}>
            MycoNet
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <NodeConnected />
      </Grid>
    </Grid>
  )
}

export default Head
