import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../CustomHook/useNotification";
import { useNavigate } from "react-router";
import { forgetPasswordAction } from "../../Redux/actions/authAction";

const ForgetPasswordPageHook = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      notify("من فضلك إدخل البريد الإلكتروني", "warn");
      return;
    }
    localStorage.setItem("user-email", email);
    await dispatch(
      forgetPasswordAction({
        email,
      })
    );
    setLoading(false);
    setIsPress(true);
  };
  const { forgetPassword } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (forgetPassword) {
        if (forgetPassword.data.status === "Success") {
          notify("تم إرسال الكود للبريد الإلكتروني بنجاح", "success");
          setTimeout(() => navigate("/user/verify-code"), 1500);
        }
        if (forgetPassword.data.status === "fail") {
          notify("هذا البريد الإلكتروني غير موجود", "error");
        }
      }
    }
  }, [loading]);
  return [email, loading, isPress, onEmailChange, handleSubmit];
};

export default ForgetPasswordPageHook;
