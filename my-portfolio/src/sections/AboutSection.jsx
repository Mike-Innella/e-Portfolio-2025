import { MdInfo, MdHelpOutline, MdCode, MdWeb } from "react-icons/md";
import Section from "../Section/Section";
import { ReactComponent as CppIcon } from "../../assets/icons/cplusplus-plain.svg";
import { ReactComponent as JavaIcon } from "../../assets/icons/java-plain-wordmark.svg";
import { ReactComponent as AngularIcon } from "../../assets/icons/angularjs-plain-wordmark.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/icons/javascript-plain.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongodb-plain-wordmark.svg";
import { ReactComponent as MySQLIcon } from "../../assets/icons/mysql-plain-wordmark.svg";
import { ReactComponent as NodejsIcon } from "../../assets/icons/nodejs-plain-wordmark.svg";
import { ReactComponent as PHPIcon } from "../../assets/icons/php-plain.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react-original-wordmark.svg";
import { ReactComponent as TypeScriptIcon } from "../../assets/icons/typescript-plain.svg";

export default function AboutSection() {
  return (
    <Section
      sectionHeader="about"
      headerIcon={<MdInfo size={28} />}
      extraClass="about-section section-reverse"
    >
      <h4 className="text-2xl flex items-center gap-2 mb-2">
        <MdHelpOutline /> who am i?
      </h4>
      <p className="mb-6">
        An easily excited and a highly passionate full stack developer trying to support the world of open source with his little efforts. :)
      </p>

      <h4 className="text-2xl flex items-center gap-2 mb-2">
        <MdCode /> programming
      </h4>
      <div className="flex items-center space-x-4 mb-6">
        <JavaIcon className="w-12 h-12" title="Java" />
        <CppIcon className="w-12 h-12" title="C++" />
        <TypeScriptIcon className="w-12 h-12" title="TypeScript" />
        <JavaScriptIcon className="w-12 h-12" title="JavaScript" />
      </div>

      <h4 className="text-2xl flex items-center gap-2 mb-2">
        <MdWeb /> web
      </h4>
      <div className="flex items-center space-x-4">
        <MySQLIcon className="w-12 h-12" title="MySQL" />
        <PHPIcon className="w-12 h-12" title="PHP" />
        <MongoDBIcon className="w-12 h-12" title="MongoDB" />
        <NodejsIcon className="w-12 h-12" title="Node.js" />
        <ReactIcon className="w-12 h-12" title="React" />
        <AngularIcon className="w-12 h-12" title="Angular" />
      </div>
    </Section>
  );
}
