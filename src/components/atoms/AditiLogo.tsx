import Image from "next/image";
import {Aditilogo} from "../../shared/data";
const AditiLogo = () => (
  <div className="relative m-auto max-w-5xl ">
    <Image
      src={Aditilogo.src}
      alt={Aditilogo.alt}
      className="mx-auto h-auto w-60 rounded-md"
      placeholder="blur"
      loading="eager"
      priority={true}
      sizes="(max-width: 64rem) 100w, 100v"
    />
  </div>
);

export default  AditiLogo;
