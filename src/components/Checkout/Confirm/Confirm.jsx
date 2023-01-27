import Link from "next/link";
import { useFormContext } from "react-hook-form";
import CompanionConfirm from "./CompanionConfirm";
import RepresentativeConfirm from "./RepresentativeConfirm";

const Confirm = (props) => {
  return (
    <div className="xl:px-60 xl:py-32 sm:px-12 sm:py-6">
      <RepresentativeConfirm />

      <CompanionConfirm people={1} name={"first"} />

      <CompanionConfirm people={2} name={"second"} />

      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <Link
          href="/card"
          className="mx-2 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          決済
        </Link>
        <Link
          href="/checkout"
          className="mx-2 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          戻る
        </Link>
      </div>
    </div>
  );
};

export default Confirm;
