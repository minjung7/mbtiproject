import AuthForm from "../components/AuthForm";
// import { login, getUserProfile } from "../api/auth";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const LoginPage = () => {
  // UserContext에서 사용자 정보 관리 메서드 가져오기
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const { id, password } = formData;
      const data = await login({ id, password }); // login API 호출
      if (data.success) {
        setUser(data);
        navigate("/"); // 로그인 성공 시 홈으로 이동
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} setUser={setUser} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
