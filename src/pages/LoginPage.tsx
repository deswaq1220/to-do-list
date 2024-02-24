import { useAuth } from "../contexts/auth.context";

function LoginPage() {
  const { login } = useAuth();
  return (
    <div>
      <p>너 누귀야 로그인해</p>
      <button onClick={login}>로그인해</button>
    </div>
  )
}

export default LoginPage