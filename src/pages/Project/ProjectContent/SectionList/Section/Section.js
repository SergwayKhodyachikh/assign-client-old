import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Card } from '@material-ui/core';
import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent/SectionContent';

const useStyles = makeStyles(theme => ({
  section: {
    background: '#EBECF0',
    maxHeight: '96%',
    flexShrink: '0',
    margin: '1rem 0',
    '&:not(:last-child)': {
      marginRight: '1rem',
    },
  },
}));

const Section = ({ section }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={11}
      sm={4}
      md={3}
      lg={2}
      container
      wrap="nowrap"
      direction="column"
      component={Card}
      className={classes.section}
    >
      <SectionHeader section={section} />
      <SectionContent section={section} />
    </Grid>
  );
};

Section.propTypes = { section: PropTypes.object.isRequired };

export default Section;
