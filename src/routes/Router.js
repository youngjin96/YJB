import { Routes, Route } from 'react-router-dom'
import Home from "../components/Home"
import Board from "../components/Board"
import Auth from "./Auth"
import Enroll from "../components/Enroll"
import MyPage from '../components/MyPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="board" element={<Board />} />
      <Route path="auth" element={<Auth />} />
      <Route path="enroll" element={<Enroll />} />
      <Route path="mypage" element={<MyPage />} />
    </Routes>
  );
};

export default Router