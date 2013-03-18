/*global define:false*/

define([
  'views/base/view',
  'text!templates/documentation/navigation.html',
  'jquery'
], function(View, template, $) {
  'use strict';

  return View.extend({
    template: template,
    className: 'documentation navigation',
    container: 'body > nav',
    autoRender: false,

    listen: {
      'documentation.index.rendered mediator': function() {
        var elements = []

        $('section').map(function() {
          var $this = $(this)

          elements.push({
            title:   $this.find('h2').text(),
            url:     '#' + $this.attr('id'),
            entries: $this.find('.subnav ul.nav-pills > li > a').map(function() {
              var $this = $(this)
              return { url: $this.attr('href'), title: $this.text() }
            }).toArray()
          })
        })

        this.options.elements = elements

        this.render()
      }
    }
  })
})
