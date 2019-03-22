import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, InputBase
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
});

const PrimarySearchAppBara = memo((props) => {
    const {
        classes, onChange, value, title
    } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        className={classes.title}
                        variant="h6"
                        color="inherit"
                        noWrap
                    >
                        {title}
                        Example
                    </Typography>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search…"
                            value={value}
                            classes={{ root: classes.inputRoot, input: classes.inputInput }}
                            onChange={onChange}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}, (prevProps, nextProps) => {
    if (nextProps.value !== prevProps.value) {
        return false;
    }
    return true;
});

PrimarySearchAppBara.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

// class PrimarySearchAppBar extends React.Component {
//     shouldComponentUpdate(nextProps) {
//         const { value } = this.props;
//         if (nextProps.value !== value) {
//             return true;
//         }
//         return false;
//     }
//
//     render() {
//         const {
//             classes, onChange, value, title
//         } = this.props;
//
//         return (
//             <div className={classes.root}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <Typography
//                             className={classes.title}
//                             variant="h6"
//                             color="inherit"
//                             noWrap
//                         >
//                             {title}
//                             Example
//                         </Typography>
//                         <div className={classes.search}>
//                             <InputBase
//                                 placeholder="Search…"
//                                 value={value}
//                                 classes={{root: classes.inputRoot, input: classes.inputInput}}
//                                 onChange={onChange}
//                             />
//                         </div>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         );
//     }
// }
//
//
// PrimarySearchAppBar.defaultProps = {
//     title: ''
// };
//
// PrimarySearchAppBar.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     classes: PropTypes.shape({}).isRequired,
//     title: PropTypes.string
// };

export default withStyles(styles)(PrimarySearchAppBara);
