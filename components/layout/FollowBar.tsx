import useUsers from "../../hooks/useUsers";
import Avatar from "../Avatar";

const FollowBar: React.FC = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="hidden lg:block">
      <div className="bg-neutral-600 m-4 rounded-lg p-4">
        <h1 className="text-white text-xl font-semibold">Who to follow</h1>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar
                userId={user.id}
                placeHolderImage="/images/placeholder.png"
              />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;