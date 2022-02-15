import { NextPage } from "next";
import BaseCard from "../../components/base/base.card";
import PolicyAddBeneficiary from "../../components/policy/policy.add-beneficiary";

const AddBeneficiary: NextPage = () => {
  return (
    <>
      <BaseCard>
        <div className="row">
          <div className="col-6">
            <img className={"w-full"} src="/life-policy.png" alt="" />
          </div>
          <div className="col-6">
            <PolicyAddBeneficiary />
          </div>
        </div>
      </BaseCard>
    </>
  );
};

export default AddBeneficiary;
