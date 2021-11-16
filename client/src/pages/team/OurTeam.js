/** @format */

import React from 'react';
import team1 from '../../img/team1.jpg';
import team2 from '../../img/team2.jpg';
import team3 from '../../img/team3.jpg';
import team5 from '../../img/team5.png';

const OurTeam = () => {
	return (
		<div>
			<section id='team' className='our-team section-padding'>
				<div className='container'>
					<div className='row'>
						<div className='wow zoomIn col-xs-12 text-center p-padding'>
							<h1 className='section-title'>meet our team</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
								venenatis lectus sed sollicitudin. Duis in odio ex. Sed elementum varius
								enim. In vel tincidunt lorem. Donec gravida felis vitae ipsum pharetra
								maximus.
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3'>
							<div className='grid'>
								<figure className='effect-duke'>
									<img className='img-responsive' src={team1} alt='ceo' />
									<figcaption>
										<div className='icon-holder'>
											<ul>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-facebook' />
													</a>
												</li>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-twitter' />
													</a>
												</li>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-linkedin' />
													</a>
												</li>
											</ul>
										</div>
									</figcaption>
								</figure>
							</div>
							<div className='team-designation'>
								<p>GODSTIME AGHO</p>
								<span>CEO / team-lead</span>
							</div>
						</div>
						<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3'>
							<div className='grid'>
								<figure className='effect-duke'>
									<img className='img-responsive' src={team5} alt='img09' />
									<figcaption>
										<div className='icon-holder'>
											<ul>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-facebook' />
													</a>
												</li>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-twitter' />
													</a>
												</li>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-linkedin' />
													</a>
												</li>
											</ul>
										</div>
									</figcaption>
								</figure>
							</div>
							<div className='team-designation'>
								<p>XXX</p>
								<span>hrm / graphics </span>
							</div>
						</div>
						<div className=' wow zoomIn col-xs-12 col-sm-6 col-md-3'>
							<div className='grid'>
								<figure className='effect-duke'>
									<img className='img-responsive' src={team2} alt='img09' />
									<figcaption>
										<div className='icon-holder'>
											<ul>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-facebook' />
													</a>
												</li>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-twitter' />
													</a>
												</li>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-linkedin' />
													</a>
												</li>
											</ul>
										</div>
									</figcaption>
								</figure>
							</div>
							<div className='team-designation'>
								<p>Olubusola A</p>
								<span>cto / programmer</span>
							</div>
						</div>
						<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3'>
							<div className='grid'>
								<figure className='effect-duke'>
									<img className='img-responsive' src={team3} alt='img09' />
									<figcaption>
										<div className='icon-holder'>
											<ul>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-facebook' />
													</a>
												</li>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-twitter' />
													</a>
												</li>
												<li>
													<a href='#0' target='_blank'>
														<i className='fa fa-linkedin' />
													</a>
												</li>
											</ul>
										</div>
									</figcaption>
								</figure>
							</div>
							<div className='team-designation'>
								<p>Anifowose Adekunle</p>
								<span>adviser / partner</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OurTeam;
