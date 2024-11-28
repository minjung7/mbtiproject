import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>무료 성격 테스트</h1>
      <h3>NERIS Type Explorer</h3>
      <div>
        <p>
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
      </div>
      <div>
        <p>
          자신의 성격 유형이 삶의 여러 영역에 어떤 영향을 미치는지 알아보세요.
        </p>
      </div>
      <div>
        <p>자신의 성격 유형을 바탕으로 원하는 사람으로 성장하세요.</p>
      </div>
      <Link to="/test">내 성격 알아보러 가기</Link>
    </div>
  );
};

export default HomePage;

