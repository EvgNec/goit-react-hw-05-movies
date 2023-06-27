import { Outlet } from 'react-router-dom'; // додаємо компонент для рендерингу дочірніх компонентів
import { StyledHeader, StyledNavLink } from './SharedLayout.styled'; // додаємо стилі

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default SharedLayout;
