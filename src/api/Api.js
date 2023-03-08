export const accessToken = '7be1e8ace88af66748c4a41252a5ba33c01edef2';

// Example for City Feed - city/station feed:
export const exampleUrlOne = 'https://api.waqi.info/feed/bristol/?token=7be1e8ace88af66748c4a41252a5ba33c01edef2';

// Geolocalized Feed - geo-localized feed (ip based);
export const urlIp = 'https://api.waqi.info/feed/here/?token=7be1e8ace88af66748c4a41252a5ba33c01edef2';

export const zoneArray = [
    {AQI: '0-50', Level: 'Good', Implications: 'Air quality is considered satisfactory, and air pollution poses little or no risk', Statement: 'None', color: 'green'},
    {AQI: '51-100', Level: 'Moderate', Implications: 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.', Statement: 'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.', color: 'yellow'},
    {AQI: '101-150', Level: 'Unhealthy for Sensitive Groups	', Implications: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.', Statement: 'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.', color: 'orange'},
    {AQI: '151-200', Level: 'Unhealthy', Implications: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects', Statement: 'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion', color: 'red'},
    {AQI: '201-300', Level: 'Very Unhealthy', Implications: 'Health warnings of emergency conditions. The entire population is more likely to be affected.', Statement: 'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.', color: 'purple'},
    {AQI: '300+', Level: 'Hazardous', Implications: 'Health alert: everyone may experience more serious health effects', Statement: 'Everyone should avoid all outdoor exertion', color: 'maroon'}
]