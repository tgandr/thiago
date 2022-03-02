import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionCard">
        <p data-testid="mission-name">
          <strong>Nome: </strong>
          { name }
        </p>
        <p data-testid="mission-year">
          <strong>Ano: </strong>
          { year }
        </p>
        <p data-testid="mission-country">
          <strong>País: </strong>
          { country }
        </p>
        <p data-testid="mission-destination">
          <strong>Destino: </strong>
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
