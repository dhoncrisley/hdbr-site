import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParallaxService {

  public parallax(/* items:Array<Parallax> */) {
    var title = $('.section-title');
    var caption = $('.section-caption');
    var photo = $('.section-photo');
    var bg = $('.page-bg');
    var box1 = $('.box1');
    var box2 = $('.box2');
    var box3 = $('.box3');

    var photoCaption = $('.photo-caption');
    $(document).mousemove(function (e) {
      var windowWidth = $('body').width();
      var windowHeight = $('body').height();
      var itemWidth = title.outerWidth();
      var itemHeight = title.outerHeight();
      var newXPosition = e.pageX * ((itemWidth - windowWidth) / windowWidth + windowWidth - itemWidth);
      var newYPosition = e.pageY * ((itemHeight - windowHeight) / windowHeight + windowHeight - itemHeight);
      title.css({ "transform": "translate(-" + newXPosition * .000035 + "px, -" + newYPosition * .000035 + "px" });
      photoCaption.css({ "transform": "translate(-0px, -" + newYPosition * .00003 + "px" });
      caption.css({ "transform": "translate(-" + newXPosition * .00003 + "px, -" + newYPosition * .00003 + "px" });
      photo.css({ "transform": "translate(-" + newXPosition * .00005 + "px, -" + newYPosition * .00005 + "px" });
      bg.css({ "background-position": "" + newXPosition * .00001 + "px " + newYPosition * .00001 + "px" });

      box1.css({ 
        "right": "-"+newXPosition * .00009 + "px" ,
        "top": "-"+newYPosition * .00009 + "px" ,
        
      });
      box2.css({ 
        "bottom": "-"+newXPosition * .0001 + "px" ,
        "left": "-"+newYPosition * .0001 + "px" ,
        
      });
      box3.css({ 
        "bottom": "-"+newXPosition * .0002 + "px" ,
        "right": "-"+newYPosition * .0002 + "px" ,
        
      });

    });
  }
}
export class Parallax {
  item;
  position;
  force;

}