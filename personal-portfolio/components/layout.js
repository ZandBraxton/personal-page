import styles from './layout.module.scss'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
  <div className={styles.layout}>
	  <nav className={styles.nav}>
		  <ul>
			  <li>
				  <Link href='/'>
					  <a>Home</a>
				  </Link>
			  </li>
			  <li>
				  <Link href='/'>
					  <a>About Me</a>
				  </Link>
			  </li>
			  <li>
				  <Link href='/'>
					  <a>Portfolio</a>
				  </Link>
			  </li>
			  <li>
				  <Link href='/'>
					  <a>Contact</a>
				  </Link>
			  </li>
			  
		  </ul>
	  </nav>
	  <div className={styles.container}>
        {children}
      </div>
  </div>    

  )
  
  
  
}