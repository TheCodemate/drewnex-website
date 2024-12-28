import Image from 'next/image';
import twitterIcon from '../../public/logo-tartak-drewnex.svg';

export const Logo = () => (
  <a href="/">
    <Image
      priority
      src={twitterIcon}
      width={80}
      height={80}
      alt="Logo firmy Drewnex"
    />
  </a>
);
