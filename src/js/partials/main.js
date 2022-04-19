$(document).ready(function () {


	if (window.matchMedia('(max-width: 900px)').matches) {

		$('.equipment__body-headings-item').children().each(function (i, el) {
			$('.equipment__body-items-item-option' + i).prepend(el);
		});

		$('.history__body-headings-item').children().each(function (i, el) {
			$('.history__body-items-item-option' + i).prepend(el);
		});

		$('.history__body-items-item-download-link-img').remove();
		$('.history__body-items-item-download-link').html('Скачать счет');

	}
});