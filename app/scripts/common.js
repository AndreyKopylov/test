$(function () {

	'use strict';



	var
		$multiCharts = $('#multi-charts'),
	// block classes
		$multiChartsWrapSlide1 = $('.multi-charts__wrap-slide1'),
		$multiChartsWrapSlide3 = $('.multi-charts__wrap-slide3'),

		$sharingWrapSlide2 = $('.sharing__wrap2-slide2'),

	// animation classes
		multiChartSlideOne = 'js-multi-charts-slide-one',
		multiChartSlideOneTwo = 'js-multi-charts-slide-one-two',
		multiChartSlideOneThree = 'js-multi-charts-slide-one-three',

		multiChartSlideTwo = 'js-multi-charts-slide-two',
		multiChartSlideTwoTwo = 'js-multi-charts-slide-two-two',

		multiChartSlideThree = 'js-multi-charts-slide-three',

		multiChartSlideLast = 'js-multi-charts-slide-last',

		$multiChartNextBtn = $('#multiChartsBtn'),
		$sharingNextBtn = $('#sharingBtn'),
		$dealsNextBtn = $('#dealsBtn'),

		activeTab = 'js-active-tab',

		$sharing = $('#sharing'),
		sharingSlideOne = 'js-sharing-slide-one',
		sharingSlideOneTwo = 'js-sharing-slide-one-two',
		sharingSlideTwo = 'js-sharing-slide-two',
		sharingSlideTwoTwo = 'js-sharing-slide-two-two',
		sharingSlideThree = 'js-sharing-slide-three',
		sharingSlideThreeTwo = 'js-sharing-slide-three-two',
		sharingSlideLast = 'js-sharing-slide-last',

		$deals = $('#deals'),
		dealsSlideOne = 'js-deals-slide-one',
		dealsSlideOneTwo = 'js-deals-slide-one-two',
		dealsSlideTwo = 'js-deals-slide-two',
		dealsSlideThree = 'js-deals-slide-three',
		dealsSlideThreeOne = 'js-deals-slide-three-one',
		dealsSlideFour = 'js-deals-slide-four',
		dealsSlideTextOne = 'js-deals-slide-text-one',

		$slider = $('#slider'),
		sliderBgGray = 'slider-bg-gray',

		// tabs
		$tabMultiCharts = $('.tabs__multi-charts'),
		$tabSharing = $('.tabs__sharing'),
		$tabDeals = $('.tabs__deals'),

		// tabs btn's
		tabMultiChartsActive = 'js-multi-charts-active',
		tabSharingActive = 'js-sharing-active',
		tabDealsActive = 'js-deals-active';

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
		$tabSharing.addClass(tabSharingActive);
		$tabMultiCharts.removeClass(tabMultiChartsActive);
		$sharing.addClass(activeTab);
		$sharing.addClass(sharingSlideOne);
		setTimeout(function () {
			$sharing.addClass(sharingSlideOneTwo);
			$sharing.addClass(sharingSlideTwo);

		}, 1000);
		setTimeout(function () {
			$sharing.addClass(sharingSlideThree);
		}, 1000);

	});
	$sharingWrapSlide2.on('click', function () {
		$sharing.removeClass(sharingSlideOneTwo);
		$sharing.removeClass(sharingSlideOne);
		$sharing.removeClass(sharingSlideTwo);
		$sharing.addClass(sharingSlideTwoTwo);
		$slider.addClass(sliderBgGray, $sharing.hasClass(sharingSlideTwoTwo));
		setTimeout(function () {
			$sharing.addClass(sharingSlideLast);
		}, 1000);
		setTimeout(function () {
			$sharing.removeClass(sharingSlideThree);
			$sharing.addClass(sharingSlideThreeTwo);
		}, 2000);
	});

	function removeSlides() {
		$multiCharts.removeClass();
		$multiCharts.addClass('multi-charts');
		$sharing.removeClass();
		$sharing.addClass('sharing');
		$deals.removeClass();
		$deals.addClass('deals');
		$slider.removeClass(sliderBgGray);

	}
	function removeTabs() {
		$tabMultiCharts.removeClass(tabMultiChartsActive);
		$tabSharing.removeClass(tabSharingActive);
		$tabDeals.removeClass(tabDealsActive);
	}

	$tabMultiCharts.on('click', function () {
		removeTabs();
		$(this).addClass(tabMultiChartsActive);
		removeSlides();
		setTimeout(function () {
			$multiCharts.addClass(multiChartSlideOne);
			$multiCharts.addClass(activeTab);
		}, 500);
	});
	$tabSharing.on('click', function () {
		removeTabs();
		$(this).addClass(tabSharingActive);
		removeSlides();
		$sharing.addClass(activeTab);
		$sharing.addClass(sharingSlideOne);
		setTimeout(function () {
			$sharing.addClass(sharingSlideOneTwo);
			$sharing.addClass(sharingSlideTwo);

		}, 1000);
		setTimeout(function () {
			$sharing.addClass(sharingSlideThree);
		}, 1000);
	});
	function dealsOpen(target) {
		target.on('click', function () {
			removeTabs();
			$tabDeals.addClass(tabDealsActive);
			removeSlides();
			$deals.addClass(activeTab);
			$deals.addClass(dealsSlideOne);
			setTimeout(function () {
				$deals.addClass(dealsSlideTwo);
			}, 1000);
			setTimeout(function () {
				$deals.addClass(dealsSlideThree);
			}, 2000);
			setTimeout(function () {
				$deals.addClass(dealsSlideThreeOne);
				$deals.addClass(dealsSlideTextOne)
			}, 2700);
		});
	}
	dealsOpen($tabDeals);
	dealsOpen($sharingNextBtn);

	$dealsNextBtn.on('click', function () {
		$deals.addClass(dealsSlideOneTwo);
		setTimeout(function () {
			$deals.addClass(dealsSlideFour);
			$deals.removeClass(dealsSlideTextOne);
		}, 1000);
	});
});

