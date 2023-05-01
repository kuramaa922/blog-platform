import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import RequireAuth from '../hoc/RequireAuth';
import AuthUser from '../hoc/AuthUser';
import ArticleListPage from '../pages/ArticleListPage';
import ArticlePage from '../pages/ArticlePage';
import EditPostPage from '../pages/EditPostPage/EditPostPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import NewPostPage from '../pages/NewPostPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import routePath from './routePath';

export const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<ArticleListPage />} />
        <Route path={routePath.article} element={<ArticleListPage />} />
        <Route path={routePath.articleId} element={<ArticlePage />} />
        <Route
          path={routePath.signIn}
          element={
            <AuthUser>
              <LoginPage />
            </AuthUser>
          }
        />
        <Route
          path={routePath.signUp}
          element={
            <AuthUser>
              <RegisterPage />
            </AuthUser>
          }
        />
        <Route
          path={routePath.profile}
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path={routePath.newArticle}
          element={
            <RequireAuth>
              <NewPostPage />
            </RequireAuth>
          }
        />
        <Route
          path={routePath.edit}
          element={
            <RequireAuth>
              <EditPostPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};
