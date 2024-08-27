import { useContext } from "react";
import { AuthContext } from "../../App";

export default function AuthedContentWrapper({ children }) {
  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return null;
  }

  return <>{children}</>;
}
