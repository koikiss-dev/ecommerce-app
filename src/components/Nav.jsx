import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
/*assets */
import menuOpen from "../img/icon-menu.svg";
import logo from "../img/logo.svg";
import Cart from "../img/icon-cart.svg";
import Profile from "../img/image-avatar.png";
import Close from "../img/icon-close.svg";
/*styled */

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: relative;
  @media (min-width: 1000px) {
    padding: 2rem 10rem;
  }
`;
const ContainerLogo = styled.div`
  display: inline-flex;
`;
const Hambur = styled.img`
  margin: 0 15px 0 0;
`;
const Logo = styled.img``;
const ContainerProfile = styled.div`
  display: flex;
`;
const CartItem = styled.img`
  margin: 0 20px 0 0;
`;
const User = styled.img`
  width: 4rem;
  &:hover{
    border: 2px solid var(--orange); border-radius: 100px; padding: 2px; transition: ease-in-out .2s;
  }
  /* ${(p) => p.click}, */
`;
//navItems
const ContainerLinksMobile = styled.div`
  position: absolute;
  background: var(--Light-grayish-blue);
  padding: 2rem;
  width: 50%;
  height: 100%;
  top: 0;
  z-index: 1000;
  display: ${(props) => (props.active ? "inline" : "none")};
  @media (min-width: 1000px) {
    display: none;
  }
`;
const IconClose = styled.img`
  margin: 0 0 30px 0;
`;
const NavContainerItem = styled.div`
  @media (min-width: 1000px) {
    margin: 0 0 0 1rem;
  }
`;

const NavContainerItemDesktop = styled.div`
  display: none;
  @media (min-width: 1000px) {
    margin: 0 0 0 1rem;
    display: inline;
  }
`;
const NavItem = styled.nav``;
const Ul = styled.ul`
  @media (min-width: 1000px) {
    display: flex;
  }
`;
const ItemLi = styled.li`
  margin: 0 0 2rem 0;
  font-weight: var(--f-700);
  font-size: 18px;
  @media (min-width: 1000px) {
    margin: 0 0 0 4rem;
  }
`;

const Nav = () => {
  const [activate, setActivate] = useState(false);
  const [clickedUser, setClickedUser] = useState(false);
  const { width } = useWindowDimensions();
  const OpenClose = () => {
    setActivate(!activate);
  };
  return (
    <>
      <NavContainer>
        <ContainerLogo>
          {width <= 1000 && <Hambur onClick={OpenClose} src={menuOpen} />}
          <NavLink to="/">
            <Logo src={logo} />
          </NavLink>
          <NavContainerItemDesktop>
            <NavItem>
              <Ul>
                <ItemLi>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                        borderBottom: isActive && "3px solid var(--orange)",
                        transition: isActive && "ease-in-out .2s",
                      };
                    }}
                    to="collection"
                  >
                    Collections
                  </NavLink>
                </ItemLi>
                <ItemLi>
                  {" "}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                        borderBottom: isActive && "3px solid var(--orange)",
                        transition: isActive && "ease-in-out .2s",
                      };
                    }}
                    to="men"
                  >
                    Men
                  </NavLink>{" "}
                </ItemLi>
                <ItemLi>
                  {" "}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                        borderBottom: isActive && "3px solid var(--orange)",
                        transition: isActive && "ease-in-out .2s",
                      };
                    }}
                    to="women"
                  >
                    Women
                  </NavLink>{" "}
                </ItemLi>
                <ItemLi>
                  {" "}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                        borderBottom: isActive && "3px solid var(--orange)",
                        transition: isActive && "ease-in-out .2s",
                      };
                    }}
                    to="about"
                  >
                    About
                  </NavLink>{" "}
                </ItemLi>
                <ItemLi>
                  {" "}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                        borderBottom: isActive && "3px solid var(--orange)",
                        transition: isActive && "ease-in-out .2s",
                      };
                    }}
                    to="contact"
                  >
                    Contact
                  </NavLink>{" "}
                </ItemLi>
              </Ul>
            </NavItem>
          </NavContainerItemDesktop>
        </ContainerLogo>
        <ContainerProfile>
          <CartItem src={Cart} />
          <NavLink to="user">
            <User
              onClick={(cl) => setClickedUser(!clickedUser)}
              src={Profile}
              /* click={
                clickedUser === true &&
                "border: 2px solid var(--orange); border-radius: 100px; padding: 2px; transition: ease-in-out .2s;"
              } */
            />
          </NavLink>
        </ContainerProfile>
      </NavContainer>
      {activate === true ? (
        <ContainerLinksMobile active>
          <IconClose onClick={OpenClose} src={Close} />
          <NavContainerItem>
            <NavItem>
              <Ul>
                <ItemLi>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                      };
                    }}
                    to="collection"
                  >
                    Collections
                  </NavLink>
                </ItemLi>
                <ItemLi>
                  {" "}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                      };
                    }}
                    to="men"
                  >
                    Men
                  </NavLink>{" "}
                </ItemLi>
                <ItemLi>
                  {" "}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                      };
                    }}
                    to="women"
                  >
                    Women
                  </NavLink>{" "}
                </ItemLi>
                <ItemLi>
                  {" "}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                      };
                    }}
                    to="about"
                  >
                    About
                  </NavLink>{" "}
                </ItemLi>
                <ItemLi>
                  {" "}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--Dark-grayish-blue)" : "",
                      };
                    }}
                    to="contact"
                  >
                    Contact
                  </NavLink>{" "}
                </ItemLi>
              </Ul>
            </NavItem>
          </NavContainerItem>
        </ContainerLinksMobile>
      ) : null}
    </>
  );
};

export default Nav;
