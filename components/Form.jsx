import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerSchema } from "schema/formSchema";
import AnimatedBG from "/components/AnimatedBG";

import axios from 'axios';


export default function Contact_us() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitForm = (data) => {
    
    axios.post('http://localhost:3000/', {
      firstName: data.firstName
    })
    .then((response) => {
      console.log(response)
      
  }) 
  .catch((err) => {
      console.log(err)
  })
    
    //dito mo ata ilalagay ung code para mapunta sa sql
    console.log(data);

    event.target.reset();
    alert("Form Submitted Successfully");
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header_box}>
          <h1>Registration form</h1>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className={styles.textbox}>
              <div className={styles.firstname}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  {...register("firstName")}
                ></input>
                <span> {errors.firstName && "First Name is required"} </span>
              </div>

              <div className={styles.lastname}>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  {...register("lastName")}
                ></input>
                <span> {errors.lastName && "Last Name is required"} </span>
              </div>

              <div className={styles.email}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                ></input>
                <span> {errors.email?.message} </span>
              </div>

              <div className={styles.mobile}>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile (+63)"
                  {...register("mobile")}
                ></input>
                <span> {errors.mobile?.message} </span>
              </div>
            </div>
            <div className={styles.address}>
              <input
                type="text"
                name="address"
                placeholder="Address"
                {...register("address")}
              ></input>
              <span> {errors.address?.message} </span>
            </div>
            <h3>Old student?</h3>
            <div className={styles.bolean}>
              <input
                type="radio"
                name="student"
                {...register("radio")}
                value="yes"
                required
              />
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                name="student"
                {...register("radio")}
                value="no"
                required
              />
              <label htmlFor="no">No</label>
            </div>
            <div className={styles.textarea}>
              <textarea
                type="text"
                rows="4"
                cols="70"
                placeholder="Why do you want to study here?"
                name="textArea"
                {...register("textArea")}
              ></textarea>
              <span>
                {errors.textArea && "Message must be atleast 15 characters"}
              </span>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <AnimatedBG />
    </div>
  );
}
