import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../CustomHook/useNotification";
import { createNewUserAction } from "../../Redux/actions/authAction";
import { useNavigate } from "react-router";

const RegisterPageHook = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPassWordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const validation = () => {
    if (name === "") {
      notify("من فضلك أدخل أسم المستخدم", "warn");
      return;
    }
    if (email === "") {
      notify("من فضلك أدخل البريد الإلكتروني", "warn");
      return;
    }
    if (phoneNumber === "") {
      notify("من فضلك أدخل رقم الهاتف", "warn");
      return;
    }
    if (password === "" || confirmPassword === "") {
      notify("من فضلك أدخل كلمة السر", "warn");
      return;
    }
    if (password !== confirmPassword) {
      notify("من فضلك تأكد من تطابق كلمة السر", "warn");
      return;
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();
    await dispatch(
      createNewUserAction({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone: phoneNumber,
      })
    );
    setLoading(false);
    setIsPress(true);
  };
  const { createUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
      if (createUser) {
        if (createUser.data.token) {
          setName("");
          setEmail("");
          setPhoneNumber("");
          setPassword("");
          setConfirmPassword("");
          localStorage.setItem("token", createUser.data.token);
          notify("تم إنشاء الحساب بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
        if (createUser.data.errors) {
          if (createUser.data.errors[0].msg === "E-mail already in use") {
            notify("هذا الإيميل مسجل من قبل ", "error");
          } else if (
            createUser.data.errors[0].msg === "accept only egypt phone numbers"
          ) {
            notify("يجب أن يكون رقم الهاتف مصري مكون من 11 رقم فقط", "error");
          } else if (
            createUser.data.errors[0].msg === "must be at least 6 chars"
          ) {
            notify("يجب أن لا تقل كلمة المرور عن 6 حروف أو أرقام", "error");
          } else if (
            createUser.data.errors[0].msg === "Invalid email formate"
          ) {
            notify("من فضلك تأكد من صحة البريد الإلكتروني المدخل", "error");
          }
        }
      }
    }
  }, [loading]);
  return [
    name,
    email,
    phoneNumber,
    password,
    confirmPassword,
    loading,
    isPress,
    onNameChange,
    onEmailChange,
    onPhoneNumberChange,
    onPasswordChange,
    onConfirmPassWordChange,
    handleSubmit,
  ];
};

export default RegisterPageHook;
