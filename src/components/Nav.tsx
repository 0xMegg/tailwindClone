import { Gift, Search, ShoppingBag, User } from "lucide-react";
import React from "react";

function CommonBox({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-3 py-2.5 border border-gray-300 rounded-3xl cursor-pointer ">
      {children}
    </button>
  );
}

function Nav() {
  return (
    <header className="w-full flex flex-col items-center">
      <nav className="w-full max-w-[1200px] h-16 flex p-4 justify-between items-center">
        <div className="flex gap-8">
          <div className="">
            <a className="font-bold">kakaopage</a>
          </div>
          <div className="flex gap-4">
            <a className="" href="">
              추천
            </a>
            <a className="" href="">
              웹툰
            </a>
            <a className="" href="">
              웹소설
            </a>
            <a className="" href="">
              책
            </a>
            <a className="" href="">
              바로가기
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex border border-gray-300 rounded-2xl ">
            <input
              type="text"
              placeholder="제목, 작가를 입력하세요"
              className=""
            />
            <button>
              <Search />
            </button>
          </div>
          <div className="">
            <button>
              <ShoppingBag size={24} />
            </button>
            <button>
              <Gift />
            </button>
            <button>
              <User />
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full max-w-[956px] flex items-center gap-4 mx-6">
        <CommonBox>지금핫한</CommonBox>
        <CommonBox>실시간 랭킹</CommonBox>
        <CommonBox>오늘신작</CommonBox>
        <CommonBox>이벤트</CommonBox>
        <CommonBox>남성인기</CommonBox>
        <CommonBox>완결추천</CommonBox>
        <CommonBox>완전판</CommonBox>
        <CommonBox>여성인기</CommonBox>
        <CommonBox>TV속 작품</CommonBox>
        <CommonBox>브랜드</CommonBox>
      </div>
    </header>
  );
}

export default Nav;
