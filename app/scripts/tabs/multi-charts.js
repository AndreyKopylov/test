

	var
		$multiCharts = $('#multi-charts'),
		// block classes
		$multiChartsWrapSlide1 = $('.multi-charts__wrap-slide1'),
		$multiChartsWrapSlide3 = $('.multi-charts__wrap-slide3'),

		// animation classes
		multiChartSlideOne = 'js-multi-charts-slide-one',
		multiChartSlideOneTwo = 'js-multi-charts-slide-one-two',
		multiChartSlideOneThree = 'js-multi-charts-slide-one-three',

		multiChartSlideTwo = 'js-multi-charts-slide-two',
		multiChartSlideTwoTwo = 'js-multi-charts-slide-two-two',

		multiChartSlideThree = 'js-multi-charts-slide-three',

		multiChartSlideLast = 'js-multi-charts-slide-last',

		$multiChartNextBtn = $('#multiChartsBtn'),

		activeTab = 'js-active-tab',

		$sharing = $('#sharing'),
		sharingSlideOne = 'js-sharing-slide-one',
		sharingSlideOneTwo = 'js-sharing-slide-one-two',
		sharingSlideTwo = 'js-sharing-slide-two',

		$slider = $('#slider'),
		sliderBgGray = 'slider-bg-gray';

	// 1
	$(document).ready(function () {
		setTimeout(function () {
			$multiCharts.addClass(multiChartSlideOne);
			$multiCharts.addClass(activeTab);
		}, 500);
	});

	var slide12 = false;
	// 3
	$multiChartsWrapSlide1.on('click', function () {
		if (!slide12) {
			return false;
		} else if (slide12 = true) {
			$multiCharts.addClass(multiChartSlideOneThree, $multiCharts.hasClass(multiChartSlideTwo));
			setTimeout(function () {
				$multiCharts.addClass(multiChartSlideThree);
			}, 500);
			$multiCharts.removeClass(multiChartSlideOneTwo, $multiCharts.hasClass(multiChartSlideOneThree));
		}
	});
	// 2
	$multiChartsWrapSlide1.on('click', function () {
		$multiCharts.addClass(multiChartSlideOneTwo, $multiCharts.hasClass(multiChartSlideOne));
		setTimeout(function () {
			$multiCharts.addClass(multiChartSlideTwo);
		}, 500);
		$multiCharts.removeClass(multiChartSlideOne, $multiCharts.hasClass(multiChartSlideOneTwo));
		slide12 = true;
	});
	// 4
	$multiChartsWrapSlide3.on('click', function () {
		$multiCharts.addClass(multiChartSlideTwoTwo, $multiCharts.hasClass(multiChartSlideThree));
		setTimeout(function () {
			$multiCharts.addClass(multiChartSlideLast);
		}, 500);
		$multiCharts.removeClass(multiChartSlideTwo, $multiCharts.hasClass(multiChartSlideTwoTwo));
	});

	$multiChartNextBtn.on('click', function () {
		$multiCharts.removeClass();
		$sharing.addClass(activeTab);
		$slider.addClass(sliderBgGray);
		$sharing.addClass(sharingSlideOne);
		setTimeout(function () {
			$sharing.addClass(sharingSlideOneTwo);
			$sharing.addClass(sharingSlideTwo);
		}, 2000);

	});





