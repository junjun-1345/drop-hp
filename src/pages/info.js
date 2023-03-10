import Head from "next/head";

const info = () => {
  return (
    <div className="bg-black font-serif text-white md:pb-40 py-10 md:px-40 px-4 leading-loose">
      <Head>
        <title>特定商取引法に基づく表記</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-auto ">
        <div className="md:mx-40 mb-10 md:pt-10">
          <h1 className="text-center border-b mb-10 md:mt-20">氏名</h1>
          <p className="text-center">大野純平</p>
        </div>
        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">所在地</h1>
          <p className="text-center">大阪府八尾市東山本新町1−15−10</p>
        </div>
        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">電話番号</h1>
          <p className="text-center">
            080-4982-1345
            <br />
            072-922-1497
            <br />
            サポートの対応時間　10:00　〜　17:00
            <br />
          </p>
        </div>

        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">メールアドレス</h1>
          <p className="text-center">drop.snowboarding@gmail.com</p>
        </div>

        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">取締役</h1>
          <p className="text-center">大野純平</p>
        </div>

        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">追加手数料</h1>
          <p className="text-center">
            決済手数料　1注文に付き3.6%掛かる場合がございます
          </p>
        </div>

        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">交換および返品</h1>
          <p className="text-center">
            イベントから2週間前までのキャンセルは一部返金いたします。
          </p>
        </div>

        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">
            受け付け可能な決済手段
          </h1>
          <p className="text-center">クレジットカードまたは国内の銀行振込</p>
        </div>

        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">決済期間</h1>
          <p className="text-center">
            クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から
            3日以内にお振り込みいただく必要があります。
          </p>
        </div>

        <div className="md:mx-40 mb-10 mt-20">
          <h1 className="text-center border-b mb-10 mt-20">平均単価</h1>
          <p className="text-center">30,000円</p>
        </div>
      </div>
    </div>
  );
};

export default info;
