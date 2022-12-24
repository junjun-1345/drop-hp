import Image from "next/image";

const event = () => {
  return (
    <div className="bg-black font-serif text-sm md:text-base text-white">
      <div className="grid justify-items-center md:py-32 py-10">
        <div className="md:flex grid justify-items-center border-y md:border-none">
          <div className="w-1/2 m-5">
            <h1 className="text-3xl m-4 text-center">バンクドスラローム</h1>
            <p>
              バンクド用に造設されたコースを 滑りきったタイムを競うコンテンツ。
              <br />
              滑れる人なら誰でも参加可能。 <br />
            </p>
          </div>
          <div className="w-1/2 m-5">
            <Image src="/bank.jpg" width={600} height={600} alt="bank image" />
          </div>
        </div>
        <div className="md:flex grid justify-items-center border-y md:border-none">
          <div className="w-1/2 m-5">
            <Image
              src="/relay.jpg"
              width={800}
              height={800}
              alt="relay image"
            />
          </div>
          <div className="w-1/2 m-5">
            <h1 className="text-3xl m-4 text-center">
              10人1組チョッカリリレー
            </h1>
            <p>
              サークルを垣根を超えて10人1組のチームを作り、
              <br />
              リレー形式でチョッカリ対決を行う。
              <br />
              滑れることが出来れば誰でも参加可能。
            </p>
          </div>
        </div>

        <div className="md:flex grid justify-items-center border-y md:border-none">
          <div className="w-1/2 m-5">
            <h1 className="text-3xl m-4 text-center">パークセッション</h1>
            <p>
              Drop専用に作られた特設パークを使用。
              <br />
              サークルの垣根を超えたチーム【4人組 】対抗戦。
              <br />
              レベル別で分けられた特設パークの中で
              <br />
              ジャンプ・ジブ・グラトリのパフォーマンス総合点にて、審査。
            </p>
          </div>
          <div className="w-1/2 m-5">
            <Image src="/park.jpg" width={600} height={600} alt="park image" />
          </div>
        </div>
        <div className="md:flex grid justify-items-center border-y md:border-none">
          <div className="w-1/2 m-5">
            <Image
              src="/snowcharge.png"
              width={600}
              height={600}
              alt="snowcharge image"
            />
          </div>
          <div className="w-1/2 m-5">
            <h1 className="text-3xl m-4 text-center">スノーチャージ</h1>
            <p>
              RedBull snow chargeからインスパイアを受けたコンテンツ。
              <br />
              最長滑走距離 3800m のパルコール嬬恋を
              <br />
              ノンストップで駆け下りるアドレナリン溢れるコンテンツ。
              <br />
              Snowboard初心者の人から上級者の人まで全ての人が主役になれるチャンス。
            </p>
          </div>
        </div>

        <div className="md:flex grid justify-items-center border-y md:border-none">
          <div className="w-1/2 m-5">
            <h1 className="text-3xl m-4 text-center">アフターパーティー</h1>
            <p>
              イベント1日目の夜に開催。 <br />
              ホテル内を大きく貸し切って行われる大規模イベント
              <br />
              スノーボーダー同士の輪を広げるチャンス。
            </p>
          </div>
          <div className="w-1/2 m-5">
            <Image
              src="/party.jpg"
              width={600}
              height={600}
              alt="party image"
            />
          </div>
        </div>
        <div className="md:flex grid justify-items-center border-y md:border-none">
          <div className="w-1/2 m-5">
            <Image
              src="/touch.jpg"
              width={600}
              height={600}
              alt="touch image"
            />
          </div>
          <div className="w-1/2 m-5">
            <h1 className="text-3xl m-4 text-center">松明滑走 </h1>
            <p>
              このイベントの大きな思い出となるであろうイベント。
              <br />
              夜のコースを松明に見立てた明かりを持ち、みなで滑走する。
              <br />
              専属チームの撮影もあり、イベント後も楽しめるコンテンツ。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default event;
