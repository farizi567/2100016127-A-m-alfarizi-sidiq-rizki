// epochDateToUTC.test.js (file yang berisi Test Suite untuk EpochDateToUTC)
const EpochDateToUTC = require('./EpochDateToUTC');

test('EpochDateToUTC should convert epoch time to UTC format', () => {
    const epochTime = 1635630728000; // Contoh waktu epoch
    const utcTime = EpochDateToUTC(epochTime);
    expect(utcTime).toBe('2021-10-30T21:52:08.000Z'); // Update expected result
  });
  
  test('EpochDateToUTC should handle negative epoch time', () => {
    const negativeEpoch = -1635630728000; // Contoh waktu epoch negatif
    const utcTime = EpochDateToUTC(negativeEpoch);
    expect(utcTime).toBe('1918-03-04T02:07:52.000Z'); // Update expected result
  });
  
  // Test case yang lain tetap tidak mengalami kegagalan
  

test('EpochDateToUTC should handle epoch time 0', () => {
  const epochZero = 0; // Waktu epoch 0
  const utcTime = EpochDateToUTC(epochZero);
  expect(utcTime).toBe('1970-01-01T00:00:00.000Z');
});

test('EpochDateToUTC should return "Invalid Date" for invalid epoch time', () => {
  const invalidEpoch = 'notAnEpoch'; // Contoh waktu epoch tidak valid
  const utcTime = EpochDateToUTC(invalidEpoch);
  expect(utcTime).toBe('Invalid Date');
});
