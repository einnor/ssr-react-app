import React, { Component } from 'react';
import axios from "axios";

export default class Speaker extends Component {
    static async getInitialProps({query}) {
        var promise =
            axios.
            get(`http://localhost:4000/speakers/${query.speakerId}`).
            then(response => {
                return {
                    hasErrored: false,
                    speakerDataOne: response.data
                };
            }).catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;
    }

    render() {
        const { speakerDataOne } = this.props;
        return (
            <div className='container'>
                <div className="row">
                    <h2 className='margintopbottom20'>{speakerDataOne.firstName} {speakerDataOne.lastName}</h2>
                    <p className='margintopbottom20'>{speakerDataOne.bio}</p>
                </div>
            </div>
        );
    }
}
