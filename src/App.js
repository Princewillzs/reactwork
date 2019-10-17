import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		passwordConfirm: ''
		// clickedSignUp: false,
		// clickedSignIn: false
	};

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	componentDidMount() {
		// const { name, email, password, passwordConfirm } = this.state;
		axios
			.post('https://maintenancetrackerapp.herokuapp.com/api/v1/users/signUp', this.state)
			.then((res) => console.log(res))
			.catch((err) => {
				console.log(err);
			});

		axios
			.post('https://maintenancetrackerapp.herokuapp.com/api/v1/users/signin', this.state)
			.then((res) => console.log(res))
			.catch((err) => {
				console.log(err);
			});
	}

	clickedSignIn = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			clickedSignIn: !this.state.clickedSignIn
		});
	};

	clickedSignUp = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			clickedSignUp: !this.state.clickedSignUp
		});
	};

	render() {
		return (
			<div>
				<h1 className="topic">Maintenance Tracker</h1>
				<div className="message warning">
					<div className="inset agile">
						<div className="sap_tabs good-tabs">
							<div
								id="horizontalTab"
								style={{ display: 'block', width: '100%', height: '600px', margin: '0px;' }}
							>
								<ul className="resp-tabs-list">
									<li className="resp-tab-item" aria-controls="tab_item-0" role="tab">
										<span>Sign in</span>
									</li>
									<li className="resp-tab-item" aria-controls="tab_item-1" role="tab">
										<label>/</label>
										<span>Sign up</span>
									</li>
								</ul>
								<div className="clear"> </div>
								<div className="alert-close"> </div>
								<div className="resp-tabs-container">
									<div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
										<div className="login-agileits-top">
											<form onSubmit={this.clickedSignIn}>
												<p>Email </p>
												<input
													type="text"
													id="username"
													name="User Name"
													required=""
													onChange={this.changeHandler}
												/>
												<p>Password</p>
												<input
													type="password"
													id="password"
													name="Password"
													required=""
													onChange={this.changeHandler}
												/>
												<input
													type="checkbox"
													id="brand"
													value=""
													onChange={this.changeHandler}
												/>
												<label for="brand">
													<span /> Remember me ?
												</label>
												<input type="submit" id="submit" value="SIGN IN" />
											</form>
										</div>
										<div className="login-agileits-bottom">
											<h2>
												<a href="#">Forgot password?</a>
											</h2>
										</div>
									</div>
									<div className="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
										<div className="login-agileits-top sign-up">
											<form onSubmit={this.clickedSignUp} data-report-id="FormSignUp">
												<p>Name </p>
												<input
													type="text"
													id="su_name"
													name="User Name"
													required=""
													onChange={this.changeHandler}
												/>
												<p>Email </p>
												<input
													type="email"
													id="su_email"
													name="Email"
													required=""
													onChange={this.changeHandler}
												/>
												<p>Password</p>
												<input
													type="password"
													id="su_password"
													name="Password"
													placeholder=""
													required=""
													onChange={this.changeHandler}
												/>
												<p>Confirm Password</p>
												<input
													type="password"
													id="su_confirmpassword"
													name="Confirm Password"
													placeholder=""
													required=""
													onChange={this.changeHandler}
												/>
												<input
													type="checkbox"
													id="brand1"
													value=""
													onChange={this.changeHandler}
												/>
												<label for="brand1">
													<span />I accept the terms use
												</label>
												<input type="submit" id="su_submit" value="SIGN UP" />
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="right-section" />
						<div className="clear"> </div>
					</div>
				</div>

				<div className="clear"> </div>
				<div className="copy-right w3l-agile">
					<p>
						{' '}
						© 2019 Maintenance Tracker. All Rights Reserved | Design by <a href="#">ThreeWiseGuys</a>
					</p>
				</div>
			</div>
		);
	}
}

export default App;
