// pages/settings.tsx

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Settings: React.FC = () => {
  const { data: session } = useSession();
  const [availability, setAvailability] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setAvailability(data.availability));
  }, [session]);

  return (
    <div>
      <h1>Settings</h1>
      <p>Availability: {availability}</p>
      {/* Add your settings form or other content here */}
    </div>
  );
};

export default Settings;
