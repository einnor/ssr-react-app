import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

class Index extends Component {

    static async getInitialProps() {
        return {};
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col margintopbottom">
                            <h2>Home</h2>
                            <h6 className="margintopbottom20">
                                Silicon Valley Code Camp is a community event where
                                developers learn from fellow developers.
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="jumbotron text-center">
                    <h7><b>Silicon Valley Code Camp 2018</b> is Hosted by PayPal in San Jose
                        at their Town Hall location. 2121 North First Street. <b>October 13-14 2018</b></h7>
                </div>
            </div>

        );
    }
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
