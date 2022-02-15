import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function updateEmail(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setEmail(eventValue.value);
  }
  function updatePassword(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setPassword(eventValue.value);
  }

  const defaults = {
    email: "user@domain.com",
    password: "P@$$w0rd",
  };

  function timeout(time: number, callback: any) {
    return setTimeout(callback, time);
  }

  function loginHandler() {
    if (defaults.email === "" && defaults.password === "") {
      setError("Please enter email and password");
      timeout(5000, () => setError(""));
      return
    }
    if (defaults.email !== email && defaults.password !== password) {
      setError("Incorrect email and password");
      timeout(5000, () => setError(""));
      return
    }
  }
  return (
    <>
      <div>
        <img
          className={"mx-6 mt-6"}
          src="/onespark.svg"
          alt="One Spark"
          width={200}
        />
        <h1 className={"m-6"}>Log in</h1>
        <p className={"mx-6 text-grey"}>
          Please log in to your account in order to access your profile
        </p>
        <div className="form-group column dense">
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            name={"email"}
            onInput={(event) => updateEmail(event)}
          />
          <p className="text-grey">user@domain.com</p>
        </div>
        <div className="form-group column dense">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name={"password"}
            onInput={(event) => updatePassword(event)}
          />
          <p className="text-grey">P@$$w0rd</p>
          {error && (
            <>
              <p className="text-red no-gutters">{error}</p>
            </>
          )}
        </div>
        <div className="form-group row justify-flex-end">
          <button
            className={"bg-blue p-4 text-white rounded-sm"}
            type="submit"
            onClick={() => loginHandler()}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
}
