import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import BaseCard from "../../components/base/base.card";
import PolicyBeneficiaryCard from "../../components/policy/policy.beneficiary-card";
import { beneficiaryStore } from "../../store/beneficiaries.store";

const Policy: NextPage = () => {
  let [beneficiaries, setBeneficiaries] = useState(
    beneficiaryStore.getState().beneficiaries
  );
  beneficiaryStore.subscribe(() =>
    setBeneficiaries(beneficiaryStore.getState().beneficiaries)
  );
  const router = useRouter();

  function handleAddBeneficiary() {
    return router.push("/policy/beneficiary/add");
  }
  return (
    <>
      <BaseCard props={{ size: "h-screen-90", center: true }}>
        <div className="row centered no-wrap">
          <div className="col-6 dense">
            <img className={"w-full d-mobile-none"} src="/beneficiaries.png" alt="" />
          </div>
          <div className="col-6 dense align-center justify-center">
            {beneficiaries.length <= 0 && (
              <>
                <img className={"w-half"} src="/empty.png" alt="" />
                <div className="row">
                  <div className="col-12 text-align-center">
                    <h1 className={"m-6"}> Uh Oh!</h1>
                    <p className={"mx-6 text-grey"}>
                      Looks like you don&apos;t have any beneficiaries added to
                      your policy
                    </p>
                    <button
                      className={
                        "bg-blue p-4 text-white rounded-sm w-half mx-auto mt-6"
                      }
                      onClick={() => handleAddBeneficiary()}
                    >
                      Add Beneficiary
                    </button>
                  </div>
                </div>
              </>
            )}
            {beneficiaries.length > 0 && (
              <>
                <div className="row no-gutters no-padding w-full">
                  <div className="col-12">
                    <h1>Your beneficiaries</h1>
                  </div>
                  {beneficiaries.map(function (
                    beneficiary: any,
                    index: string
                  ) {
                    return (
                      <div key={index} className="col-6">
                        <PolicyBeneficiaryCard
                          firstName={beneficiary.firstName}
                          lastName={beneficiary.lastName}
                          emailAddress={beneficiary.email}
                          relationship={beneficiary.relationship}
                          id={beneficiary.id}
                        />
                      </div>
                    );
                  })}
                  <div className="col-12">
                    <button
                      className={
                        "bg-blue p-4 text-white rounded-sm w-half mx-auto mt-6"
                      }
                      onClick={() => handleAddBeneficiary()}
                      disabled={beneficiaries.length >= 5}
                    >
                      Add Beneficiary
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </BaseCard>
    </>
  );
};

export default Policy;
