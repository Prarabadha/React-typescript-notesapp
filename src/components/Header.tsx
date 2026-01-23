import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="py-4 px-6 mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-white to-[#f0f0ff] bg-clip-text text-transparent transition-all duration-300">
          ✨ Sticky Notes
        </div>
        <div className="flex justify-end mt-2">
          <AccountCircleIcon className="text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
