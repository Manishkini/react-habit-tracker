import React from 'react';

function Header() {
  return (
    <div className="w-full h-16 bg-[#371B58] text-white">
      <div className="flex flex-row h-16 px-10">
        <span className="self-center text-4xl uppercase">
          {`< React-Album >`}
        </span>
      </div>
    </div>
  );
}

export default Header;
