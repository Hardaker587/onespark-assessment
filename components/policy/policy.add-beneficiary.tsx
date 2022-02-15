import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { beneficiaryStore, add } from "../../store/beneficiaries.store";
import { uuid } from "../../utilities/uuid";

export default function PolicyAddBeneficiary() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] = useState("");

  function updateFirstName(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setFirstName(eventValue.value);
  }
  function updateLastName(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setLastName(eventValue.value);
  }
  function updateEmail(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setEmail(eventValue.value);
  }
  function updateRelationship(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setRelationship(eventValue.value);
  }

  function handleSubmit() {
    beneficiaryStore.dispatch(
      add({
        id: uuid(),
        firstName,
        lastName,
        email,
        relationship,
      })
    );
  }

  function handleNavigate() {
    router.push("/policy");
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className={"m-6"}>
            <button
              className={"bg-blue p-4 text-white rounded-sm"}
              onClick={() => handleNavigate()}
            >
              Back
            </button>{" "}
            Adding a beneficiary
          </h1>
          <p className={"mx-6 text-grey"}>
            In order to add beneficiaries to your{" "}
            <strong>Life Insurance</strong> policy, we need a few basic details
            in order to get hold of them in the event of your untimely passing.
          </p>
        </div>
        <div className="row dense w-full">
          <div className="col-6">
            <div className="form-group column dense">
              <label htmlFor="first-name">First name:</label>
              <input
                type="text"
                name={"first-name"}
                onInput={(event) => updateFirstName(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group column dense">
              <label htmlFor="last-name">Last name:</label>
              <input
                type="text"
                name={"last-name"}
                onInput={(event) => updateLastName(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group column dense">
              <label htmlFor="email">Email address:</label>
              <input
                type="text"
                name={"email"}
                onInput={(event) => updateEmail(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group column dense">
              <label htmlFor="relationship">Relationship:</label>
              <select
                name={"relationship"}
                onChange={(event) => updateRelationship(event)}
              >
                <option value=""></option>
                <option value="child">Child</option>
                <option value="spouse">Spouse</option>
                <option value="partner">Partner</option>
                <option value="parent">Parent</option>
                <option value="associate">Associate</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group row justify-flex-end my-0 mx-6 py-0 px-6">
          <button
            className={"bg-blue p-4 text-white rounded-sm"}
            type="submit"
            onClick={() => handleSubmit()}
          >
            Submit Beneficiary
          </button>
        </div>
      </div>
    </>
  );
}
