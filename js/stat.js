$(document).ready(function () {
    var fired = false;
    window.addEventListener("scroll", function () {

        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (scrollTop >= 1990 && fired === false) {

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat1, {
                color: '#FC8311',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 12,
                trailWidth: 11,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStylestat1: false
                },
                from: {
                    color: '#FC8311',
                    width: 11
                },
                to: {
                    color: '#FC8311',
                    width: 12
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
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.5); // Number from 0.0 to 1.0

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat2, {
                color: '#F51736',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 12,
                trailWidth: 11,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStylestat2: false
                },
                from: {
                    color: '#0F81FD',
                    width: 11
                },
                to: {
                    color: '#3367D6',
                    width: 12
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
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.75); // Number from 0.0 to 1.0

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat3, {
                color: '#F51736',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 12,
                trailWidth: 11,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStylestat3: false
                },
                from: {
                    color: '#3367D6',
                    width: 11
                },
                to: {
                    color: '#0F81FD',
                    width: 12
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
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.75); // Number from 0.0 to 1.0

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat4, {
                color: '#F51736',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 12,
                trailWidth: 11,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStylestat4: false
                },
                from: {
                    color: '#3367D6',
                    width: 11
                },
                to: {
                    color: '#0F81FD',
                    width: 12
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
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.75); // Number from 0.0 to 1.0

            // progressbar.js@1.0.0 version is used
            // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

            var bar = new ProgressBar.Circle(stat5, {
                color: '#F51736',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 12,
                trailWidth: 11,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStylestat5: false
                },
                from: {
                    color: '#3367D6',
                    width: 11
                },
                to: {
                    color: '#0F81FD',
                    width: 12
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
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '32px';
            bar.text.style.color = '#FFFFFF';

            bar.animate(0.75); // Number from 0.0 to 1.0


            fired = true;
        }
    }, true)

});