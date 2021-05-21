import Image from 'next/image'
import styles from "./Header.module.css"

const Header = () => (
    <div className={styles.container}>
      <Image
        src="/logo/logo-isotipo-white.svg"
        width={51}
        height={51}
      />
      <div className={styles.rightOptions}>
        <button class="black">Contact</button>
        <Image
            src="/icons/icon-menu.svg"
            width={28}
            height={19}
        />
      </div>
    </div>
);

export default Header;