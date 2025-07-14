import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
import Links, { styles } from "../links/links";

const Me = () => {
  return (
    <>
      <div className="text-5xl pt-10 pb-2 font-light">Michael Mumme</div>
      <p className="text-xl pl-1">
        Junior Software Engineer <br /> Bachelor's in Computer Science
      </p>
      <a
        href="https://www.google.com/maps/place/Mankato,+MN/@44.1561582,-94.041158,12z/data=!4m6!3m5!1s0x87f430a6041e8569:0x7133c5f5ac64ed0!8m2!3d44.1661456!4d-94.0055647!16zL20vMDEzZmJs?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
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
