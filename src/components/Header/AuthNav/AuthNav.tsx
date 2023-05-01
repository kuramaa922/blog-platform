import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import style from './AuthNav.module.scss';
import avatar from '../../../assets/avatar.png';
import { logOut } from '../../../store/slices/AuthSlice';
import { toast } from 'react-toastify';
import routePath from '../../../routes/routePath';

const AuthNav: FC = () => {
  const user = useAppSelector((state) => state.authReducer.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logOutBtn = () => {
    dispatch(logOut());
    toast.success('You are logged out');
    navigate('/');
  };

  const onImageError = (e: any) => {
    e.target.src = avatar;
  };

  const foto = user?.image ? user.image : avatar;

  return (
    <>
      <Link to={routePath.newArticle} className={style.active}>
        Create article
      </Link>

      <Link to={routePath.profile} className={style.profile}>
        {user?.username}
        <div className={style.image}>
          <img src={foto} alt='avatar' onError={onImageError} />
        </div>
      </Link>

      <button className={style.logOut} onClick={logOutBtn}>
        Log Out
      </button>
    </>
  );
};

export default AuthNav;
