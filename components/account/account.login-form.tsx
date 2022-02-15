import { FormEvent, useState } from "react";
import BaseCard from "../base/base.card";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function updateEmail(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setEmail(eventValue.value);
  }
  function updatePassword(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setPassword(eventValue.value);
  }

  return (
    <>
      <BaseCard>
        <div>
          <div className="form-group column dense">
            <label htmlFor="email">Email Address:</label>
            <input
              type="text"
              name={"email"}
              onInput={(event) => updateEmail(event)}
            />
          </div>
          <div className="form-group column dense">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name={"password"}
              onInput={(event) => updatePassword(event)}
            />
          </div>
        </div>
      </BaseCard>
    </>
  );
}
