import { Box, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Infoheader from "./components/Infoheader";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 110,
    width: '59%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    }
  }
}))

function App() {
  const classes = useStyles();

  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <Infoheader />
      </Box>
    </Box>
  );
}

export default App;
