import React, {Fragment, useContext} from "react";
import { addClass } from "../../hoc/AddClass";
import { Header } from "../header/Header";
import { Route, Switch} from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Sidebar } from "../sidebar/Sidebar";
import './layout.scss';
import { Calc } from "../pages/calc/Calc";
import { Sample } from "../pages/sample/Sample";
import { Info } from "../pages/info/Info";
import { RateContext } from "../../context/RateContext";
const Layout = ()=>{
    const {state} = useContext(RateContext);
    return(
       <Fragment>
            <h1>RateApp</h1>
            <Header/>
            <div className="content">
                <div className="routes">
                    {
                        state.auth ? 
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/calc" render = {() => <Calc/>}/>
                        <Route path="/sample" render = {() => <Sample/>}/>
                        <Route path="/info" render = {() => <Info/>}/>
                    </Switch>
                    :
                    <Route path="/" component={Home}/>
                    }
                </div>
                <Sidebar/>
            </div>
       </Fragment>
    )
}
export default addClass(Layout, 'layout');