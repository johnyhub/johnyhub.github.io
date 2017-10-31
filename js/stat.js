$(document).ready(function () {
    var fired = false;
    window.addEventListener("scroll", function () {

        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (scrollTop >= 2400 && fired === false) {
           
            $(function() {
  $('.chart').easyPieChart({
    scaleColor: false,
    lineWidth: 10,
    lineCap: 'round',
    barColor: '#0F81FD',
    trackColor:	"#5a646a",
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
            fired = true;
        }
    });
});
            
            

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat1, {
                color: '#FC8311',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 6400,
                text: {
                    autoStylestat1: false
                },
                from: {
                    color: '#0F81FD',
                    width: 7
                },
                to: {
                    color: '#3367D6',
                    width: 8
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 1682);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Montserrat", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.5); // Number from 0.0 to 1.0

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat2, {
                color: '#F51736',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 4400,
                text: {
                    autoStylestat2: false
                },
                from: {
                    color: '#0F81FD',
                    width: 7
                },
                to: {
                    color: '#3367D6',
                    width: 8
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 2017);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Montserrat", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.75); // Number from 0.0 to 1.0

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat3, {
                color: '#F51736',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 5400,
                text: {
                    autoStylestat3: false
                },
                from: {
                    color: '#3367D6',
                    width: 7
                },
                to: {
                    color: '#0F81FD',
                    width: 8
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 522);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Montserrat", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.75); // Number from 0.0 to 1.0

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat4, {
                color: '#F51736',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 5000,
                text: {
                    autoStylestat4: false
                },
                from: {
                    color: '#3367D6',
                    width: 7
                },
                to: {
                    color: '#0F81FD',
                    width: 8
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 332);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Montserrat", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.75); // Number from 0.0 to 1.0

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat5, {
                color: '#F51736',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 5400,
                text: {
                    autoStylestat5: false
                },
                from: {
                    color: '#3367D6',
                    width: 7
                },
                to: {
                    color: '#0F81FD',
                    width: 8
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 129);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Montserrat", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.75); // Number from 0.0 to 1.0


            fired = true;
        }
    }, true)

});