import {
  MdComputer,
  MdInfo,
  MdHelpOutline,
  MdMap,
  MdCode,
  MdLink,
  MdWeb,
  MdMail,
  MdJavascript,
} from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaAngular,
  FaDatabase,
  FaStoreAlt
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiCplusplus,
  SiGraphql,
  SiMysql,
  SiMarketo
} from "react-icons/si";
import { BsBuildingFillGear } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";

// All icons are now from react-icons and sized uniformly
const ICON_SIZE = 32;

const Icons = {
  email: <MdMail size={ICON_SIZE} />,
  facebook: <FaFacebook size={ICON_SIZE} />,
  twitter: <FaTwitter size={ICON_SIZE} />,
  github: <FaGithub size={ICON_SIZE} />,
  linkedin: <FaLinkedin size={ICON_SIZE} />,
  projects: <MdComputer size={ICON_SIZE} />,
  about: <MdInfo size={ICON_SIZE} />,
  cpp: <SiCplusplus title="C++" size={ICON_SIZE} />,
  java: <FaJava title="Java" size={ICON_SIZE} />,
  typescript: <SiTypescript title="TypeScript" size={ICON_SIZE} />,
  javascript: <MdJavascript title="JavaScript" size={ICON_SIZE} />,
  mysql: <SiMysql title="MySQL" size={ICON_SIZE} />,
  php: <FaPhp title="PHP" size={ICON_SIZE} />,
  mongodb: <SiMongodb title="MongoDB" size={ICON_SIZE} />,
  nodejs: <FaNodeJs title="Node.js" size={ICON_SIZE} />,
  react: <FaReact title="React" size={ICON_SIZE} />,
  angular: <FaAngular title="Angular" size={ICON_SIZE} />,
  graphql: <SiGraphql title="GraphQL" size={ICON_SIZE} />,
  helpoutline: <MdHelpOutline size={ICON_SIZE} />,
  map: <MdMap size={ICON_SIZE} />,
  code: <MdCode size={ICON_SIZE} />,
  link: <MdLink size={ICON_SIZE} />,
  web: <MdWeb size={ICON_SIZE} />,
  market: <SiMarketo title="Marketo" size={ICON_SIZE} />,
  gearblock: <BsBuildingFillGear size={ICON_SIZE} />,
  store: <FaStoreAlt size={ICON_SIZE} />,
  weather: <TiWeatherPartlySunny size={ICON_SIZE} />,
};

export { Icons };
