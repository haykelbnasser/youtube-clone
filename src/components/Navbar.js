import {Form , FormControl , Button } from 'react-bootstrap'
import Icons from './Icons'
import logo from '../logo.png'


export default function NavBar () {
    return(
        <div className="row">
            <div className="col-2">
                <img width="60px" height="50px" src={logo} />
            </div>
        <div className="col-6">
            <Form className="row">
                    <FormControl 
                        type="search"
                        className="col-10"
                        placeholder="Search"
                        aria-label="Search"
                        
                    />
                    <Button  className="col-2">
                        Search
                    </Button>
            </Form>
           
        </div>
        <div className="col-4">
                <div className="row">
                    <Icons props="plus"/>
                    <Icons props="search"/>
                    <Icons props='notifications'/>
                    <Icons props='creation'/>
                </div>
              
            </div>
        </div>
    );
} 