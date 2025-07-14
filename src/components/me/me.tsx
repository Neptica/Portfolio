import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
import Links, { styles } from "../links/links";

const Me = () => {
  return (
    <>
      <div className="text-5xl pt-20 pb-3 font-light">Michael Mumme</div>
      <p className="text-xl pl-1">
        Junior Software Engineer <br /> Bachelor's in Computer Science
      </p>
      <a
        href="https://www.google.com/maps/place/Mankato,+MN/"
        target="_blank"
        className={`flex row-auto align-middle pt-2 ${styles}`}
      >
        <Icon path={mdiMapMarker} size={1} />
        <p className="text-lg">Mankato, Minnesota</p>
      </a>
      <div className="pt-2">
        <Links />
      </div>
    </>
  );
};

export default Me;
