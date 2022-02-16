import { NextPage } from "next";
import BaseCard from "../../../components/base/base.card";
import PolicyBeneficiaryForm from "../../../components/policy/policy.beneficiary-form";
import { useRouter } from "next/router";

const EditBeneficiary: NextPage = () => {
  const router = useRouter();
  console.log({ query: router.query });
  return (
    <>
      <BaseCard props={{ size: "h-screen-90", center: true }}>
        <div className="row">
          <div className="col-6">
            <img className={"w-full"} src="/life-policy.png" alt="" />
          </div>
          <div className="col-6">
            <PolicyBeneficiaryForm edit={true} />
          </div>
        </div>
      </BaseCard>
    </>
  );
};

export default EditBeneficiary;
