import { TopBar } from "../../components";

export const AppLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};
