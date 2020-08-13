import React, { Component } from 'react';
import '../css/App.css';

class Home extends Component {
	componentDidMount() {
		this.loadScript();
	}

	handleProjecView = () => {

	}

	loadScript = () => {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navbar").style.top = "0";
				document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
			} else {
				document.getElementById("navbar").style.top = "-82px";
				document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
			}
			prevScrollpos = currentScrollPos;
		}

		document.querySelector("#main").addEventListener("mouseover", function () {
			document.getElementById("item-1").classList.toggle("item-1");
			document.getElementById("item-2").classList.toggle("item-2");
			document.getElementById("item-3").classList.toggle("item-3");
			document.getElementById("item-4").classList.toggle("item-4");
		});

		document.querySelector("#main").addEventListener("mouseout", function () {

			document.getElementById("item-1").classList.toggle("item-1");
			document.getElementById("item-2").classList.toggle("item-2");
			document.getElementById("item-3").classList.toggle("item-3");
			document.getElementById("item-4").classList.toggle("item-4");
		});
	}
	render() {
		return (
			<div className="Home">
				<div id="top" className="top">
					<nav id="navbar" className="navbar navbar-expand-lg navbar-light">
						<div className="container">
							<a className="navbar-brand" href="#">KRAYtech</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
								aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon ml-auto hidden-sm-up float-md-right"></span>
							</button>
							<div className="collapse navbar-collapse collapse" id="navbarNav">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<a className="nav-link" href="#top">Home</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#work">Interests</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#tool">Technologies</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#project">Projects</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#about">About</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#contact">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/* <div className="jumbotron container">
						<h1 className="display-4">Welcome to my corner!</h1>
						<p className="lead">Get to know more about me.</p>
						<hr className="my-4"></hr>
						<a className="btn btn-primary btn-lg" href="#about" role="button">Learn more</a>
					</div> */}
					<div className="welcome">
						<div className="neon">Wel</div>
						<div className="flux">come </div>
					</div>
				</div>

				<div id="work" className="work">
					<div className="title">Interests</div>
					<div className="container">
						<div className="row">
							<div id="work1" className="col-sm interest">
								<div className="work-title">
									<h2>Web Design</h2>
								</div>
							</div>
							<div id="work2" className="col-sm interest">
								<div className="work-title">
									<h2>Web Development</h2>
								</div>
							</div>
							<div id="work3" className="col-sm interest">
								<div className="work-title">
									<h2>Mobile App Development</h2>
								</div>
							</div>
							<div id="work4" className="col-sm interest">
								<div className="work-title">
									<h2>Photography</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="tool" className="tool">
					<div className="title">Technologies</div>
					<div className="container">
						<div className="row">
							<div id="tool1" className="col-sm tools">
								<div className="square" id="square1">
								</div>
							</div>
							<div id="tool2" className="col-sm tools">
								<div className="square" id="square2"></div>
							</div>
							<div id="tool3" className="col-sm tools">
								<div className="square" id="square3"></div>
							</div>
						</div>
					</div>
				</div>
				<div id="project" className="project">
					<div className="title">Projects</div>
					<div className="container">
						<div className="row">
							<div id="project1" className="col-sm projects">
								<div className="project-img" id="project1-img"></div>
								<div className="project-view row">
									{/* <a className="col-sm" href="https://quizbaby.herokuapp.com/" target="_blank">View Quiz Baby</a> */}
									<a className="col-sm" href="https://github.com/tungvox/quizbaby" target="_blank">View Source</a>
								</div>
							</div>
							<div id="project2" className="col-sm projects">
								<div className="project-img" id="project2-img"></div>
								<div className="project-view row">
									{/* <a className="col-sm" href="#">View Page</a> */}
									<a className="col-sm" href="https://github.com/tungvox/eatsmooth" target="_blank">View Source</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="about" className="about">
					<div className="drink">
						<div id="main"></div>
						<div id="item-1" className="content">
							<h3>Kray</h3>
						</div>
						<div id="item-2" className="content">
							<h3>Nini</h3>
						</div>
						<div id="item-3" className="content">
							<h3>VIETnam</h3>
						</div>
						<div id="item-4" className="content">
							<h3>CODEworm</h3>
						</div>
					</div>

				</div>
				<div id="contact" className="contact">
					<div id="left">
						<a id="brand" href="demo.html">KRAYtech</a>
						<div id="slogan">The slogan is supposed to be here. Yolo!</div>
					</div>
					<div id="right">
						<p><i className="fas fa-mobile-alt"></i> +358 46 9678137</p>
						<p><i className="fas fa-envelope"></i> tungvosgt@gmail.com</p>
						<p><i className="fas fa-map-marker-alt"></i> Yo-kyla , Turku, Finland.</p>
						<p><i className="fas fa-link"></i> kraytech.herokuapp.com</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;