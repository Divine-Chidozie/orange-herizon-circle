import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NetworkListener() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkConnection = () => {
      if (!navigator.onLine && location.pathname !== "/offline") {
        navigate("/offline", { replace: true });
      }

      if (navigator.onLine && location.pathname === "/offline") {
        navigate("/", { replace: true });
      }
    };

    // Check immediately when the app loads
    checkConnection();

    window.addEventListener("online", checkConnection);
    window.addEventListener("offline", checkConnection);

    return () => {
      window.removeEventListener("online", checkConnection);
      window.removeEventListener("offline", checkConnection);
    };
  }, [navigate, location.pathname]);

  return null;
}
