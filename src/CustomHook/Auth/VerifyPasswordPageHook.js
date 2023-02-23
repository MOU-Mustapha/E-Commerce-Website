import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../CustomHook/useNotification";
import { useNavigate } from "react-router";
import { verifyPasswordAction } from "../../Redux/actions/authAction";

const VerifyPasswordPageHook = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const onCodeChange = (e) => {
    setCode(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code === "") {
      notify("من فضلك إدخل الكود", "warn");
      return;
    }
    await dispatch(
      verifyPasswordAction({
        resetCode: code,
      })
    );
    setLoading(false);
    setIsPress(true);
  };
  const { verifyPassword } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (verifyPassword) {
        if (verifyPassword.data.status === "Success") {
          notify("كود التفعيل صحيح", "success");
          setTimeout(() => navigate("/user/reset-password"), 1500);
        }
        if (verifyPassword.data.status === "fail") {
          notify("هذا الكود خاطئ أو انتهت فتره الصلاحية", "error");
        }
      }
    }
  }, [loading]);
  return [code, loading, isPress, onCodeChange, handleSubmit];
};

export default VerifyPasswordPageHook;
