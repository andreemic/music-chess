import { useUser } from "hooks/useUser";
import { IoMdLogOut } from "react-icons/io";
import { logout } from "../services/spotify";

export const User = ({ ...rest }) => {
  const { user, setUser } = useUser();

  return (
    <div
      className="group absolute right-8 top-8 cursor-pointer"
      {...rest}
      onClick={() => {
        logout();
        setUser(null);
      }}
    >
      <div className=" transition-all rounded-full drop-shadow-lg hover:drop-shadow-md left-12 top-12">
        {user?.images?.length ? (
          <img className="w-8 h-8 rounded-full bg-gray-400" src={user.images[0].url} />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-400" />
        )}
      </div>

      <div className="absolute left-0 h-full w-full top-0 rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <IoMdLogOut className="fill-white absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 z-10 " />
      </div>
    </div>
  );
};
