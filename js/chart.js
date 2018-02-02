//controls za easyPie            
$(function() {
  $('.chart').easyPieChart({
    scaleColor: false,
    lineWidth: 10,
    lineCap: 'round',
    barColor: '#FF3333',
    trackColor:	"#7E7E7E",
    size: 130,
    animate: 8000
  });
});
        $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
            fired = true; // Only one ciklus
        }
    });
});
//controls za easyPie END         