// site.js — small helper used across pages
(function(){
    // Set copyright year
    try{
        var years = document.getElementsByClassName('copyright-year');
        var y = new Date().getFullYear();
        for(var i=0;i<years.length;i++) years[i].textContent = y;
    }catch(e){/* ignore */}

    // Simple contact form handler: if form has data and uses mailto, build body
    document.addEventListener('DOMContentLoaded', function(){
        var form = document.getElementById('dreamit-form');
        if(!form) return;
        form.addEventListener('submit', function(e){
            var action = form.getAttribute('action') || '';
            if(action.indexOf('mailto:')===0){
                // Allow default mailto behavior for GET forms; but build body for better UX
                var to = action.replace('mailto:','');
                var name = form.querySelector('input[name="Victim Name"]') ? form.querySelector('input[name="Victim Name"]').value : '';
                var phone = form.querySelector('input[name="Phone"]') ? form.querySelector('input[name="Phone"]').value : '';
                var email = form.querySelector('input[name="Email"]') ? form.querySelector('input[name="Email"]').value : '';
                var message = form.querySelector('textarea[name="message"]') ? form.querySelector('textarea[name="message"]').value : '';
                var subject = encodeURIComponent('Website enquiry from '+(name||'Anonymous'));
                var body = encodeURIComponent('Name: '+name+'\nPhone: '+phone+'\nEmail: '+email+'\n\nMessage:\n'+message);
                // Open mail client
                window.location.href = 'mailto:'+to+'?subject='+subject+'&body='+body;
                e.preventDefault();
            }
        });
    });
})();
