import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex  bg-black font-serif p-5 ">
      <div className="flex-none  sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1">
        <Link href="/">
          <Image src="/logo02.png" alt="logo" width={70} height={70} />
        </Link>
      </div>
      {openMenu ? (
        <div className="md:hidden flex flex-row absolute z-10 top-0 right-0  min-h-fit min-w-full">
          <div className="basis-1/2"></div>
          <div className="basis-1/2 bg-gray-900 text-white">
            <ul className="text-center">
              <li className="p-2 ">
                <button onClick={menuFunction} className="font-bold">
                  close
                </button>
              </li>
              <li>
                <Link className="mx-5" href="/about">
                  開催概要
                </Link>
              </li>
              <li>
                <Link className="mx-5" href="/event">
                  イベント内容
                </Link>
              </li>
              <li>
                <Link className="mx-5" href="/guide">
                  来場のご案内
                </Link>
              </li>
<<<<<<< HEAD:src/components/Navbar.jsx
              {/* <li>
                <Link className=" " href="/select">
=======
              <li>
                <Link className="mx-5" href="/info">
                  特定商取引法
                </Link>
              </li>
              <li>
                <Link className=" " href="/reserve">
>>>>>>> main:src/components/navbar.js
                  予約ページ
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      ) : undefined}
      <div className="flex-initial text-white ">
        <div className="md:flex  hidden flex-initial text-left">
          <Link className="mx-5 flex items-center" href="/about">
            開催概要
          </Link>
          <Link className="mx-5 flex items-center" href="/event">
            イベント内容
          </Link>
          <Link className="mx-5 flex items-center" href="/guide">
            来場のご案内
          </Link>
<<<<<<< HEAD:src/components/Navbar.jsx
          {/* <Link
=======
          <Link className="mx-5 flex items-center" href="/info">
            特定商取引法
          </Link>
          <Link
>>>>>>> main:src/components/navbar.js
            className="p-1 border rounded text-white border-white "
            href="/select"
          >
            予約ページ
          </Link> */}
        </div>
      </div>
      <button
        onClick={menuFunction}
        className="flex-initial absolute top-4 right-4 md:hidden"
      >
        <Image src="/menu.png" alt="menu" width={35} height={35} />
      </button>
    </nav>
  );
};

export default navbar;
