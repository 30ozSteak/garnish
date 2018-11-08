import React from "react";
import { NavLink } from "react-router-dom";

import "./Wrong.css";

const Wrong = () => {
  return (
    <div className="wrong-way-box">
      <h1> y̷̨̦̪̎̽̀͋ō̸̱̰̤͎̈́̎͘͝u̸͉͚̥͎̬͑̋ ̸̨̛̲͉͔͗̿̔͑s̶̹̻̎̒̈̔h̴̲̮̻̱͓͝o̵͙̰̥̬̒̈́̓ū̵̥͉͚͎͍͌l̴̗̗͉̱̄̌ḋ̴̛̫͉̪̦͋n̷̬͔͂͛'̶̢̞͎́̀͜t̵̪̘̀̔ ̵͖͙̿́͌͗b̸̧͎̿̀̌͊̾ę̵͙͍̏̍̑̕ ̵͚̝̥͍̆͛̕͜h̶͙̭͙͙͍̅̇̔̽͠e̴̠̾̂̓̿͘r̸̝̳̓e̴͎͐̅̓̈̄ </h1>
      <NavLink to="/main">
        <h1>Go Back</h1>
      </NavLink>
    </div>
  );
};

export default Wrong;
