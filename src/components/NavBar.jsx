/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = () => {
    return (
    <div class="w-[1272.20px] h-[84px] relative">
    <a id="BrandName" class="left-0 top-0 absolute text-green-700 text-opacity-95 text-[50.01px] font-normal font-['Rammetto One']" href="/">Carpool</a>

    <div id="SearchBar" class="w-[420.07px] h-[50.01px] left-[311.05px] top-[17px] absolute">
        <input class="w-[360.0px] h-[50.01px] absolute text-black text-[22px] font-normal font-['Puritan'] border-2 " type="text" placeholder="Search your loaction..."></input>
        <div class="w-[60px] h-[50.01px] left-[361.06px] top-[-0px] absolute bg-green-600" />
      
    </div>

    <div id="NavItems" class="w-[502.07px] h-[34px] left-[770.13px] top-[33.01px] absolute">
        <a class="left-0 top-0 absolute text-black text-xl font-normal font-['Rammetto One']" href="#">About</a>
        <a class="left-[445.07px] top-0 absolute text-black text-xl font-normal font-['Rammetto One']" href="#">Help</a>
        <a class="left-[321.05px] top-0 absolute text-black text-xl font-normal font-['Rammetto One']" href="#">Sign up</a>
        <a class="left-[218.04px] top-0 absolute text-black text-xl font-normal font-['Rammetto One']" href="#">Log in</a>
        <a class="left-[106.02px] top-0 absolute text-black text-xl font-normal font-['Rammetto One']" href="#">Search</a>
    </div>
    
</div>
);
};

export default NavBar;