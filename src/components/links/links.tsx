import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmailBox } from "@mdi/js";

export const styles = "text-gray-100 hover:text-orange-200";

const Links = () => {
  return (
    <div className="flex flex-row gap-2">
      <a
        href="https://www.linkedin.com/in/michael-mumme-853534239/"
        target="_blank"
        className={styles}
      >
        <Icon path={mdiLinkedin} size={1.5} />
      </a>
      <a href="https://github.com/Neptica" target="_blank" className={styles}>
        <Icon path={mdiGithub} size={1.5} />
      </a>
      <a href="mailto:michaelmumme@me.com" className={styles}>
        <Icon path={mdiEmailBox} size={1.5} />
      </a>
    </div>
  );
};

export default Links;
