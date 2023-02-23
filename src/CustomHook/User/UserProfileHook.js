import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserDataAction,
  updateUserPasswordAction,
} from "../../Redux/actions/userAction";
import notify from "../../CustomHook/useNotification";

const UserProfileHook = () => {
  let userData = "";
  if (JSON.parse(localStorage.getItem("userData"))) {
    userData = JSON.parse(localStorage.getItem("userData"));
  }
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState(userData.name);
  const [userEmail, setUserEmail] = useState(userData.email);
  const [userPhone, setUserPhone] = useState(userData.phone);
  const [loading, setLoading] = useState(true);
  const onNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const onPhoneChange = (e) => {
    setUserPhone(e.target.value);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const dispatch = useDispatch();
  const handleEditData = async () => {
    let data;
    if (userEmail === userData.email) {
      data = {
        name: userName,
        phone: userPhone,
      };
    } else {
      data = {
        name: userName,
        email: userEmail,
        phone: userPhone,
      };
    }
    await dispatch(updateUserDataAction(data));
    handleClose();
    setLoading(false);
  };
  const { updateUserData } = useSelector((state) => state.user);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
      if (updateUserData) {
        if (updateUserData.status && updateUserData.status === 200) {
          notify("تمت عملية التعديل بنجاح", "success");
          setTimeout(() => {
            localStorage.setItem(
              "userData",
              JSON.stringify(updateUserData.data.data.user)
            );
          }, 1500);
          setTimeout(() => window.location.reload(), 1500);
        } else if (
          updateUserData.status === 400 &&
          updateUserData.data.errors[0].msg === "E-mail already in use"
        ) {
          notify("هذا البريد الإلكتروني مستخدم من قبل", "error");
        } else {
          notify("هناك مشكلة في عملية التعديل", "error");
        }
      }
    }
  }, [loading]);

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loadingPassword, setLoadingPassword] = useState(true);
  const onCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onPasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const passwordValidation = () => {
    if (currentPassword === "") {
      notify("من فضلك إدخل كلمة المرور القديمة ", "warn");
      return;
    }
    if (password === "") {
      notify("من فضلك إدخل كلمة المرور الجديدة ", "warn");
      return;
    }
    if (passwordConfirm === "") {
      notify("من فضلك إدخل تأكيد كلمة المرور الجديدة ", "warn");
      return;
    }
    if (passwordConfirm !== password) {
      notify("من فضلك تأكد من مطابقة كلمة المرور الجديدة", "warn");
      return;
    }
  };
  const handleEditPassword = async (e) => {
    e.preventDefault();
    passwordValidation();
    await dispatch(
      updateUserPasswordAction({
        currentPassword,
        password,
        passwordConfirm,
      })
    );
    setLoadingPassword(false);
  };
  const { updateUserPassword } = useSelector((state) => state.user);
  useEffect(() => {
    if (!loadingPassword) {
      setLoadingPassword(true);
      if (updateUserPassword) {
        if (updateUserPassword.status && updateUserPassword.status === 200) {
          setCurrentPassword("");
          setPassword("");
          setPasswordConfirm("");
          localStorage.setItem("token", updateUserPassword.data.token);
          notify("تم تعديل كلمة المرور بنجاح", "success");
        }
      }
    }
  }, [loadingPassword]);
  return [
    userData,
    show,
    handleShow,
    handleClose,
    userName,
    userEmail,
    userPhone,
    onNameChange,
    onEmailChange,
    onPhoneChange,
    handleEditData,
    currentPassword,
    password,
    passwordConfirm,
    onCurrentPasswordChange,
    onPasswordChange,
    onPasswordConfirmChange,
    handleEditPassword,
  ];
};

export default UserProfileHook;
