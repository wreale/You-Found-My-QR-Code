import Heading from '../components/Heading'
import styles from './homepage.module.scss'
import NameAndMessage from '../components/NameAndMessage'
import Messages from '../components/Messages'
import Footer from '../components/Footer'

const Homepage = () => {
  return <div className={styles.homepage}>
      <div className={styles.titleCard}>
        <Heading level={1} className={styles.heading}>You found my QR code!</Heading>
        <Heading level={2} className={styles.heading}>leave me message below:</Heading>
      </div>
      <NameAndMessage />
      <Messages/>
      <Footer>Created by Will in 2023</Footer>
    </div>
}
export default Homepage
