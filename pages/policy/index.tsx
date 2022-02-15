import { NextPage } from "next";
import { useRouter } from "next/router";
import BaseCard from "../../components/base/base.card";
import { beneficiaryStore } from "../../store/beneficiaries.store";

const Policy: NextPage = () => {
  const beneficiaries = beneficiaryStore.getState().beneficiaries;
  const router = useRouter();

  function handleAddBeneficiary() {
    return router.push("/policy/add-beneficiary");
  }
  return (
    <>
      <BaseCard>
        <div className="row centered no-wrap">
          <div className="col-6 dense">
            <img className={"w-full"} src="/beneficiaries.png" alt="" />
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
          </div>
        </div>
      </BaseCard>
    </>
  );
};

export default Policy;
