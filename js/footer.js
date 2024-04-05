document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('.footer');
    
    var footerText = document.createElement('div');
    footerText.classList.add('footer-text');
    
    if (typeof db_footer !== 'undefined' && typeof db_footer.left !== 'undefined') {
        var footerA = document.createElement('a');
        if (typeof db_footer.left.link !== 'undefined') {
            footerA.href = db_footer.left.link;
        }
        if (typeof db_footer.left.content !== 'undefined') {
            footerA.textContent = db_footer.left.content;
        }
    }
    footerText.appendChild(footerA);
    
    var footerSpan = document.createElement('span');
    footerSpan.classList.add('animate', 'scroll');
    footerSpan.style = '--i:1;';
    footerText.appendChild(footerSpan);
    
    footer.appendChild(footerText);
    
    var footerIconTop = document.createElement('div');
    footerIconTop.classList.add('footer-iconTop');
    
    var scrollIcon = document.createElement('a');
    scrollIcon.href = '#';
    scrollIcon.ariaLabel = document.body.dataset.active;
    
    var scrollIconI = document.createElement('i');
    scrollIconI.classList.add('bx', 'bx-up-arrow-alt');
    scrollIcon.appendChild(scrollIconI);
    
    footerIconTop.appendChild(scrollIcon);
    
    var scrollIconSpan = document.createElement('span');
    scrollIconSpan.classList.add('animate', "scroll");
    scrollIconSpan.style = '--i:3;';
    footerIconTop.appendChild(scrollIconSpan);
    
    footer.appendChild(footerIconTop);
});