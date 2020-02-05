document.addEventListener("DOMContentLoaded", function() {
	// Custom JS

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
 $(this)
   .addClass('active ul_active').siblings().removeClass('ul_active active')
   .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

 });


});
