import { NextPage } from "next";
import BaseCard from "../../../components/base/base.card";
import { useRouter } from "next/router";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <BaseCard props={{ size: "h-screen-90", center: true }}>
        <div className="row no-wrap justify-center align-center">
          <div className="col-8 justify-center align-center">
            <img
              src="/success.webp"
              alt="Successful"
              className={"w-half mb-4"}
            />
            <h2 className="mb-4">Success!</h2>
            <p className={"text-grey text-align-center"}>
              You have successfully added a new beneficiary!
            </p>
            <button
              className={"bg-blue p-4 text-white rounded-sm mt-4"}
              type="submit"
              onClick={() => router.push("/policy")}
            >
              View your beneficiaries
            </button>
          </div>
        </div>
      </BaseCard>
    </>
  );
};

export default Success;
