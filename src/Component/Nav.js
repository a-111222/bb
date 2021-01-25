import React from 'react'
import Disc from './Disc';
import Home from './Home';
import Menue from './Menue';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Navstyle.css";
import Sandawitch from './Sandawitch';
import Manaesh from './Manaesh';
import Pizza from './Pizza';
import Shwrma from './Shwrma';
import Checken from './Checken';
import ArabianCorner from './ArabianCorner';
import Salat from './Salat';
import Meals from './Meals';
import Mshawy from './Mshawy';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';


export default function Nav() {
    return (
        <Router>
            <div>
<Container className="Links">
    
    <Row>      
<Col className="Col">  <NavLink to="/home" className="Active">الرئيسية</NavLink> </Col>
<Col className="Col">  <NavLink to="/menue">قائمة الطعام</NavLink>  </Col>
<Col className="Col">  <NavLink to="/disc">العروض</NavLink>  </Col>    
    </Row>

    
</Container>

        <Switch>
            <Route exact path="/home"><Home/></Route>
            <Route path="/menue"> <Menue/></Route>
            <Route path="/disc"><Disc/></Route>
            <Route path="/sandawitch"><Sandawitch/></Route>
            <Route path="/meals"><Meals/></Route>
            <Route path="/manaesh"><Manaesh/></Route>
            <Route path="/pizza"><Pizza/></Route>
            <Route path="/shwrma"><Shwrma/></Route>
            <Route path="/checken"><Checken/></Route>
            <Route path="/arabianCorner"><ArabianCorner/></Route>
            <Route path="/salat"><Salat/></Route>
            <Route path="/mshawy"><Mshawy/></Route>

            

        </Switch>
          </div>
          </Router> 

    );
}
