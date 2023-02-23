import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../CustomHook/useNotification";
import { loginUserAction } from "../../Redux/actions/authAction";

const LoginPageHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const validation = () => {
    if (email === "") {
      notify("من فضلك أدخل البريد الإلكتروني", "warn");
      return;
    }
    if (password === "") {
      notify("من فضلك أدخل كلمة المرور", "warn");
      return;
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
    await dispatch(
      loginUserAction({
        email,
        password,
      })
    );
    setLoading(false);
    setIsPress(true);
  };
  const { loginUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (loginUser) {
        if (loginUser.data.token) {
          setEmail("");
          setPassword("");
          localStorage.setItem("token", loginUser.data.token);
          localStorage.setItem("userData", JSON.stringify(loginUser.data.data));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("userData");
        }
        if (loginUser.data.errors) {
          if (loginUser.data.errors[0].msg === "Invalid email formate") {
            notify("من فضلك تأكد من صحة البريد الإلكتروني المدخل", "error");
          }
        }
        if (loginUser.data.message === "Incorrect email or password") {
          notify("هناك خطأ في البريد الإلكتروني أو كلمة المرور", "error");
        }
      }
    }
  }, [loading]);
  return [
    email,
    password,
    loading,
    isPress,
    onEmailChange,
    onPasswordChange,
    handleSubmit,
  ];
};

export default LoginPageHook;
