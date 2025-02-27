import Image from "next/image";
import { logoImage } from "../../shared/data";
const Logo = () => (
  <div className="relative m-auto max-w-5xl">
    <Image
      src={logoImage.src}
      alt={logoImage.alt}
      className="mx-auto h-auto w-full rounded-md"
      placeholder="blur"
      loading="eager"
      priority={true}
      sizes="(max-width: 64rem) 100w, 100v"
    />
  </div>
);

export default Logo;
