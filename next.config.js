const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'skapesoves',
        mongodb_password: 'nevsehocose',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'bloggerio',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'skapesoves',
      mongodb_password: 'nevsehocose',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'bloggerio',
    },
  };
};
