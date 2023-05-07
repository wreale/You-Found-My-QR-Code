import styles from './heading.module.scss'

const Heading = ({
    level, 
    children,
}) => {
    const Tag = level > 6 ? 'h6' : `h${level}`;

    return <Tag className={styles.heading}>{children}</Tag>
}
export default Heading;