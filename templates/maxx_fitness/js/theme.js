/**
 * Torbara Maxx-Fitness Template for Joomla, exclusively on Envato Market: http://themeforest.net/user/torbara
 * @encoding     UTF-8
 * @version      1.0
 * @copyright    Copyright (C) 2015 Torbara (http://torbara.com). All rights reserved.
 * @license      GNU General Public License version 2 or later, see http://www.gnu.org/licenses/gpl-2.0.html
 * @author       Alexandr Khmelnytsky (support@torbara.com)
 */

jQuery(function($) {

    var config = $('html').data('config') || {};

    // Social buttons
    $('article[data-permalink]').socialButtons(config);
    
    
    //Draw animated circular progress bars
    $('div[data-circle-value]').each(function( index ) {
        $(this).circleProgress({
            value: $(this).attr('data-circle-value'),
            size: 116,
            fill: {gradient: ["#03d2ef", "#0181d1"]},
            animation: { duration: 3200, easing: 'circleProgressEasing' }
        });
    });

});
