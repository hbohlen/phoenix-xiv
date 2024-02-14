import { useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1>Phoenix.xiv</h1>
      {session && (
        <img
          src={session.user?.image as string}
          alt="User"
          style={{ borderRadius: "50%", height: "40px" }}
        />
      )}
    </header>
  );
};

export default Header;
