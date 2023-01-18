import Link from "next/link";

const link = () => {
  return (
    <div className="bg-black font-serif text-white">
      <div className="h-screen justify-center flex items-center">
        <Link className="bg-white m-3  text-black" href="/checkout">
          新規予約
        </Link>
        <Link className="bg-white m-3  text-black" href="/mypage">
          予約確認
        </Link>
      </div>
    </div>
  );
};

export default link;
