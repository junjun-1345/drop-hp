import { useFormContext } from "react-hook-form";

const CompanionConfirm = (props) => {
  const { getValues } = useFormContext();

  return (
    <div className="mt-10 sm:mt-5">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg p-2 font-medium leading-6 text-gray-900">
              同行者{props.people}
            </h3>
            {props.people === 2 && (
              <p className="mt-1 text-sm text-gray-600">
                トリプルプランの方のみ記入お願い致します。
              </p>
            )}
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <p className="block text-sm font-medium text-gray-700">姓</p>
                  <p className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    {getValues(`${props.name}CompanionFamilyName`)}
                  </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <p className="block text-sm font-medium text-gray-700">名</p>
                  <p className="mt-1 p-2 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    {getValues(`${props.name}CompanionFirstName`)}
                  </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <p className="block text-sm font-medium text-gray-700">
                    性別
                  </p>
                  <p className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    {getValues(`${props.name}CompanionSex`)}
                  </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <p className="block text-sm font-medium text-gray-700">
                    イベント
                  </p>
                  <p className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    {getValues(`${props.name}CompanionEvent`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanionConfirm;
