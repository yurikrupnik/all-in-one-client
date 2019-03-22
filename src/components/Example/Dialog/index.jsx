import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { withStyles } from '@material-ui/core/styles';
import {
    Dialog, Slide, AppBar, Toolbar, IconButton, Typography, Grid
} from '@material-ui/core';

const styles = {
    appBar: {
        position: 'relative',
    },
    body: {
        padding: 20,
    },
    flex: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 'auto',
    },
};

const Transition = props => <Slide direction="up" {...props} />;

class ShowDetailsDialog extends PureComponent {
    render() {
        const {
            classes, isOpen, handleDialogClose, showInfo
        } = this.props;
        if (!isOpen) {
            return null;
        }
        const {
            name, image, officialSite: website, summary, _embedded
        } = showInfo;

        const target = '_black';

        return (
            <Dialog
                fullScreen
                open={isOpen}
                onClose={handleDialogClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={handleDialogClose} aria-label="Close">
                            X
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            {name}
                        </Typography>

                    </Toolbar>
                </AppBar>
                <div className={classes.body}>
                    <Grid container spacing={40}>
                        <Grid item xs={12}>
                            {website && <a href={website} target={target}>Go to website</a>}
                        </Grid>
                        <Grid item xs={6}>
                            {image
                            && <img className={classes.image} src={image.original} alt={name} />}
                        </Grid>
                        <Grid item xs={6}>
                            {renderHTML(summary || '')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={16}>
                                <Grid item xs={12}>
                                    Cast
                                </Grid>
                                {_embedded
                                    .cast
                                    .map(({
                                        person: {
                                            name: personName
                                        },
                                        character: {
                                            name: characterName, image: img
                                        }
                                    }) => (
                                        <Grid item xs key={personName}>
                                            <div>
                                                {personName}
                                                <hr />
                                                {characterName}
                                            </div>
                                            {img
                                            && img.medium
                                            && <img src={img.medium} alt={characterName} />}
                                        </Grid>
                                    ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Dialog>

        );
    }
}

ShowDetailsDialog.defaultProps = {
    showInfo: {}
};

ShowDetailsDialog.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleDialogClose: PropTypes.func.isRequired,
    showInfo: PropTypes.shape({})
};

export default withStyles(styles)(ShowDetailsDialog);
export { Transition };
