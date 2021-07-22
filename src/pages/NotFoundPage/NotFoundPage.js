/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Không tìm thấy trang!</strong> 
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
