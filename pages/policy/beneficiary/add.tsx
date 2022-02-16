import { NextPage } from "next";
import BaseCard from "../../../components/base/base.card";
import PolicyBeneficiaryForm from "../../../components/policy/policy.beneficiary-form";

const AddBeneficiary: NextPage = () => {
    return (
        <>
            <BaseCard props={{ size: "h-screen-90", center: true }}>
                <div className="row no-gutters no-padding">
                    <div className="col-6 dense">
                        <img className={"w-full d-mobile-none"} src="/life-policy.png" alt="" />
                    </div>
                    <div className="col-6 dense">
                        <PolicyBeneficiaryForm />
                    </div>
                </div>
            </BaseCard>
        </>
    );
};

export default AddBeneficiary;
