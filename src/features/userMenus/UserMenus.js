import { Cart } from '../../assets/icons';
import profileImage from '../../assets/images/image-avatar.png';

function UserMenus() {
  return (
    <div className="flex gap-12 items-center">
      <button>
        <Cart />
      </button>
      <button>
        <img src={profileImage} alt="Profile" width="50px" height="50px" />
      </button>
    </div>
  );
}

export default UserMenus;
