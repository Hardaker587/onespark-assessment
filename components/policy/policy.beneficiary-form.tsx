import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { beneficiaryStore, add, update } from "../../store/beneficiaries.store";
import { uuid } from "../../utilities/uuid";

interface PolicyBeneficiaryFormInterface {
  edit?: boolean;
}

export default function PolicyBeneficiaryForm(
  props: PolicyBeneficiaryFormInterface
) {
  const router = useRouter();

  const [firstName, setFirstName] = useState(
    props.edit ? editBeneficiary().firstName : ""
  );
  const [lastName, setLastName] = useState(
    props.edit ? editBeneficiary().lastName : ""
  );
  const [email, setEmail] = useState(props.edit ? editBeneficiary().email : "");
  const [relationship, setRelationship] = useState(
    props.edit ? editBeneficiary().relationship : ""
  );

  const [error, setError] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);

  function updateFirstName(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setFirstName(eventValue.value);
  }
  function updateLastName(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setLastName(eventValue.value);
  }
  function updateEmail(event: FormEvent) {
    const store = beneficiaryStore.getState().beneficiaries;
    const eventValue = event.target as HTMLTextAreaElement;
    const emailUnique = store.some(
      (beneficiary: any) => beneficiary.email !== eventValue.value
    );
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (!emailUnique && store.length) {
      setDisableSubmit(true);
      setError("Please provide a unique email address");
    } else if (!emailRegex.test(eventValue.value) && store.length) {
      setDisableSubmit(true);
      setError("Please provide a valid email address");
    } else if (emailUnique && emailRegex.test(eventValue.value)) {
      setDisableSubmit(false);
      setError("");
    }
    setEmail(eventValue.value);
  }
  function updateRelationship(event: FormEvent) {
    const eventValue = event.target as HTMLTextAreaElement;
    setRelationship(eventValue.value);
  }

  function editBeneficiary() {
    const query = router.query.beneficiaryId;
    const beneficiary = beneficiaryStore
      .getState()
      .beneficiaries.find((recipient: any) => {
        return recipient.id === query;
      });
    return (
      beneficiary || {
        firstName: "",
        lastName: "",
        email: "",
        relationship: "",
        id: "",
      }
    );
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
    router.push("/policy/beneficiary/success");
  }
  function handleUpdate() {
    beneficiaryStore.dispatch(
      update({
        id: props.edit ? editBeneficiary().id : "",
        firstName,
        lastName,
        email,
        relationship,
      })
    );
    router.push("/policy");
  }

  function handleNavigate() {
    router.push("/policy");
  }

  function returnPageTitle() {
    return props.edit
      ? `Editing beneficiary: ${firstName}`
      : `Adding a beneficiary`;
  }

  function returnButtonTitle() {
    return props.edit ? `Save profile for ${firstName}` : `Submit Beneficiary`;
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
            {returnPageTitle()}
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
                value={firstName}
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
                value={lastName}
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
                value={email}
                onInput={(event) => updateEmail(event)}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group column dense">
              <label htmlFor="relationship">Relationship:</label>
              <select
                name={"relationship"}
                value={relationship}
                onChange={(event) => updateRelationship(event)}
              >
                <option value=""></option>
                <option value="daughter">Daughter</option>
                <option value="son">Son</option>
                <option value="husband">Husband</option>
                <option value="wife">Wife</option>
                <option value="partner">Partner</option>
                <option value="associate">Associate</option>
              </select>
            </div>
          </div>
        </div>
        {error && (
          <>
            <div className="form-group col-12 justify-center no-gutters my-0 mx-6 py-0 px-6">
              <p className="text-red no-gutters">{error}</p>
            </div>
          </>
        )}
        <div className="form-group row justify-flex-end my-0 mx-6 py-0 px-6">
          <button
            className={"bg-blue p-4 text-white rounded-sm"}
            type="submit"
            disabled={disableSubmit}
            onClick={() => (props.edit ? handleUpdate() : handleSubmit())}
          >
            {returnButtonTitle()}
          </button>
        </div>
      </div>
    </>
  );
}
