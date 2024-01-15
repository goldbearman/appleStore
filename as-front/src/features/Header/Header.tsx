import React, {useCallback, useState} from 'react';
import {
    BtnCart,
    BtnFavorites, BtnNotifications,
    BtnOrders,
    BtnSearch,
    Burger,
    LeftSide,
    Logo,
    RightSide,
    SearchWrapper,
    Wrapper
} from "./styled";
import {useSelector} from "react-redux";
import {selectIsLogged} from "../App/selectors";
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import {paths} from "../../routes/helpers";
import logoPng from 'img/logo.png'
import UserDropdownMenu from "./UserDropdownMenu";

const Header:React.FC = () => {

    const isLogged = useSelector(selectIsLogged)

    const [ searchInput, setSearchInput ] = useState<string>('')

    const changeSearchInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }, [])

 return (
     <Wrapper>
         <LeftSide>
             <Link to={paths.home}>
                 <Logo src={logoPng} />
             </Link>

             <Button>
                 <Burger>
                     <div /><div /><div />
                 </Burger>

                 <span>Каталог</span>
             </Button>
         </LeftSide>

         <SearchWrapper>
             {/*<Input*/}
             {/*    value={searchInput}*/}
             {/*    onChange={changeSearchInput}*/}
             {/*    isGhost*/}
             {/*    placeholder='Поиск товаров'*/}
             {/*/>*/}

             <BtnSearch/>
         </SearchWrapper>

         <RightSide>
             {isLogged ? <>
                 <BtnOrders count={5} />
                 <BtnFavorites count={5} />
                 <BtnNotifications count={5} />
                 <BtnCart count={5}/>
                 <UserDropdownMenu/>
                 {/*<UserD />*/}
             </> : (
                 <Link to={paths.login}>
                     &nbsp;&nbsp;&nbsp;
                     Войти
                 </Link>
             )}
         </RightSide>
     </Wrapper>
  )
 }

export default Header;