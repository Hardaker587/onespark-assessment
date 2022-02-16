import BaseCard from "../base/base.card";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { beneficiaryStore, remove } from "../../store/beneficiaries.store";

interface PolicyBeneficiaryCardInterface {
  id?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  relationship?: string;
}

export default function PolicyBeneficiaryCard(
  props: PolicyBeneficiaryCardInterface
) {
  const router = useRouter();

  function returnImage() {
    return `/avatars/avatar-${props?.relationship}.svg`;
  }

  function handleEdit() {
    router.push(`/policy/beneficiary/edit/?beneficiaryId=${props.id}`);
  }

  function handleDelete() {
    beneficiaryStore.dispatch(remove({ beneficiaryId: String(props.id) }));
  }

  return (
    <>
      <BaseCard props={{ shadow: true, center: true, color: "bg-sky" }}>
        <div className="row justify-center align-center dense relative">
          <div className="col-3">
            <img src={returnImage()} alt={props?.relationship} width={50} />
            <div className="flex justify-center">
              <PencilIcon className={"w-6 h-6"} onClick={() => handleEdit()} />
              <TrashIcon
                className={"w-6 h-6 text-red"}
                onClick={() => handleDelete()}
              />
            </div>
          </div>
          <div className="col-9">
            <h2>
              {props?.firstName} {props?.lastName}
            </h2>
            <p className={"text-grey"}>{props?.relationship}</p>
            <p className={"text-darkgrey"}>{props?.emailAddress}</p>
          </div>
        </div>
      </BaseCard>
    </>
  );
}
