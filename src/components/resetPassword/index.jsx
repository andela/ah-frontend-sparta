import React from 'react';
import PropTypes from 'prop-types';
import '../../pages/PasswordReset/resetPassword.scss';

const ResetPassword = ({ email, onChange, handleClick }) => (
  <React.Fragment>
    <div
      className="modal fade"
      id="forgotPassword"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog custom-dialog" role="document">
        <div className="modal-content customise_model">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">
                Authors Haven
            </h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="password_reset">
              <div className="form-group">
                <label
                  id="hfjfh"
                  htmlFor="email"
                  className="col-form-label form_label"
                >
                  <h5>Forgotten Password?</h5>
                  <h6 className="paragraph-infor">Please enter your Email address. A link with instructions will be sent to you to reset your Password</h6>
                  <input
                    type="email"
                    className="form-control"
                    id="recipient-email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Enter your email"
                    required
                  />
                </label>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={handleClick}
                  className="btn btn-primary send-button"
                  data-dismiss="modal"
                >
                    Click to send link to email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);


ResetPassword.propTypes = {
  email: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ResetPassword;
