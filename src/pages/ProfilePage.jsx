import { useContext, useState } from "react";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateProfile({ nickname }, user.accessToken);
      if (data.success) {
        alert("프로필 수정에 성공했습니다.");
        setUser({ ...user, nickname, avatar: data.avartar });
        navigate("/");
      }
    } catch (error) {
      alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input value={nickname} onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
