import zhCN from './zh-CN.json';
import enUS from './en-US.json';
import de from './de.json';
import esAR from './es-AR.json';
import esUS from './es-US.json';
import he from './he.json';
import itIT from './it-IT.json';
import ro from './ro.json';
import ru from './ru.json';
import viVN from './vi-VN.json';
import zhTW from './zh-TW.json';

const locales = {
  "zh-CN": zhCN,
  "en-US": enUS,
  "de": de,
  "es-AR": esAR,
  "es-US": esUS,
  "he": he,
  "it-IT": itIT,
  "ro": ro,
  "ru": ru,
  "vi-VN": viVN,
  "zh-TW": zhTW,
} as const;

export default locales;