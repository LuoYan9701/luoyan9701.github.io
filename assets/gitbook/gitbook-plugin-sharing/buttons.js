require(['gitbook', 'jquery'], function(gitbook, $) {
    var SITES = {
        'github': {
            'label': 'Github',
            'icon': 'fa fa-github',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://github.com');
            }
        },
        'csdn': {
            'label': 'CSDN',
            'icon': 'fa fa-star',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://blog.csdn.net/funtuan_13/article/details/144571863?spm=1001.2014.3001.5502');
            }
        }
    };



    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            var onClick = site.onClick;
            
            // override target link with provided link
            var side_link = opts[`${sideId}_link`]
            if (side_link !== undefined && side_link !== "") {
                onClick = function(e) {
                    e.preventDefault();
                    window.open(side_link);
                }
            }

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: onClick
            });
        });
    });
});
