import React from "react";

import elevators from "../assets/cartoon-lift-doors-empty-elevators-office-hallway-with-closed-slightly-ajar-open-doorways-lobby-interior-with-passenger-cargo-cabins-button-panel-floor-indicator-illustration_107791-3574.webp";


function Header() {
  return (
    <div>
      <img src={elevators} alt="Elevators" id="main-header" />
    </div>
  );
}

export default Header;
