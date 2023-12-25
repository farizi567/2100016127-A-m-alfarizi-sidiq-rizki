// epochDateToUTC.js (file yang berisi fungsi EpochDateToUTC)
function EpochDateToUTC(epochTime) {
    const date = new Date(epochTime);
    if (isNaN(date)) return 'Invalid Date';
    return date.toISOString();
  }
  
  module.exports = EpochDateToUTC;
  