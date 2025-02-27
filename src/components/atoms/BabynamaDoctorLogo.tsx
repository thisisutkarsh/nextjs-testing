import Image from "next/image";
import {BabynamaDoctorlogo} from "../../shared/data";
const BabynamaDoctorLogo = () => (
  <div className="relative m-auto max-w-5xl ">
    <Image
      src={BabynamaDoctorlogo.src}
      alt={BabynamaDoctorlogo.alt}
      className="mx-auto h-auto w-32 rounded-md"
      placeholder="blur"
      loading="eager"
      priority={true}
      sizes="(max-width: 64rem) 100w, 100v"
    />
  </div>
);

export default  BabynamaDoctorLogo;