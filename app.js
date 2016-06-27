/ JavaScript Document

// JavaScript Document
$(document).ready(function() {
  console.log('ready');
  $('box one').click(function() {
    console.log('click');
    var widthToAnimateTo;
    var heightToAnimateTo;
    if( $('box two').css('width') == '100px' ){
      widthToAnimateTo = '200';
      heightToAnimateTo = '200';
    } else {
      widthToAnimateTo = '100';
      heightToAnimateTo = '100';
    }
    $('box two, box three').animate({
      width: widthToAnimateTo,
      height: heightToAnimateTo
    }, 5000, function() {
        // animation complete
        $('box three').css('background-color', 'gray');
    });
  });
});
  
