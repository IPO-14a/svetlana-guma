 /*
 * 
 * 
 */
 $(document).ready(function(){jQuery("#rotateImg").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            jQuery(this).rotate({animateTo:360})
        },
        mouseout : function() { 
            jQuery(this).rotate({animateTo:0})
        }
     } 
})
});