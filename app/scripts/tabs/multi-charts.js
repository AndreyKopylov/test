

	var
		$multiCharts = $('.multi-charts'),
		// block classes
		$multiChartsWrapSlide1 = $('.multi-charts__wrap-slide1'),
		$multiChartsWrapSlide2 = $('.multi-charts__wrap-slide2'),
		$multiChartsWrapSlide3 = $('.multi-charts__wrap-slide3'),

		//animation classes
		multiChartSlideOne = 'js-multi-charts-slide-one',
		multiChartSlideOneTwo = 'js-multi-charts-slide-one-two',
		multiChartSlideOneThree = 'js-multi-charts-slide-one-three',

		multiChartSlideTwo = 'js-multi-charts-slide-two',
		multiChartSlideTwoTwo = 'js-multi-charts-slide-two-two',

		multiChartSlideThree = 'js-multi-charts-slide-three',

		multiChartSlideLast = 'js-multi-charts-slide-last',


	$(document).ready(function () {
		setTimeout(function () {
			$multiCharts.addClass(multiChartSlideOne);
		}, 500);
	});

	var slide12 = false;

	$multiChartsWrapSlide1.on('click', function () {
		if(!slide12) {
			return false;
		} else if (slide12 = true) {
			$multiCharts.addClass(multiChartSlideOneThree, $multiCharts.hasClass(multiChartSlideTwo));
			setTimeout(function () {
				$multiCharts.addClass(multiChartSlideThree);
			}, 500);
			$multiCharts.removeClass(multiChartSlideOneTwo, $multiCharts.hasClass(multiChartSlideOneThree));
		}
	});

	$multiChartsWrapSlide1.on('click', function () {
		$multiCharts.addClass(multiChartSlideOneTwo, $multiCharts.hasClass(multiChartSlideOne));
		setTimeout(function () {
			$multiCharts.addClass(multiChartSlideTwo);
		}, 500);
		$multiCharts.removeClass(multiChartSlideOne, $multiCharts.hasClass(multiChartSlideOneTwo));
		slide12 = true;
	});

	$multiChartsWrapSlide3.on('click', function () {
		$multiCharts.addClass(multiChartSlideTwoTwo, $multiCharts.hasClass(multiChartSlideThree));
		setTimeout(function () {
			$multiCharts.addClass(multiChartSlideLast);
		}, 500);
		$multiCharts.removeClass(multiChartSlideOne, $multiCharts.hasClass(multiChartSlideOneTwo));
	});






