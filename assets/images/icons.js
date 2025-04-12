import clearDay from '../images/icons/clear-day.svg'
import clearNight from '../images/icons/clear-night.svg';

import cloudy1Day from '../images/icons/cloudy-1-day.svg';
import cloudy1Night from '../images/icons/cloudy-1-night.svg';
import cloudy2Day from '../images/icons/cloudy-2-day.svg';
import cloudy2Night from '../images/icons/cloudy-2-night.svg';
import cloudy3Day from '../images/icons/cloudy-3-day.svg';
import cloudy3Night from '../images/icons/cloudy-3-night.svg';

import rainy1Day from '../images/icons/rainy-1-day.svg';
import rainy1Night from '../images/icons/rainy-1-night.svg';
import rainy2Day from '../images/icons/rainy-2-day.svg';
import rainy2Night from '../images/icons/rainy-2-night.svg';

import thunderstorms from '../images/icons/thunderstorms.svg';

import snowy1Day from '../images/icons/snowy-1-day.svg';
import snowy1Night from '../images/icons/snowy-1-night.svg';

import fogDay from '../images/icons/fog-day.svg';
import fogNight from '../images/icons/fog-night.svg';

const iconMap = {
    '01d': clearDay,
    '01n': clearNight,
    '02d': cloudy1Day,
    '02n': cloudy1Night,
    '03d': cloudy2Day,
    '03n': cloudy2Night,
    '04d': cloudy3Day,
    '04n': cloudy3Night,
    '09d': rainy1Day,
    '09n': rainy1Night,
    '10d': rainy2Day,
    '10n': rainy2Night,
    '11d': thunderstorms,
    '11n': thunderstorms,
    '13d': snowy1Day,
    '13n': snowy1Night,
    '50d': fogDay,   // or hazeDay if preferred
    '50n': fogNight, // or hazeNight
  };
  
  export default iconMap;
  