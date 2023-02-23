import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../CustomHook/useNotification";
import { useNavigate } from "react-router";
import { resetPasswordAction } from "../../Redux/actions/authAction";

const ResetPasswordPageHook = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || confirmPassword === "") {
      notify("من فضلك إدخل كلمة المرور الجديدة", "warn");
      return;
    }
    if (password !== confirmPassword) {
      notify("من فضلك تأكد من مطابقة كلمة المرور", "warn");
      return;
    }
    await dispatch(
      resetPasswordAction({
        email: localStorage.getItem("user-email"),
        newPassword: password,
      })
    );
    setLoading(false);
    setIsPress(true);
  };
  const { resetPassword } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (resetPassword) {
        if (resetPassword.data.status === "Success") {
          notify("تم تغيير كلمة المرور بنجاح", "success");
          setTimeout(() => navigate("/login"), 1500);
        }
        if (resetPassword.data.status === "fail") {
          notify("من فضلك إطلب كود تفعيل جديد", "error");
        }
      }
    }
  }, [loading]);
  return [
    password,
    confirmPassword,
    loading,
    isPress,
    onPasswordChange,
    onConfirmPasswordChange,
    handleSubmit,
  ];
};

export default ResetPasswordPageHook;
