// eslint-disable-next-line no-unused-vars
import serverContext from "./server";
function ServerProvider({ children }) {
  const serverURL = "http://localhost:3000";
  const value = {
    serverURL,
  };
  return (
    <serverContext.Provider value={value}>{children}</serverContext.Provider>
  );
}
export default ServerProvider;