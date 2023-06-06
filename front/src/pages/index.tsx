import React, { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import Home from './Home/Home';
import Test from './test';
import { NavLink } from 'react-router-dom';

interface RoutingProps {}
const Routing: FC<RoutingProps> = (props) => {
    const {} = props;
    return (
        <Routes>
            <Route path="/" element={<>{<Layout />}</>}>
                <Route index element={<>{<Home />}</>}></Route>
                <Route path="test" element={<>{<Test />}</>}></Route>
                <Route path="*" element={<>{<Home />}</>} />
            </Route>
        </Routes>
    );
};

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
    return (
        <>
            <h1>nav</h1>
            <NavLink to={'/'}>home</NavLink>
            <div>-----</div>
            <NavLink to={'/test'}>test</NavLink>
            <Outlet />
        </>
    );
};

export default Routing;
