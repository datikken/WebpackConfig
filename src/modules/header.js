import $ from 'jquery'

$('<h1/>')
  .text('Hello motherfucka')
  .css({
      textAlign: 'center',
      color: 'red'
  })
  .appendTo($('header'))

console.log('sum')

