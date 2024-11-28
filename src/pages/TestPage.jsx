import { useState, useContext } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const TestPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  console.log("user: ", user);
  console.log("userid: ", user.id);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    try {
      const requestData = {
        userId: user.userId,
        nickname: user.nickname,
        mbti: mbtiResult,
        answers,
        date: new Date().toISOString(),
      };

      console.log("Request Data:", requestData);

      const response = await createTestResult(requestData);

      console.log("API Response:", response);

      if (response) {
        setResult(mbtiResult);
        console.log("테스트 결과 저장 완료:", response);
      } else {
        alert("테스트 결과 저장에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("테스트 결과 저장 중 오류 발생:", error);
      const errorMessage =
        error.response?.data?.message || "테스트 결과 저장에 실패했습니다.";
      alert(errorMessage);
    }
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
