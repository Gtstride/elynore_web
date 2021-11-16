/** @format */

import React from 'react';
import phn from '../../img/phn.png';

const OurServices = () => {
	return (
		<section id='services' className='service section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='wow zoomIn col-xs-12 text-center p-padding'>
						<h1 className='section-title'> our service </h1>{' '}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed accumsan
							venenatis lectus sed sollicitudin.Duis in odio ex.Sed elementum varius
							enim.In vel tincidunt lorem.Donec gravida felis vitae ipsum pharetra
							maximus.
						</p>
					</div>

					<div className='col-xs-12 col-sm-5 col-md-5'>
						<div className='left-column'>
							{/* <div className='wow zoomIn media'>
								<div className='media-left media-middle'>
									<a href='#0'>
										<i className='fa flaticon-christmas128' />
									</a>
								</div>
								<div className='media-body'>
									<h2> ajax page transitions </h2> <h3> Vero eos et accusamus et </h3>
									<span> iusto odio </span>{' '}
								</div>
							</div> */}
							<div className='wow zoomIn media'>
								<div className='media-left media-middle'>
									<a href='#0'>
										<i className='fa fa-database' />
									</a>
								</div>
								<div className='media-body'>
									<h2> ultimate layouts </h2>
									<h3> Vero eos et accusamus et </h3> <span> iusto odio </span>
								</div>
							</div>
							<div className='wow zoomIn media'>
								<div className='media-left media-middle'>
									<a href='#0'>
										<i className='fa fa-compress' />
									</a>
								</div>
								<div className='media-body'>
									<h2> responsive design </h2>
									<h3> Vero eos et accusamus et </h3> <span> iusto odio </span>
								</div>
							</div>
						</div>
					</div>
					{/* col-md-5 */}
					<div className='col-xs-6 col-sm-2 col-md-2 hidden-xs'>
						<div className='image-box'>
							<img className='img-responsive' src={phn} alt='' />
						</div>
					</div>
					{/* /col-md-2 */}
					<div className='col-xs-12 col-sm-5 col-md-5'>
						<div className='right-column'>
							<div className='wow zoomIn media'>
								{/* <div className='media-left media-middle'>
									<a href='#0'>
										<i className='fa flaticon-leaf32' />
									</a>
								</div> */}
								{/* <div className='media-body'>
									<h2> MULTIPLE HEADER styles </h2>
									<h3> Vero eos et accusamus et </h3> <span> iusto odio </span>
								</div> */}
							</div>
							{/* /.media */}
							<div className='wow zoomIn media'>
								<div className='media-left media-middle'>
									<a href='#0'>
										<i className='fa fa-rocket' />
									</a>
								</div>
								{/* media left*/}
								<div className='media-body'>
									<h2> ONE PAGE OPTION </h2> <h3> Vero eos et accusamus et </h3>
									<span> iusto odio </span>
								</div>
								{/*/.media body*/}
							</div>
							{/* /.media */}
							<div className='wow zoomIn media'>
								<div className='media-left media-middle'>
									<a href='#0'>
										<i className='fa fa-laptop' />
									</a>
								</div>
								<div className='media-body'>
									<h2> 24 / 7 HOURS SUPPORT </h2>
									<h3> Vero eos et accusamus et </h3> <span> iusto odio </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurServices;
