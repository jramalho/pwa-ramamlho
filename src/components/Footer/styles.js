import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FCFFE2',
        padding: '2%',
    },
    links:{
        color:'#1ABF35'
    },
}));

  export default useStyles;