import styles from "../styles/Contact.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <main id="contact" className={styles.contact_wrapper}>
      <form className={styles.form} action="">
        <div className={styles.title}>
          <h2>CONTACT</h2>
        </div>
        <div className={styles.half}>
          <div className={styles.item}>
            <label for={"name"}>NAME</label>
            <input type={"text"} id={"name"}></input>
          </div>
          <div className={styles.item}>
            <label for={"email"}>EMAIL</label>
            <input type={"text"} id={"email"}></input>
          </div>
        </div>
        <div className={styles.full}>
          <label for={"message"}>MESSAGE</label>
          <textarea name={""} id={"message"}></textarea>
        </div>
        <div className={styles.action}>
          <input type={"submit"} value={"SEND MESSAGE"}></input>
          <input type={"reset"} value={"RESET"}></input>
        </div>
        <div className={styles.icons}>
          <a href="https://github.com/ZandBraxton">
            <GitHubIcon fontSize={"large"}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/braxton-zand-a1b629232/">
            <LinkedInIcon fontSize={"large"}></LinkedInIcon>
          </a>
        </div>
      </form>

      {/* <section className={styles.contact}>
        <h2>CONTACT</h2>

        <ul>
          <li>
            <a href="mailto:Zand.Braxton@gmail.com">Zand.Braxton@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/ZandBraxton">
              Github
              <GitHubIcon></GitHubIcon>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/braxton-zand-a1b629232">
              Linkedin
              <LinkedInIcon></LinkedInIcon>
            </a>
          </li>
        </ul>
      </section> */}
    </main>
  );
}
