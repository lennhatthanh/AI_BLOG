import { useLocation } from "react-router-dom";

const useIsHistoryPage = () => {
  const location = useLocation(); // lấy thông tin URL hiện tại
  return location.pathname.includes("/history"); // kiểm tra URL có chứa "/history" không
};

export default useIsHistoryPage;