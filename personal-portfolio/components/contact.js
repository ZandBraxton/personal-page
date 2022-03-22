import styles from "../styles/Contact.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmitForm(data) {
    const res = await fetch("/api/contact-submit", {
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }
  return (
    <section id="contact" className={styles.contact_wrapper}>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className={styles.form}
        action=""
      >
        <div className={styles.title}>
          <h2>CONTACT</h2>
        </div>
        <div className={styles.half}>
          <div className={styles.item}>
            <label htmlFor={"name"}>NAME</label>
            <input
              type={"text"}
              {...register("name", { required: true })}
              id={"name"}
            />
            {errors.name?.type === "required" && "Name is required"}
          </div>
          <div className={styles.item}>
            <label htmlFor={"email"}>EMAIL</label>
            <input
              type={"text"}
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              })}
              id={"email"}
            />
            {errors.email?.type === "required" && "Email address is required"}
            {errors.email?.type === "pattern" &&
              "This is not a valid email address"}
          </div>
        </div>
        <div className={styles.full}>
          <label htmlFor={"message"}>MESSAGE</label>
          <textarea
            name={"message"}
            {...register("message", {
              required: true,
              minLength: 50,
              maxLength: 1000,
            })}
            id={"message"}
          ></textarea>
          {errors.message?.type === "required" && "Enter your message"}
          {errors.message?.type === "minLength" &&
            "Your message must be longer than 50 characters"}
          {errors.message?.type === "maxLength" &&
            "Your message exceeds the max amount of characters"}
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
    </section>
  );
}
