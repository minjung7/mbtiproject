import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultsPage = () => {
  const [testResults, setTestResults] = useState([]);
  const { user } = useContext(UserContext);

  // 테스트 결과 가져오기 함수
  const fetchTestResults = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/testResults`
    );
    const data = await res.json();
    setTestResults(data);
  };

  // 테스트 결과 삭제 함수
  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_BASE_URL}/testResults/${id}`, {
      method: "DELETE",
    });

    setTestResults((prevResults) =>
      prevResults.filter((result) => result.id !== id)
    );
  };

  useEffect(() => {
    fetchTestResults();
  }, []);

  return (
    <div>
      <div>
        <h1>테스트 결과 페이지</h1>
        <ul>
          {testResults.map((result) => (
            <li key={result.id}>
              <p>{result.nickname}</p>
              <p>MBTI: {result.mbti}</p>
              <p>{mbtiDescriptions[result.mbti]}</p>
              {result.userId === user.userId && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleDelete(result.id);
                  }}
                >
                  <button type="submit">삭제</button>
                </form>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestResultsPage;
