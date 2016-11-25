import React from "react";
import {Link} from "react-router";

import {VisibleToUser} from "../../accessors/accessors";

export const AuthedLink = VisibleToUser(({onClick, to ="#", label, activeClassName = "active"}) => {
  return (
        <Link onClick={onClick}
              activeClassName={activeClassName}
              to={to}>{`${label} | `}</Link>
          );
        });
