import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Item = memo((props) => {
    const {
        id, onSelect, name, image, score
    } = props;
    return (
        <Grid
            item
            data-id={id}
            onClick={onSelect}
        >
            <div>{name}</div>
            <div>
                <img src={image.medium} alt={name} />
            </div>
            <div>
                score:
                {score}
            </div>
        </Grid>
    );
});

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({}).isRequired,
    score: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
};

const ShowsList = ({ data, onSelect }) => (
    <Grid container spacing={24}>
        {data.map(({ score, show }) => {
            const { image, id, name } = show;
            if (!image) {
                return false;
            }

            return (
                <Item
                    key={id}
                    id={id}
                    onSelect={onSelect}
                    score={score}
                    image={image}
                    name={name}
                />
            );
        })}
    </Grid>
);

ShowsList.propTypes = {
    onSelect: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number.isRequired,
        show: PropTypes.shape({}).isRequired,
    })).isRequired
};

export default memo(ShowsList);
