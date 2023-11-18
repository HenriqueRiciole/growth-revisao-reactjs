import styles from './title.module.css'
/*
export default function Title(props) {
  return <h1 className={styles.title}>{props.children}</h1>
}
*/

//as props podem ser passadas de outra maneira

export default function Title(props) {
  return <h1 className={styles.title}>{props.text}</h1>
}
