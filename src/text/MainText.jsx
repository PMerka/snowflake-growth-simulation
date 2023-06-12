import React from "react";

function MainText() {
  return (
    <>
      <p>
        This program is a simulation of snow crystal growth. In nature, the
        shapes of snowflakes are highly dependent on temperature and humidity.
        The hexagonal symmetry of the snowflake is caused by the hexagonal
        crystal lattice of ice. Snowflakes grow by diffusion of water vapor to
        the crystallization nucleus. The simulation represents this process by
        division of the space into small hexagonal cells. Every cell has some
        numerical value representing water concentration. A cell with a value
        higher than one represents an ice cell. In this simulation, parameters
        alpha, beta, and gamma represent the environment.
      </p>

      <ul>
        <li>
          The <i>β</i>  parameter is the initial background value, analogous to the
          humidity. The iregularity of the snowflake can be reached by the
          addition of a small random constant <i>β</i><sub>random</sub>. 
        </li>

        <li>The <i>γ</i> parameter is constant added to the ice cells. It represents diffusion from outside of the plane.</li>

        <li>The parameter <i>α</i> is related to the speed of diffusion.</li>
      </ul>

      <p>
        The program is based on scientific paper "A local cellular model for snow
        crystal growth" by Clifford A. Reiter (see <a href="https://www.sciencedirect.com/science/article/abs/pii/S0960077904003741">original paper</a> for more details).
        
      </p>
    </>
  );
}

export default MainText;
